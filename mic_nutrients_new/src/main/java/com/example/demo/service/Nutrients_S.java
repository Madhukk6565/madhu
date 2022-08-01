package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.Nutrients_R;
import com.example.demo.entity.Nutrients;

@Service
public class Nutrients_S implements Nutritions_interface{
	
	@Autowired
	Nutrients_R repo;

	@Override
	public Nutrients findByNutritionid( Integer nutritionid) {
	return repo.findByNutritionid(nutritionid);
	}

	@Override
	public String saveNutrition(Nutrients ntr) {
		Nutrients nutrients=repo.save(ntr);
		return "Datasaved";
	
	}

	@Override
	public List<Nutrients> findall() {
		List<Nutrients> al=repo.findAll();
		return al;
	}

	@Override
	public String deleteById(Integer nutritionid)throws IdNOTEXIST {
		try
		{
			if(!repo.existsById(nutritionid)) {
				throw new IdNOTEXIST("Id not exist");
			}
			else {
				repo.deleteById(nutritionid);
				return "Id deleted";
			}
		}
			catch(IdNOTEXIST c)
			{
				c.printStackTrace();
			}
		return nutritionid+"not exist to delete";
		
		
	}
//	@Override
//	public Nutrients findByfoodName(String foodname) {
////	Nutrients n= repo.findByfoodname();
////		return n;
//	}
}
