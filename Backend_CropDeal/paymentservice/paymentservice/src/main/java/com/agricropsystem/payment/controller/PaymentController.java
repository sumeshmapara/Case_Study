package com.agricropsystem.payment.controller;

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


import com.agricropsystem.payment.entity.Payment;
import com.agricropsystem.payment.service.PaymentService;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/payments")
public class PaymentController {
	@Autowired
    private PaymentService paymentService;
	 @PostMapping("/")
	 public Payment addPayment(@RequestBody Payment payment) {
		 return this.paymentService.save(payment);
	 }
	 
	 @PutMapping("/{id}")
	 public Payment updatePayment(@RequestBody Payment payment) {
		 return this.paymentService.save(payment);
	 }
	 
	 @DeleteMapping("/{id}")
	 public void deletePayment(@PathVariable long id) {
		 this.paymentService.delete(id);
	 }
	 
//	 @GetMapping("/")
//	 public ResponseEntity<?> getPayment(){
//		 return ResponseEntity.ok(this.paymentService.findAll());
//	 }
	 @GetMapping("/")
	 public List<Payment> getPayment() {
	 return this.paymentService.findAll();
	 }

}

