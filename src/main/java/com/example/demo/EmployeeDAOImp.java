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
		  List<Employee> list = query.getResultList();
		  return list;
		 }
	
	public List<Employee> highestBonusByDep() {
		Session currSession = entityManager.unwrap(Session.class);
		  Query<Employee> query = currSession.createQuery("from Employee where (department, bonus) in (select department, MAX(bonus) from Employee group by department) order by bonus DESC", Employee.class);
		  List<Employee> list = query.getResultList();
		  return list;
	}
	
	public List<Employee> longestTenure() {
	Session currSession = entityManager.unwrap(Session.class);
	  Query<Employee> query = currSession.createQuery("from Employee where (department, hired) in (select department, MIN(hired) from Employee group by department) order by hired ASC", Employee.class);
	  List<Employee> list = query.getResultList();
	  return list;
	}
	
	public List<Employee> highestEdLevelByDep() {
		Session currSession = entityManager.unwrap(Session.class);
		  Query<Employee> query = currSession.createQuery("from Employee where (department, edlevel) in (select department, MAX(edlevel) from Employee group by department) order by edlevel DESC", Employee.class);
		  List<Employee> list = query.getResultList();
		  return list;
	}
	
	public List<Employee> salaryWithTenure() {
		Session currSession = entityManager.unwrap(Session.class);
		 @SuppressWarnings("unchecked")
		  Query<Employee> query = currSession.createSQLQuery("select * from tb_emp where hired < DATE_SUB(CURDATE(), INTERVAL 5 YEAR) order by salary DESC").addEntity(Employee.class);
		  query.setFirstResult(0);
		  query.setMaxResults(10);
		  List<Employee> list = query.list();
		  return list;
	}
	
	public List<Employee> highestGenderSalary() {
		Session currSession = entityManager.unwrap(Session.class);
		  Query<Employee> query = currSession.createQuery("from Employee where (gender, salary) in (select gender, MAX(salary) from Employee group by gender) order by salary DESC", Employee.class);
		  List<Employee> list = query.getResultList();
		  return list;
	}
	
	public List<Employee> deserveBonus() {
		Session currSession = entityManager.unwrap(Session.class);
		 @SuppressWarnings("unchecked")
		  Query<Employee> query = currSession.createSQLQuery("select * from tb_emp where hired < DATE_SUB(CURDATE(), INTERVAL 5 YEAR) and bonus = 0 order by hired ASC").addEntity(Employee.class);
		  List<Employee> list = query.list();
		  return list;
	}
	
	public List<Employee> lowerAveSalary() {
		Session currSession = entityManager.unwrap(Session.class);
		 @SuppressWarnings("unchecked")
		  Query<Employee> query = currSession.createSQLQuery("select * from tb_emp E1 where salary < (select AVG(salary) from tb_emp where department = E1.department) order by salary ASC").addEntity(Employee.class);
		  List<Employee> list = query.list();
		  return list;
	}
	
	public List<Employee> underpaidEdLevel() {
		Session currSession = entityManager.unwrap(Session.class);
		  Query<Employee> query = currSession.createQuery("from Employee where edlevel >= 5 and salary < 60000 order by salary ASC", Employee.class);
		  List<Employee> list = query.getResultList();
		  return list;
	}
	
	public List<Employee> richYoung() {
		Session currSession = entityManager.unwrap(Session.class);
		 @SuppressWarnings("unchecked")
		  Query<Employee> query = currSession.createSQLQuery("select * from tb_emp where dob > DATE_SUB(CURDATE(), INTERVAL 30 YEAR) and salary > 80000 order by salary DESC").addEntity(Employee.class);
		  List<Employee> list = query.list();
		  return list;
	}
}
