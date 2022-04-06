package com.agricropsystem.dealer.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.agricropsystem.dealer.entity.Dealer;

@Repository
public interface DealerRepository extends MongoRepository<Dealer, Long>{
	
}
