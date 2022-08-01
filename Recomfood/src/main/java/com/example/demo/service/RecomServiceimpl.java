package com.example.demo.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.Recomfood;
import com.example.demo.repository.RecomRepository;

@Service
public class RecomServiceimpl implements Recomservice_i {
	@Autowired
	RecomRepository repo;

	@Override
	public List<Recomfood> findall() {
		List<Recomfood> rf=repo.findAll();
		return rf;
	}

	@Override
	public String save(Recomfood recomfood) {
		Recomfood rm= new Recomfood();
		if(repo.existsById(recomfood.getRecomondedfoodId()))
		{
			return "Its already in Recomonded";
		}
		else {
			rm =repo.save(recomfood);
			return "Added to Recomonded list";
		}

	}

	@Override
	public String DeleteById(Integer recomondedfoodId) {
		repo.deleteById(recomondedfoodId);
		return "Deleted";
	}

}
