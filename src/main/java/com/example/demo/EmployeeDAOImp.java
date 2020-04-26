package com.example.demo;

import java.util.List;
import javax.persistence.EntityManager;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.example.demo.Employee;

@Repository
public class EmployeeDAOImp implements EmployeeDAO {
	@Autowired
	 private EntityManager entityManager;
	@Override
	 public List<Employee> get() {
	Session currSession = entityManager.unwrap(Session.class);
	  Query<Employee> query = currSession.createQuery("from Employee", Employee.class);
	  List<Employee> list = query.getResultList();
	  return list;
	}
	 @Override
	 public Employee get(int id) {
	  Session currSession = entityManager.unwrap(Session.class);
	  Employee emp = currSession.get(Employee.class, id);
	  return emp;
	 }
	@Override
	 public void save(Employee employee) {
	  
	  Session currSession = entityManager.unwrap(Session.class);
	  currSession.saveOrUpdate(employee);
	}
	@Override
	 public void delete(int id) {
	  Session currSession = entityManager.unwrap(Session.class);
	  Employee emp = currSession.get(Employee.class, id);
	  currSession.delete(emp);
	}
	
	@Override
	public List<Employee> highestSalaryByDep() {
		  Session currSession = entityManager.unwrap(Session.class);
		  Query<Employee> query = currSession.createQuery("from Employee where (department, salary) in (select department, MAX(salary) from Employee group by department) order by salary DESC", Employee.class);
		//  query.setFirstResult(0);
		//  query.setMaxResults(3);
		  List<Employee> list = query.getResultList();
		  return list;
		 }
	
	public List<Employee> highestBonusByDep() {
		Session currSession = entityManager.unwrap(Session.class);
		  Query<Employee> query = currSession.createQuery("from Employee where (department, bonus) in (select department, MAX(bonus) from Employee group by department) order by bonus DESC", Employee.class);
		//  query.setFirstResult(0);
		//  query.setMaxResults(3);
		  List<Employee> list = query.getResultList();
		  return list;
	}
	
	public List<Employee> longestTenure() {
	Session currSession = entityManager.unwrap(Session.class);
	  Query<Employee> query = currSession.createQuery("from Employee where (department, hired) in (select department, MIN(hired) from Employee group by department) order by hired ASC", Employee.class);
	//  query.setFirstResult(0);
	//  query.setMaxResults(3);
	  List<Employee> list = query.getResultList();
	  return list;
	}
}
