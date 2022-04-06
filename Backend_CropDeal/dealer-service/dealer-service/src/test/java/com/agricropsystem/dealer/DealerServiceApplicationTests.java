package com.agricropsystem.dealer;

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

import com.agricropsystem.dealer.entity.Dealer;
import com.agricropsystem.dealer.repository.DealerRepository;
import com.agricropsystem.dealer.service.DealerService;
@RunWith(SpringRunner.class)
@SpringBootTest
class DealerServiceApplicationTests {
	@Autowired
	private DealerService dealerService;
	@MockBean
	private DealerRepository dealerRepository;

	@Test
	public void getDealerTest() {
		when(dealerRepository.findAll()).thenReturn(Stream.of(new Dealer(11,"Sumesh","sum@gmail.com","5",100)).collect(Collectors.toList()));
		assertEquals(1,dealerService.findAll().size());
	}
    @Test
    public void  deleteDealerTest() {
    	long id=11;
    	Dealer dealer=new Dealer(11,"Sumesh","sum@gmail.com","5",100);
    	dealerService.delete(id);
    	verify(dealerRepository,times(1)).deleteById(id);
    	
    }
    @Test
    public void saveTest() {
    	Dealer dealer=new Dealer(11,"Sumesh","sum@gmail.com","5",100);
    	when(dealerRepository.save(dealer)).thenReturn(dealer);
    	assertEquals(dealer,dealerService.save(dealer));
    }
}

