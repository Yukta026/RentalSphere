package com.rentalsphere.backend.Property.Controller;

import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.Property.Service.PropertyService;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterRequest;
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
    public ResponseEntity<Property> createPropertyApplication(@Valid @RequestBody PropertyRegisterRequest request) {
        Property property = propertyService.savePropertyApplication(request);
        return new ResponseEntity<>(property, HttpStatus.CREATED);
    }
}
