package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Recomfood {
	@Id
	private int RecomondedfoodId;
	private String foodname;
	private String brand;
	public int getRecomondedfoodId() {
		return RecomondedfoodId;
	}
	public void setRecomondedfoodId(int recomondedfoodId) {
		RecomondedfoodId = recomondedfoodId;
	}
	public String getFoodname() {
		return foodname;
	}
	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}
	public String getBrand() {
		return brand;
	}
	public Recomfood() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Recomfood(int recomondedfoodId, String foodname, String brand) {
		super();
		RecomondedfoodId = recomondedfoodId;
		this.foodname = foodname;
		this.brand = brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	@Override
	public String toString() {
		return "Recomfood [RecomondedfoodId=" + RecomondedfoodId + ", foodname=" + foodname + ", brand=" + brand + "]";
	}
	
	
	
	
	

}
