package com.services;
import java.util.Date;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.*;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

@Path("/login")
public class LoginService {

	public LoginService() {
		// TODO Auto-generated constructor stub
	}
	@POST
    @Produces(MediaType.APPLICATION_JSON)
    public Response doLogin(@FormParam("userName") String userName, @FormParam("password") String password)
    {
		LoginResult loginResult=new LoginResult();
		userName=((userName==null)?"":userName);
		password=((password==null)?"":password);
		loginResult.setResultCode(-1);
		if (userName.equals("user") && password.equals("password"))
		{
			//Date expiresAt = new Date(System.currentTimeMillis()+ 24L * 3600L * 1000L);
			Date expiresAt = new Date(System.currentTimeMillis()+10000L);
			String jws = JWT.create()
					.withIssuer("auth0")
					.withClaim("isVip", "深水埗")
	                .withClaim("isAuthenticated", true)
	                .withExpiresAt(expiresAt)
	                // 使用了HMAC256加密算法。
	                // mysecret是用来加密数字签名的密钥。
	                .sign(Algorithm.HMAC256("mysecret"));
			loginResult.setResultCode(0);
			loginResult.setAccessToken(jws);
		}
		else
		{
			loginResult.setResultCode(-2);
		}
		return Response.ok(loginResult).build();
    }
}
