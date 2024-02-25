package com.rentalsphere.backend.Property.Controller;

import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.Property.Service.PropertyService;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterRequest;
import com.rentalsphere.backend.Tenant.Model.Tenant;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/{id}")
    public ResponseEntity<Property> getPropertyApplicationById(@PathVariable Long id) {
        Optional<Property> property = propertyService.getPropertyApplicationById(id);
        return property.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Property>> getAllPropertyApplications() {
        List<Property> properties = propertyService.getAllPropertyApplications();
        return new ResponseEntity<>(properties, HttpStatus.OK);
    }
}
