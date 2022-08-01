package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Meal;

@Repository
public interface MealRepo  extends JpaRepository<Meal, Integer>{

}
