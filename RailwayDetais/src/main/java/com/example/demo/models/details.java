package com.example.demo.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "TrainDetails")
public class details {

	private String trainName;
	@Id
	private int trainNumber;
	List<stopTime> trainStopsAndTimes=new ArrayList<stopTime>();
	
	
	public details(String trainName, int trainNumber, List<stopTime> trainStopsAndTimes) {
		super();
		this.trainName = trainName;
		this.trainNumber = trainNumber;
		this.trainStopsAndTimes = trainStopsAndTimes;
	}


	public details() {
		super();
	}


	public String getTrainName() {
		return trainName;
	}


	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}


	public int getTrainNumber() {
		return trainNumber;
	}


	public void setTrainNumber(int trainNumber) {
		this.trainNumber = trainNumber;
	}


	public List<stopTime> getTrainStopsAndTimes() {
		return trainStopsAndTimes;
	}


	public void setTrainStopsAndTimes(List<stopTime> trainStopsAndTimes) {
		this.trainStopsAndTimes = trainStopsAndTimes;
	}


	@Override
	public String toString() {
		return "trainnumber"+trainNumber;
	}	
	
	
}
