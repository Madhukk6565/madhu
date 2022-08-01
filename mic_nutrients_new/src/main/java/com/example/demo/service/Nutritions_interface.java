package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Nutrients;

public interface Nutritions_interface {
	
	
	public String saveNutrition(Nutrients ntr);
	 public Nutrients findByNutritionid(Integer nutritionid);
	 public String deleteById(Integer nutritionid) throws IdNOTEXIST;
	public List<Nutrients> findall();
//	public Nutrients findByfoodName(String foodname);


}
