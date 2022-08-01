package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Favorite;
import com.example.demo.repository.FavRepository;

@Service
public class FavServiceimpl implements FavService{
	@Autowired
	FavRepository fp;

	@Override
	public List<Favorite> findall() {
		List<Favorite> lf=fp.findAll();
		return lf;
	}
	
	@Override
	public String Addfavorite(Favorite fv) {
		if(fp.existsById(fv.getFavoriteId()))
		{
			return "Its already added";
		}
		else {
			Favorite fav=fp.save(fv);
			return "Added to Favourites list";
		}
				
	}

	@Override
	public String Deletefavorite(Integer favoriteId) {
		fp.deleteById(favoriteId);
		return "deleted";
	}

	

//	@Override
//	public String Deletefavorite(Integer userid) {
//	Favorite df = fp.deleteById(userid);
//		return "deleted";
//	}

	
	
	
}
