package com.revature.Project1_react_Java.repository;

import com.revature.Project1_react_Java.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select u from User u where u.username =?1")
    User getUserByUsername(String username);

    @Query("select u from User u where u.status =?1")
    User getUserByStatus(String status);
}
