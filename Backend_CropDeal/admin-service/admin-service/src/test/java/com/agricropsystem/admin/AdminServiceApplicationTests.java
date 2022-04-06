package com.agricropsystem.admin;

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

import com.agricropsystem.admin.entity.Admin;
import com.agricropsystem.admin.repository.AdminRepository;
import com.agricropsystem.admin.service.AdminService;
@RunWith(SpringRunner.class)
@SpringBootTest
class AdminServiceApplicationTests {
	@Autowired
	private AdminService adminService;
	@MockBean
	private AdminRepository adminRepository;

	@Test
	public void getAdminTest(){
		when(adminRepository.findAll()).thenReturn(Stream.of(new Admin(1,"raj","Sum@123","Pune",12,14)).collect(Collectors.toList()));
		assertEquals(1,adminService.findAll().size());
	}
	@Test
	public void deleteAdminTest() {
		long id=1;
		Admin admin=new Admin(1,"raj","Sum@123","Pune",12,14);
		adminService.delete(id);
		verify(adminRepository,times(1)).deleteById(id);
	}
	@Test
	public void saveTest() {
		Admin admin=new Admin(1,"raj","Sum@123","Pune",12,14);
		when(adminRepository.save(admin)).thenReturn(admin);
		assertEquals(admin,adminService.save(admin));
	}

}
