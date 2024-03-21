package com.rentalsphere.backend.Property.Controller;

import com.rentalsphere.backend.Property.Service.PropertyService;
import com.rentalsphere.backend.RequestResponse.Property.*;
import com.rentalsphere.backend.RequestResponse.Tenant.TenantResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.text.ParseException;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/property")
public class PropertyController {
    private final PropertyService propertyService;

    @PostMapping(path = "/register", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<PropertyRegisterResponse> createPropertyApplication(@Valid @ModelAttribute PropertyRegisterRequest request) throws IOException, ParseException {
        return new ResponseEntity<>(propertyService.savePropertyApplication(request), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<GetPropertyResponse> getPropertyApplicationById(@PathVariable Long id) {
        return new ResponseEntity<>(propertyService.getProperty(id), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<GetAllPropertyResponse> getAllPropertyApplications() {
        return new ResponseEntity<>(propertyService.getAllPropertyApplications(), HttpStatus.OK);
    }


    @GetMapping("/tenantappli/{id}")
    public ResponseEntity<GetTenantResponse> getTenantApplicationById(@PathVariable Long id){
        return new ResponseEntity<>(propertyService.getTenantApplicationById(id), HttpStatus.OK);
    }

    @PostMapping(path = "/approve/{email}")
    public ResponseEntity<TenantResponse> acceptTenantRequest(@PathVariable String email){
        return new ResponseEntity<>(propertyService.acceptTenantRequest(email), HttpStatus.OK);
    }

    @PostMapping(path = "/reject/{email}")
    public ResponseEntity<TenantResponse> rejectTenantRequest(@PathVariable String email){
        return new ResponseEntity<>(propertyService.rejectTenantRequest(email), HttpStatus.OK);
    }
}
