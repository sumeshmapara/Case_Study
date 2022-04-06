package com.agricropsystem.farmer;

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

import com.agricropsystem.farmer.entity.Farmer;
import com.agricropsystem.farmer.repository.FarmerRepository;
import com.agricropsystem.farmer.service.FarmerService;
@RunWith(SpringRunner.class)
@SpringBootTest
class FarmerServiceApplicationTests {
	@Autowired
	private FarmerService farmerService;
	@MockBean
	private FarmerRepository farmerRepository;
	
	@Test
	public void getFarmerTest() {
		when(farmerRepository.findAll()).thenReturn(Stream.of(new Farmer(11,"Seeds","Yes","Mumbai")).collect(Collectors.toList()));
		assertEquals(1,farmerService.findAll().size());
	}
	@Test
	public void deleteFarmerTest() {
		long id=11;
		Farmer farmer=new Farmer(11,"Seeds","Yes","Mumbai");
		farmerService.delete(id);
		verify(farmerRepository,times(1)).deleteById(id);
	}
	@Test
	public void savetest() {
		Farmer farmer=new Farmer(11,"Seeds","Yes","Mumbai");
		when(farmerRepository.save(farmer)).thenReturn(farmer);
		assertEquals(farmer,farmerService.save(farmer));
	}
	
}

	
