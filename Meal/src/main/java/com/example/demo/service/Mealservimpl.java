package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Meal;
import com.example.demo.repository.MealRepo;

@Service
public class Mealservimpl implements Meal_I {
	@Autowired
	MealRepo repo;

	@Override
	public List<Meal> findall() {
		List<Meal> al= repo.findAll();
		return al;
	}

	@Override
	public Meal save(Meal meal) {
		Meal ml=repo.save(meal);
		return ml;
	}

	@Override
	public String DeleteById(Integer mealid) {
		repo.deleteById(mealid);
		return "deleted";
		
	}

}
