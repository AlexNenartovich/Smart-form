package com.example.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.demo.EmployeeDAO;
import com.example.demo.Employee;

@Service
public class EmployeeServiceImp implements EmployeeService {
	@Autowired
	 private EmployeeDAO employeeDao;
	
	@Transactional
	 @Override
	 public List<Employee> get() {
	  return employeeDao.get();
	 }
	
	@Transactional
	 @Override
	 public Employee get(int id) {
	  return employeeDao.get(id);
	 }
	
	@Transactional
	 @Override
	 public void save(Employee employee) {
	  employeeDao.save(employee);
	 }
	
	@Transactional
	 @Override
	 public void delete(int id) {
	  employeeDao.delete(id);
	 }
	
	@Transactional
	 @Override
	 public List<Employee> highestSalaryByDep() {
		return employeeDao.highestSalaryByDep();
	}
	
	@Transactional
	 @Override
	 public List<Employee> highestBonusByDep() {
		return employeeDao.highestBonusByDep();
	}
	
	@Transactional
	 @Override
	 public List<Employee> longestTenure() {
		return employeeDao.longestTenure();
	}
	
	@Transactional
	 @Override
	 public List<Employee> highestEdLevelByDep() {
		return employeeDao.highestEdLevelByDep();
	}
	
	@Transactional
	 @Override
	 public List<Employee> salaryWithTenure() {
		return employeeDao.salaryWithTenure();
	}
	
	@Transactional
	 @Override
	 public List<Employee> highestGenderSalary() {
		return employeeDao.highestGenderSalary();
	}
	
	@Transactional
	 @Override
	 public List<Employee> deserveBonus() {
		return employeeDao.deserveBonus();
	}
	
	@Transactional
	 @Override
	 public List<Employee> lowerAveSalary() {
		return employeeDao.lowerAveSalary();
	}
}

