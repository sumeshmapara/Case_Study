package com.agricropsystem.farmer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agricropsystem.farmer.entity.Farmer;
import com.agricropsystem.farmer.service.FarmerService;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/farmers")

public class FarmerController {
	 @Autowired
     private FarmerService farmerService;
	 @PostMapping("/")
	 public Farmer addFarmer(@RequestBody Farmer farmer) {
		 return this.farmerService.save(farmer);
	 }
	 
	 @PutMapping("/{id}")
	 public Farmer updateFarmer(@RequestBody Farmer farmer) {
		 return this.farmerService.save(farmer);
	 }
	 
	 @DeleteMapping("/{id}")
	 public void deleteFarmer(@PathVariable long id) {
			this.farmerService.delete(id);
	 }
	 
	 @GetMapping("/")
	 public List<Farmer> getFarmer() {
	 return this.farmerService.findAll();
	 }
	 
	 
	 
	 
	 
}

