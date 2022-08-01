package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Nutrients;


@Repository
public interface Nutrients_R  extends JpaRepository<Nutrients,Integer> {

	Nutrients findByNutritionid(Integer nutritionid);

//	Nutrients findByfoodname();

}
