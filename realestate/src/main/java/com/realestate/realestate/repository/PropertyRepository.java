package com.realestate.realestate.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.realestate.realestate.model.Property;

public interface PropertyRepository extends JpaRepository<Property, Long> {
}   