package com.agricropsystem.admin.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.agricropsystem.admin.entity.Admin;

@Repository
public interface AdminRepository extends MongoRepository<Admin, Long> {

}
