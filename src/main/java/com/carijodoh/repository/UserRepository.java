package com.carijodoh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.carijodoh.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
//	@Query(value = "SELECT *\n"
//	+ "from user\n"
//	+ "Where (CASE "
//	+ "WHEN 'name'=:type THEN name LIKE %:value% "
//	+ "WHEN 'phone'=:type THEN phone LIKE %:value% "
//	+ "WHEN 'address'=:type THEN address LIKE %:value% "
//	+ "WHEN 'email'=:type THEN email LIKE %:value% "
//	+ "END)",nativeQuery=true)

	//	List<User> findBySearchBy(@Param("type")String type, @Param("value")String value);
	
//	@Query(value = "select * from user where name=? AND phone=?",nativeQuery = true)
//	User loginUser(String name, String phone);
}
