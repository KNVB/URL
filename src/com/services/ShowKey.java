package com.services;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/ShowKey")
public class ShowKey {

	public ShowKey() {
		// TODO Auto-generated constructor stub
	}
	@POST
    @Produces(MediaType.APPLICATION_JSON)
	public void show(@Context HttpHeaders httpHeaders) {
		String token = httpHeaders.getHeaderString("Authorization");
		System.out.println(token);
	}
}
