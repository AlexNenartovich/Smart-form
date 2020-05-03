package com.example.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.EmployeeService;
import com.example.demo.Employee;
@RestController
@RequestMapping("/api")
public class EmployeeController {
	@Autowired
	 private EmployeeService employeeService;
	 
	 @GetMapping("/employee")
	 public List<Employee> get() {
	  return employeeService.get();
	 }
	 
	 @PostMapping("/employee")
	 public Employee save(@RequestBody Employee employee) {
	  employeeService.save(employee);
	  return employee;
	 }
	 
	 @GetMapping("/employee/{id}")
	 public Employee get(@PathVariable int id) {
	  return employeeService.get(id);
	 }
	 
	 @DeleteMapping("/employee/{id}")
	 public String delete(@PathVariable int id) {
	  
	  employeeService.delete(id);
	  
	  return "Employee removed with id "+id;
	  
	 }
	 
	 @PutMapping("/employee")
	 public Employee update(@RequestBody Employee employee) {
	  employeeService.save(employee);
	  return employee;
	 }
	 
	 @GetMapping("/lastname")
	 public List<Employee> highestSalaryByDep() {
	  return employeeService.highestSalaryByDep();
	 }
	 
	 @GetMapping("/bonus")
	 public List<Employee> highestBonusByDep() {
	  return employeeService.highestBonusByDep();
	 }
	 
	 @GetMapping("/tenure")
	 public List<Employee> longestTenure() {
	  return employeeService.longestTenure();
	 }
	 
	 @GetMapping("/edlevel")
	 public List<Employee> highestEdLevelByDep() {
	  return employeeService.highestEdLevelByDep();
	 }
	 
	 @GetMapping("/longhired")
	 public List<Employee> salaryWithTenure() {
	  return employeeService.salaryWithTenure();
	 }
	 
	 @GetMapping("/gensal")
	 public List<Employee> highestGenderSalary() {
	  return employeeService.highestGenderSalary();
	 }
	 
	 @GetMapping("/desbonus")
	 public List<Employee> deserveBonus() {
	  return employeeService.deserveBonus();
	 }
	 
	 @GetMapping("/lowersal")
	 public List<Employee> lowerAveSalary() {
	  return employeeService.lowerAveSalary();
	 }
	 
	 @GetMapping("/underpaid")
	 public List<Employee> underpaidEdLevel() {
	  return employeeService.underpaidEdLevel();
	 }
	 
	 @GetMapping("/richyoung")
	 public List<Employee> richYoung() {
	  return employeeService.richYoung();
	 }
}

