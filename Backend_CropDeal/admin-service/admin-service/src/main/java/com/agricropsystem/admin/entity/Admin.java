package com.agricropsystem.admin.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "adminDetails")
public class Admin {
	@Id
	 long adminid;
     String name;
	 String email;
	 String location;
	 long farmerid;
	 long dealerid;
	 
	 public Admin() {
			super();
		}

	public long getAdminid() {
		return adminid;
	}

	public void setAdminid(long adminid) {
		this.adminid = adminid;
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

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public long getFarmerid() {
		return farmerid;
	}

	public void setFarmerid(long farmerid) {
		this.farmerid = farmerid;
	}

	public long getDealerid() {
		return dealerid;
	}

	public void setDealerid(long dealerid) {
		this.dealerid = dealerid;
	}

	public Admin(long adminid, String name, String email, String location, long farmerid, long dealerid) {
		super();
		this.adminid = adminid;
		this.name = name;
		this.email = email;
		this.location = location;
		this.farmerid = farmerid;
		this.dealerid = dealerid;
	}
	 
}	 

	 
	 
	

