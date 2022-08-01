package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Recomfood;

public interface Recomservice_i {
	
	public List<Recomfood> findall();
	public String save(Recomfood recomfood);
	public String DeleteById(Integer recomondedfoodId);

}
