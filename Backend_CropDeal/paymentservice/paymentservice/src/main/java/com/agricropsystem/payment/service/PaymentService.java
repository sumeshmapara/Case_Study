package com.agricropsystem.payment.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agricropsystem.payment.entity.Payment;
import com.agricropsystem.payment.repository.PaymentRepository;
@Service
public class PaymentService {
	@Autowired
    private PaymentRepository paymentRepository;
	public Payment save(Payment payment) {
		return paymentRepository.save(payment);
	}

	public void delete(long id) {
		paymentRepository.deleteById(id);
		
	}
//
//	public Object findAll() {
//		return paymentRepository.findAll();
//	}

	public List<Payment> findAll() {
		return paymentRepository.findAll();
	}

}
