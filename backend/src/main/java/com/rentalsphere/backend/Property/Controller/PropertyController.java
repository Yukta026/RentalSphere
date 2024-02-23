package com.rentalsphere.backend.Property.Controller;

import com.rentalsphere.backend.Property.Model.PropertyApplication;
import com.rentalsphere.backend.Property.Service.PropertyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/propertyapplications")
public class PropertyController {
    private final PropertyService propertyService;

    @PostMapping(path = "/register")
    public ResponseEntity<PropertyApplication> createPropertyApplication(@Valid @RequestBody PropertyRequest request) {
        PropertyApplication propertyApplication = propertyService.savePropertyApplication(request);
        return new ResponseEntity<>(propertyApplication, HttpStatus.CREATED);
    }
}
