package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Meal;

public interface Meal_I {
	
	public List<Meal> findall();
	public Meal save(Meal meal);
	public String DeleteById(Integer mealid);

}
