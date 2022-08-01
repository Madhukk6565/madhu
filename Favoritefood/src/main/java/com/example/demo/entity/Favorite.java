package com.example.demo.entity;

import javax.persistence.Entity;

import javax.persistence.Id;

@Entity
public class Favorite {
	@Id
	private int favoriteId;
	private String imgurl;
	private String foodname;
	public int getFavoriteId() {
		return favoriteId;
	}
	public void setFavoriteId(int favoriteId) {
		this.favoriteId = favoriteId;
	}
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	public String getFoodname() {
		return foodname;
	}
	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}
	public Favorite(int favoriteId, String imgurl, String foodname) {
		super();
		this.favoriteId = favoriteId;
		this.imgurl = imgurl;
		this.foodname = foodname;
	}
	public Favorite() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Favorite [favoriteId=" + favoriteId + ", imgurl=" + imgurl + ", foodname=" + foodname + "]";
	}
	
	
}
