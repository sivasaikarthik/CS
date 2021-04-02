package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.models.details;


public interface railwayRepository extends MongoRepository<details,Integer>{

}
