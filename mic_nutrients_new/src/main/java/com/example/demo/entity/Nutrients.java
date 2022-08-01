package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Nutrients {
	
	@Id
	private int nutritionid;
	private String foodname;
	private String ingredients;
	private String protien;
	private String calcium;
	private String fiber;
	private String vitamin_A;
	private String vitamin_C;
	private String carbohydrates;
	private String brand;
	private String imageurl;
	
	@Override
	public String toString() {
		return "Nutrients [nutritionid=" + nutritionid + ", foodname=" + foodname + ", ingredients=" + ingredients
				+ ", protien=" + protien + ", calcium=" + calcium + ", fiber=" + fiber + ", vitamin_A=" + vitamin_A
				+ ", vitamin_C=" + vitamin_C + ", carbohydrates=" + carbohydrates + ", imageurl=" + imageurl
				+ ", brand=" + brand + "]";
	}
	public Nutrients() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Nutrients(int nutritionid, String foodname, String ingredients, String protien, String calcium, String fiber,
			String vitamin_A, String vitamin_C, String carbohydrates, String imageurl, String brand) {
		super();
		this.nutritionid = nutritionid;
		this.foodname = foodname;
		this.ingredients = ingredients;
		this.protien = protien;
		this.calcium = calcium;
		this.fiber = fiber;
		this.vitamin_A = vitamin_A;
		this.vitamin_C = vitamin_C;
		this.carbohydrates = carbohydrates;
		this.imageurl = imageurl;
		this.brand = brand;
	}
	
	public int getNutritionid() {
		return nutritionid;
	}
	public void setNutritionid(int nutritionid) {
		this.nutritionid = nutritionid;
	}
	public String getFoodname() {
		return foodname;
	}
	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}
	public String getIngredients() {
		return ingredients;
	}
	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}
	public String getProtien() {
		return protien;
	}
	public void setProtien(String protien) {
		this.protien = protien;
	}
	public String getCalcium() {
		return calcium;
	}
	public void setCalcium(String calcium) {
		this.calcium = calcium;
	}
	public String getFiber() {
		return fiber;
	}
	public void setFiber(String fiber) {
		this.fiber = fiber;
	}
	public String getVitamin_A() {
		return vitamin_A;
	}
	public void setVitamin_A(String vitamin_A) {
		this.vitamin_A = vitamin_A;
	}
	public String getVitamin_C() {
		return vitamin_C;
	}
	public void setVitamin_C(String vitamin_C) {
		this.vitamin_C = vitamin_C;
	}
	public String getCarbohydrates() {
		return carbohydrates;
	}
	public void setCarbohydrates(String carbohydrates) {
		this.carbohydrates = carbohydrates;
	}
	public String getImageurl() {
		return imageurl;
	}
	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	
	
	

}
