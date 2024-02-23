package com.rentalsphere.backend.Property.Repository;

import com.rentalsphere.backend.Property.Model.PropertyApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<PropertyApplication, Long> {

    // This interface extends JpaRepository to inherit basic CRUD operations for PropertyApplication entity.
    List<PropertyApplication> findByCity(String city);
    List<PropertyApplication> findByPropertyType(String propertyType);
}

