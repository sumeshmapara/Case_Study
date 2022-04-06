package com.agricropsystem.dealer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agricropsystem.dealer.entity.Dealer;
import com.agricropsystem.dealer.service.DealerService;



@RestController
@RequestMapping("/dealer")
public class DealerController {
	@Autowired
	private DealerService dealerService;
	@PostMapping("/")
	public Dealer addDealer (@RequestBody Dealer dealer) {
		return this.dealerService.save(dealer);
	}
	
	@PutMapping("/{id}")
	public Dealer updateDealer(@RequestBody Dealer dealer) {
		return this.dealerService.save(dealer);
	}
	@DeleteMapping("/{id}")
	public void deleteDealer(@PathVariable long id) {
		this.dealerService.delete(id);
	}

	 @GetMapping("/")
	 public List<Dealer> getDealer() {
	 return this.dealerService.findAll();
	 }
	 
}
