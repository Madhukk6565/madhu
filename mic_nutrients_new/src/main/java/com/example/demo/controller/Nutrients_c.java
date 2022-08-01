package com.example.demo.controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Nutrients;
import com.example.demo.service.IdNOTEXIST;
import com.example.demo.service.Nutrients_S;

@CrossOrigin(origins="*")
@RestController
public class Nutrients_c {
	
	@Autowired
	Nutrients_S serv;
	
	
	@GetMapping("/{nutritionid}")
	public Nutrients findByNutritionid(@PathVariable("nutritionid") Integer nutritionid) {
		return serv.findByNutritionid(nutritionid);
	}
	@GetMapping("/all")
	public List<Nutrients> findall(){
		return serv.findall();
		
	}
//	@GetMapping("/foodname")
//	public Nutrients findByfoodName(String foodname) {
//		return serv.findByfoodName(foodname);
//		
//	}


	@PostMapping("/save")
	public String saveNutrition(@RequestBody Nutrients ntr) {
		return serv.saveNutrition(ntr);
	}

	@DeleteMapping("/del/{nutritionid}")
	public String deleteById(@PathVariable("nutritionid")Integer nutritionid)throws IdNOTEXIST{
		return serv.deleteById(nutritionid);
}
}
