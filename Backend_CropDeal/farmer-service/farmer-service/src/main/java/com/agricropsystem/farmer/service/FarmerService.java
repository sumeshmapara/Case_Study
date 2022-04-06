package com.agricropsystem.farmer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agricropsystem.farmer.entity.Farmer;
import com.agricropsystem.farmer.repository.FarmerRepository;

@Service
public class FarmerService {
	 @Autowired
     private FarmerRepository farmerRepository;

	public Farmer save(Farmer farmer) {
		
		return farmerRepository.save(farmer);
	}

	public void delete(long id) {
		farmerRepository.deleteById(id);
	}

	public List<Farmer> findAll() {
		
		return farmerRepository.findAll();
	}
	
}

