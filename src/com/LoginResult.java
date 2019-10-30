package com;

public class LoginResult {

	private int resultCode=-1;
	private String accessToken=null;
	public LoginResult() {
	}
	public int getResultCode() {
		return resultCode;
	}
	public void setResultCode(int resultCode) {
		this.resultCode = resultCode;
	}
	public String getAccessToken() {
		return accessToken;
	}
	public void setAccessToken(String token) {
		this.accessToken = token;
	}	
}
