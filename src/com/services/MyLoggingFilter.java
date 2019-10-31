package com.services;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import javassist.bytecode.stackmap.TypeData.ClassName;

@Provider
public class MyLoggingFilter implements ContainerRequestFilter {
	private static final Logger LOGGER = Logger.getLogger(ClassName.class.getName());
	public MyLoggingFilter() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public void filter(ContainerRequestContext requestContext) throws IOException {
		String requestPath = requestContext.getUriInfo().getPath();
		if (!requestPath.equals("login")) {
			int result=0;
			String header=requestContext.getHeaderString("Authorization");
			if (header==null) {
				result=-1;
			}
			else {
				JWTVerifier verifier = JWT.require(Algorithm.HMAC256("mysecret"))
	                    .withIssuer("auth0")
	                    .withClaim("isVip", "isVip")
	                    .build();
				try {
					String token=header.split(" ")[1]; 
					DecodedJWT jwt = verifier.verify(token);
					if (System.currentTimeMillis()>jwt.getExpiresAt().getTime()) {
						result=-2;
					}
				}
				catch (Exception ex) {
					ex.printStackTrace();
					result=-3;
				}
			}
			if (result<0) {
				requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).entity("Unauthorized access").type(MediaType.APPLICATION_JSON).build());
			}
			LOGGER.info("request method="+ requestContext.getMethod()+",path="+requestContext.getUriInfo().getPath()+",token="+requestContext.getHeaderString("Authorization"));
		}
	}

}
