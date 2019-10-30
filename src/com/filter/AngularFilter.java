package com.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

public class AngularFilter implements Filter {
	FilterConfig filterConfig;
	public AngularFilter() {
		// TODO Auto-generated constructor stub
	}

	@Override
	public void destroy() {
		this.filterConfig = null;

	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		String destination = httpRequest.getRequestURI();
		String contextPath=httpRequest.getContextPath();
		System.out.println("Before "+destination);
		destination =destination.replaceAll(contextPath+"/frontEnd/", "");
		System.out.println("After "+destination);
		if ((destination.indexOf("/")==-1) && (destination.endsWith(".js")))
				chain.doFilter(request, response);
		else
			filterConfig.getServletContext().getRequestDispatcher("/frontEnd/index.html").forward(request, response);
	}

	@Override
	public void init(FilterConfig fConfig) throws ServletException {
		this.filterConfig=fConfig;

	}

}
