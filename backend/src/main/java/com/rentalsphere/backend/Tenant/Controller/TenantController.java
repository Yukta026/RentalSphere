package com.rentalsphere.backend.Tenant.Controller;

import com.rentalsphere.backend.DTOs.TenantDTO;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterRequest;
import com.rentalsphere.backend.RequestResponse.Property.PropertyRegisterResponse;
import com.rentalsphere.backend.RequestResponse.Tenant.GetAllTenantResponse;
import com.rentalsphere.backend.RequestResponse.Tenant.GetTenantResponse;
import com.rentalsphere.backend.RequestResponse.Tenant.TenantRegisterRequest;
import com.rentalsphere.backend.RequestResponse.Tenant.TenantResponse;
import com.rentalsphere.backend.Tenant.Model.Tenant;
import com.rentalsphere.backend.Tenant.Service.TenantService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/tenantapplications")
public class TenantController {
    private final TenantService tenantService;

    @PostMapping("/register")
    public ResponseEntity<TenantResponse> createTenantApplication(@Valid @RequestBody TenantRegisterRequest request) {
        TenantResponse tenant = tenantService.saveTenantApplication(request);
        return new ResponseEntity<>(tenant, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TenantDTO> getTenantApplicationById(@PathVariable Long id) {
        return new ResponseEntity<>(tenantService.getTenantApplicationById(id), HttpStatus.OK);
    }

    @GetMapping("/property/{id}")
    public ResponseEntity<List<TenantDTO>> getAllTenantApplications(@PathVariable Long id) {
        List<TenantDTO> tenants = tenantService.getAllTenantApplications(id);
        return new ResponseEntity<>(tenants, HttpStatus.OK);
    }
}
