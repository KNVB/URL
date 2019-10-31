package com.filter;
import java.io.File;
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.FilterRegistration;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
		String destination,angularRootPath,realPath; 
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse=(HttpServletResponse)response;
		ServletContext context = httpRequest.getServletContext();
		destination =httpRequest.getServletPath();
		realPath =context.getRealPath(destination);
		angularRootPath="";
		File f = new File(realPath);
		if (f.exists()) {
			chain.doFilter(request, response);
		} else {
			FilterRegistration fr= context.getFilterRegistration("AngularFilter");
			for (String mapping: fr.getUrlPatternMappings()) {
				mapping=mapping.replace("/*", "");
				if (destination.indexOf(mapping)>-1) {
					angularRootPath=mapping;
					break;
				}
			}
			if (angularRootPath.equals("")) {
				httpResponse.sendError(HttpServletResponse.SC_NOT_FOUND);
			} else {
				filterConfig.getServletContext().getRequestDispatcher(angularRootPath+"/index.html").forward(request, response);
			}
		}
		f=null;		
	}

	@Override
	public void init(FilterConfig fConfig) throws ServletException {
		this.filterConfig=fConfig;

	}

}
