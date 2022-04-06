package com.agricropsystem.dealer.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agricropsystem.dealer.entity.Dealer;
import com.agricropsystem.dealer.repository.DealerRepository;
@Service
public class DealerService {
    @Autowired
    private DealerRepository dealerRepository;
    
	public Dealer save(Dealer dealer) {
	return dealerRepository.save(dealer);	
		
	}

	
	public List<Dealer> findAll() {
		return dealerRepository.findAll();
	}


	public void delete(long id) {
		dealerRepository.deleteById(id);
		
	}

}

