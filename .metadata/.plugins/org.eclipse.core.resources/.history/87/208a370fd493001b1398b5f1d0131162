package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.details;
import com.example.demo.repository.railwayRepository;


@RestController
public class trainDetailsController {
	
	@Autowired
	private railwayRepository repo;
	
	
	@GetMapping("/allTrains")
	public List<details> allTrains()
	{
		return repo.findAll();
	}
	
	@PostMapping("/addTrain")
	public String addTrain(@RequestBody details d)
	{
		repo.save(d);
		return "Train details added";
	}
	

}
