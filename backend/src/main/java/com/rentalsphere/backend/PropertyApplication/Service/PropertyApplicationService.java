package com.rentalsphere.backend.PropertyApplication.Service;

import com.rentalsphere.backend.PropertyApplication.Model.PropertyApplication;
import com.rentalsphere.backend.PropertyApplication.Repository.PropertyApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PropertyApplicationService {

    @Autowired
    private PropertyApplicationRepository propertyApplicationRepository;

    public PropertyApplication savePropertyApplication(PropertyApplication propertyApplication) {

        // if (propertyApplication.getPropertyAddress() == null || propertyApplication.getPropertyAddress().isEmpty()) {
        //     throw new IllegalArgumentException("Property address cannot be empty");
        // }

        return propertyApplicationRepository.save(propertyApplication);
    }

    public List<PropertyApplication> getAllPropertyApplications() {
        return propertyApplicationRepository.findAll();
    }

    public Optional<PropertyApplication> getPropertyApplicationById(Long id) {
        return propertyApplicationRepository.findById(id);
    }
}
