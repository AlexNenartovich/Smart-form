package com.example.demo;

import java.util.List;
import com.example.demo.Employee;
public interface EmployeeService {
	List<Employee> get();
	Employee get(int id);
	void save(Employee employee);
	void delete(int id);
	List<Employee> highestSalaryByDep();
	List<Employee> highestBonusByDep();
	List<Employee> longestTenure();
	List<Employee> highestEdLevelByDep();
	List<Employee> salaryWithTenure();
	List<Employee> highestGenderSalary();
	List<Employee> deserveBonus();
	List<Employee> lowerAveSalary();
	List<Employee> underpaidEdLevel();
	List<Employee> richYoung();
}
