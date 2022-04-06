package com.agricropsystem.payment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.agricropsystem.payment.entity.Payment;

@Repository
public interface PaymentRepository extends MongoRepository<Payment, Long>{
	

}
