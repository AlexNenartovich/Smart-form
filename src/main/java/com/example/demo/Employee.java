package com.example.demo;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
@Entity
@Table(name = "tb_emp")
public class Employee {
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column
	 private Integer id;
	@Column
	 private String name;
	@Column
	 private String lastName;
	@Column
	 private String department;
	@Column
	@JsonFormat(pattern="yyy-MM-dd")
	 private Date hired;
	@Column
	 private Integer salary;
	@Column
	 private Integer bonus;
	@Column
	 private Integer edlevel;
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	 private Date dob;
	@Column
	 private String gender;
	@Override
	 public String toString() {
	  return "Employee [id= " + id + ", first name=" + name + " last name=" + lastName + ", gender="
	    + gender + "]";
	 }
	public Integer getId() {
	  return id;
	 }
	public void setId(Integer id) {
	  this.id = id;
	 }
	public String getName() {
	  return name;
	 }
	public void setName(String name) {
	  this.name = name;
	 }
	public String getLastName() {
	  return lastName;
	}
	public void setLastName(String lastName) {
	   this.lastName = lastName;
	}
	public String getDepartment() {
	  return department;
	 }
	public void setDepartment(String department) {
	  this.department = department;
	 }
	public Date getHired() {
	   return hired;
	}
	public void setHired(Date hired) {
	   this.hired = hired;
	}
	public Integer getSalary() {
		return salary;
	}
	public void setSalary(Integer salary) {
		this.salary = salary;
	}
	public Integer getBonus() {
		return bonus;
	}
	public void setBonus(Integer bonus) {
		this.bonus = bonus;
	}
	public Integer getEdlevel() {
		return edlevel;
	}
	public void setEdlevel(Integer edlevel) {
		this.edlevel = edlevel;
	}
	public Date getDob() {
	  return dob;
	 }
	public void setDob(Date dob) {
	  this.dob = dob;
	 }
	public String getGender() {
	  return gender;
	 }
	public void setGender(String gender) {
	  this.gender = gender;
	 }
}
