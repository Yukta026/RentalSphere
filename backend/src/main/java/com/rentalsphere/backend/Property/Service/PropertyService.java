package com.rentalsphere.backend.Property.Service;

import com.rentalsphere.backend.Property.Model.PropertyApplication;
import com.rentalsphere.backend.Property.Repository.PropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyService {

    @Autowired
    private PropertyRepository propertyRepository;

    public PropertyApplication savePropertyApplication(PropertyApplication propertyApplication) {

        // if (propertyApplication.getPropertyAddress() == null || propertyApplication.getPropertyAddress().isEmpty()) {
        //     throw new IllegalArgumentException("Property address cannot be empty");
        // }

        return propertyRepository.save(propertyApplication);
    }

    public List<PropertyApplication> getAllPropertyApplications() {
        return propertyRepository.findAll();
    }

    public Optional<PropertyApplication> getPropertyApplicationById(Long id) {
        return propertyRepository.findById(id);
    }
}
