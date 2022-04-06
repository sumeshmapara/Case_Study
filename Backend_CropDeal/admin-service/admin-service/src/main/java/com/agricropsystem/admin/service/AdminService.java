package com.agricropsystem.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agricropsystem.admin.entity.Admin;
import com.agricropsystem.admin.repository.AdminRepository;

@Service
public class AdminService {
	@Autowired
	private AdminRepository adminRepository;

	public Admin save(Admin admin) {
		return adminRepository.save(admin);
	}

	public void delete(long id) {
		adminRepository.deleteById(id);
		
	}

	public List<Admin> findAll() {
		
		return adminRepository.findAll();
	}

//	public Object findAll() {
//		return adminRepository.findAll();
//	}
	

}


