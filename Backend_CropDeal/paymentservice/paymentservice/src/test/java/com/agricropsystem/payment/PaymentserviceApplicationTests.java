package com.agricropsystem.payment;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.agricropsystem.payment.entity.Payment;
import com.agricropsystem.payment.repository.PaymentRepository;
import com.agricropsystem.payment.service.PaymentService;
@RunWith(SpringRunner.class)
@SpringBootTest
class PaymentserviceApplicationTests {
	@Autowired
    private PaymentService paymentService;
	@MockBean
	private PaymentRepository paymentRepository;
	@Test
	public void getPaymentTest() {
		when(paymentRepository.findAll()).thenReturn(Stream.of(new Payment(1234567890,"1234",100)).collect(Collectors.toList()));
		assertEquals(1,paymentService.findAll().size());
	}
    @Test
    public void deletePaymentTest() {
    	long id=1234567890;
    	Payment payment=new Payment(1234567890,"1234",100);
    	paymentService.delete(id);
    	verify(paymentRepository,times(1)).deleteById(id);
    }
    @Test
    public void saveTest() {
    	Payment payment=new Payment(1234567890,"1234",100);
    	when(paymentRepository.save(payment)).thenReturn(payment);
    	assertEquals(payment,paymentService.save(payment));
    }

}
