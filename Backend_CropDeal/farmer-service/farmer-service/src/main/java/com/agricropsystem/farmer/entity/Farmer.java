package com.agricropsystem.farmer.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "farmerDetails")
public class Farmer {
	@Id
	 long id;
	 String List;
	 String availability;
	 String location;
	public Farmer() {
		super();
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getList() {
		return List;
	}
	public void setList(String list) {
		List = list;
	}
	public String getAvailability() {
		return availability;
	}
	public void setAvailability(String availability) {
		this.availability = availability;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Farmer(long id, String list, String availability, String location) {
		super();
		this.id = id;
		List = list;
		this.availability = availability;
		this.location = location;
	}
	
	 
}
