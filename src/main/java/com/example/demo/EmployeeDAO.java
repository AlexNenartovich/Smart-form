package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.example.demo.Employee;
public interface EmployeeDAO {
	List<Employee> get();
	 
	 Employee get(int id);
	 
	 void save(Employee employee);
	 
	 void delete(int id);
	 
	 List<Employee> highestSalaryByDep();
	 
	 List<Employee> highestBonusByDep();
	 
	 List<Employee> longestTenure();
	 
	 List<Employee> highestEdLevelByDep();
	 
	 List<Employee> salaryWithTenure();
}
