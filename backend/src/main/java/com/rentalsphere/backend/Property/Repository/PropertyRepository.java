package com.rentalsphere.backend.Property.Repository;

import com.rentalsphere.backend.Property.Model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {

    // This interface extends JpaRepository to inherit basic CRUD operations for Property entity.
    List<Property> findByCity(String city);
    List<Property> findByPropertyType(String propertyType);
}

