package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Favorite;

public interface FavService {
	
	public List<Favorite>  findall();
	public String Addfavorite(Favorite fv);
	
	public String Deletefavorite(Integer favoriteId);

}
