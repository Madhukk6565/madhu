package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Meal {
	
	@Id
	private int mealid;
	private  String meal;
	private String totalnutrients;
	public int getMealid() {
		return mealid;
	}
	public void setMealid(int mealid) {
		this.mealid = mealid;
	}
	public String getMeal() {
		return meal;
	}
	public void setMeal(String meal) {
		this.meal = meal;
	}
	public String getTotalnutrients() {
		return totalnutrients;
	}
	public void setTotalnutrients(String totalnutrients) {
		this.totalnutrients = totalnutrients;
	}
	@Override
	public String toString() {
		return "Meal [mealid=" + mealid + ", meal=" + meal + ", totalnutrients=" + totalnutrients + "]";
	}
	public Meal(int mealid, String meal, String totalnutrients) {
		super();
		this.mealid = mealid;
		this.meal = meal;
		this.totalnutrients = totalnutrients;
	}
	public Meal() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
