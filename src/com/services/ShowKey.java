package com.services;
import java.util.logging.Logger;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import javassist.bytecode.stackmap.TypeData.ClassName;

@Path("/ShowKey")
public class ShowKey {
	private static final Logger LOGGER = Logger.getLogger(ClassName.class.getName());
	public ShowKey() {
		// TODO Auto-generated constructor stub
	}
	@GET
    @Produces(MediaType.APPLICATION_JSON)
	public Response show() {
		return Response.ok("Access Ok").build();
	}
}
