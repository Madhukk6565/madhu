package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.entity.Meal;
import com.example.demo.service.Mealservimpl;
@CrossOrigin(origins="*")
@RestController
public class Meal_c {
	
	@Autowired
	Mealservimpl sv;
	
	@GetMapping("/all")
	public List<Meal> findall(){
		return sv.findall();
	}
	
	@PostMapping("/save")
	public Meal save(@RequestBody Meal meal) {
		return sv.save(meal);
	}
	@DeleteMapping("/del/{mealid}")
	public String DeleteById(@PathVariable("mealid") Integer  mealid) {
		return sv.DeleteById(mealid);
	}

}
