package com.example.demo.controller;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import com.example.demo.entity.Meal;
import com.example.demo.service.Mealservimpl;
import com.fasterxml.jackson.databind.ObjectMapper;

import ch.qos.logback.core.net.ObjectWriter;
@WebMvcTest
class Meal_cTest {
	
	@Autowired
	MockMvc mock;
	

	@MockBean	
	Mealservimpl sv;
	

	
	Meal meal= new Meal();
	
	@BeforeEach
	public void setUp(){
		meal = new Meal();
	}

	@AfterEach
	public void tearDown(){
		
		meal = null;
	}
	
//	@Test
//	void testFindall() {
//		
//		
//	}

	@Test
	void testSave() {
		Meal meal= new Meal(1, "pulav", "400calories");
		when(sv.save(meal)).thenReturn(meal);
					
	}

//	@Test
//	void testDeleteById() {
//		fail("Not yet implemented");
//	}

}
