package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.details;
import com.example.demo.repository.railwayRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class trainDetailsController {
	
	@Autowired
	private railwayRepository repo;
	
	
	@GetMapping("/allTrains")
	public List<details> allTrains()
	{
		return repo.findAll();
	}
	
	  @GetMapping("/allTrains/{trainNumber}") 
	  public  Optional<details> findByTrainNumber(@PathVariable int trainNumber) { 
		  return repo.findById(trainNumber);
		  }
	 
	
	@PostMapping("/addTrain")
	public String addTrain(@RequestBody details d)
	{
		repo.save(d);
		return "Train details added";
	}
	
	@PutMapping("/updateTrain")
	public String updateTrain(@RequestBody details d)
	{
		repo.deleteById(d.getTrainNumber());
		repo.save(d);
		return "updated train details of "+d.getTrainName();
	}
	
	@DeleteMapping("/deleteTrain/{id}")
	public String deleteTrain(@PathVariable int id)
	{
		repo.deleteById(id);
		return "Deleted train details of "+id;
	}
	
	

}
