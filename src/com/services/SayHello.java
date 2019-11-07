package com.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.ServerResponse;

@Path("/SayHello")
public class SayHello {

	public SayHello() {
		// TODO Auto-generated constructor stub
	}
	@GET
    @Produces(MediaType.APPLICATION_JSON)
	public Response say() {
		ServerResponse sr=new  ServerResponse();
		sr.setReturnObj("你好嗎.");
		return Response.ok(sr).build();
	}
}
