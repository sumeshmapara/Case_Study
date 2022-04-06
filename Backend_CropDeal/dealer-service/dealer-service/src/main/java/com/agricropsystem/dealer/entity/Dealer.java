package com.agricropsystem.dealer.entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="dealerDetails")
public class Dealer {
	@Id
    Long id;
	String name;
	String email;
	String quantity;
	double price;
	
	public Dealer() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Dealer(long id, String name, String email, String quantity, double price) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.quantity = quantity;
		this.price = price;
	}

	
	
}
