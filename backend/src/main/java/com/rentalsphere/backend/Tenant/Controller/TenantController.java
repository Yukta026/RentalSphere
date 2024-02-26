package com.rentalsphere.backend.Tenant.Controller;

import com.rentalsphere.backend.RequestResponse.Tenant.TenantRegisterRequest;
import com.rentalsphere.backend.Tenant.Model.Tenant;
import com.rentalsphere.backend.Tenant.Service.TenantService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/tenantapplications")
public class TenantController {
    private final TenantService tenantService;

    @PostMapping("/register")
    public ResponseEntity<Tenant> createTenantApplication(@Valid @RequestBody TenantRegisterRequest request) {
        Tenant tenant = tenantService.saveTenantApplication(request);
        return new ResponseEntity<>(tenant, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tenant> getTenantApplicationById(@PathVariable Long id) {
        Optional<Tenant> tenant = tenantService.getTenantApplicationById(id);
        return tenant.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Tenant>> getAllTenantApplications() {
        List<Tenant> tenants = tenantService.getAllTenantApplications();
        return new ResponseEntity<>(tenants, HttpStatus.OK);
    }
}
