package com.example.demo.service;

public class IdNOTEXIST extends Exception {
	
	private String message;

	public IdNOTEXIST(String string) {
		// TODO Auto-generated constructor stub
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	

}
