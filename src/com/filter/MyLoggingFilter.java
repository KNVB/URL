package com.filter;

import java.io.IOException;

import java.util.logging.Logger;

import javax.ws.rs.Produces;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;

import com.ServerResponse;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.InvalidClaimException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;

import javassist.bytecode.stackmap.TypeData.ClassName;

@Provider
public class MyLoggingFilter implements ContainerRequestFilter {
	private static final Logger LOGGER = Logger.getLogger(ClassName.class.getName());
	public MyLoggingFilter() {
		// TODO Auto-generated constructor stub
	}

	@Override
	@Produces(MediaType.APPLICATION_JSON)
	public void filter(ContainerRequestContext requestContext) throws IOException {
		String requestPath = requestContext.getUriInfo().getPath();
		if (!requestPath.equals("login")) {
			String header=requestContext.getHeaderString("Authorization");
			ServerResponse sr=new  ServerResponse();
			if (header==null) {
				sr.setReturnCode(-1);
				sr.setErrorMessage("Missing Access token");
			}
			else {
				JWTVerifier verifier = JWT.require(Algorithm.HMAC256("mysecret"))
	                    .withIssuer("auth0")
	                    .withClaim("isVip", "深水埗")
	                    .build();
				try {
					String token=header.split(" ")[1]; 
					DecodedJWT jwt = verifier.verify(token);
					
				}
				catch (TokenExpiredException t) {
					sr.setReturnCode(-1);
					sr.setErrorMessage("Session Expired");
				}
				catch (JWTVerificationException je) {
					sr.setReturnCode(-1);
					sr.setErrorMessage("Invalid token");
				}				
				catch (Exception ex) {
					ex.printStackTrace();
					sr.setReturnCode(-10);
					sr.setErrorMessage(ex.getMessage());
				}
				
			}
			if (sr.getReturnCode()!=0)
				requestContext.abortWith(Response.status(Response.Status.BAD_REQUEST).entity(sr).build());
			LOGGER.info("request method="+ requestContext.getMethod()+",path="+requestContext.getUriInfo().getPath()+",token="+requestContext.getHeaderString("Authorization"));
		}
	}

}
