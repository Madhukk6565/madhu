package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Recomfood;
import com.example.demo.service.RecomServiceimpl;

@CrossOrigin(origins="*")
@RestController
public class Recomcontroller {
	@Autowired
	RecomServiceimpl si;
	
	@GetMapping("/all")
	public List<Recomfood> findall(){
		return si.findall();
	}
	@PostMapping("/save")
	public String save(@RequestBody Recomfood recomfood) {
		return si.save(recomfood);
		
	}
	@DeleteMapping("/del/{recomondedfoodid}")
	public String deleteFavfood(@PathVariable("recomondedfoodid") Integer recomondedfoodId)  {
	return si.DeleteById(recomondedfoodId);
	 
 }

	

}
