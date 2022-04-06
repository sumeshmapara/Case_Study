package com.agricropsystem.admin.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agricropsystem.admin.entity.Admin;
import com.agricropsystem.admin.service.AdminService;

import lombok.extern.slf4j.Slf4j;


@RestController
@Slf4j
@RequestMapping("/aadmin")
public class AdminController {
	final Logger logger=LoggerFactory.getLogger(AdminController.class);
	@Autowired
	private AdminService adminService;
	@PostMapping("/")
	public Admin addAdmin(@RequestBody Admin admin) {
		logger.info("Inside admin of AdminController");
		return this.adminService.save(admin);
	}
	 
	 @PutMapping("/{id}")
	 public Admin updateAdmin(@RequestBody Admin admin) {
		 return this.adminService.save(admin);
	 }
	 
	 @DeleteMapping("/{id}")
	 public void deleteAdmin(@PathVariable long id) {
		 this.adminService.delete(id);
	 }
	 
	 @GetMapping("/")
	 public List<Admin> getAdmin() {
	 return this.adminService.findAll();
	 }
}


