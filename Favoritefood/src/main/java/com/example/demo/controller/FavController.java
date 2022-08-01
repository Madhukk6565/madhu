package com.example.demo.controller;

import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Favorite;
import com.example.demo.service.FavServiceimpl;
@CrossOrigin(origins="*")
@RestController
public class FavController {
	@Autowired
	FavServiceimpl fs;
	
	@GetMapping("/all")
	public List<Favorite> findall(){
		return fs.findall();
	}
	
	@PostMapping("/save")
	public String Addfavorite(@RequestBody Favorite fv) {
		return fs.Addfavorite(fv);
	}
	@DeleteMapping("/del/{favoriteid}")
	public String DeletefavoriteById(@PathVariable("favoriteid") Integer  favoriteId) {
		return fs.Deletefavorite(favoriteId);
	}

}
