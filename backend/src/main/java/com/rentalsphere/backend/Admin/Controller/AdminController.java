package com.rentalsphere.backend.Admin.Controller;

import com.rentalsphere.backend.Admin.Service.AdminService;
import com.rentalsphere.backend.RequestResponse.Admin.PropertyManagerRequests;
import com.rentalsphere.backend.RequestResponse.Admin.PropertyManagerResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/v1/admin")
public class AdminController {
    private final AdminService adminService;

    @PostMapping(path = "/approve/{email}")
    public ResponseEntity<PropertyManagerResponse> acceptRequest(@PathVariable String email){
        return new ResponseEntity<>(adminService.acceptRequest(email), HttpStatus.OK);
    }

    @PostMapping(path = "/reject/{email}")
    public ResponseEntity<PropertyManagerResponse> rejectRequest(@PathVariable String email){
        return new ResponseEntity<>(adminService.rejectRequest(email), HttpStatus.OK);
    }

    @GetMapping(path = "/properties")
    public ResponseEntity<PropertyManagerRequests> getAllRequests(){
        return new ResponseEntity<>(adminService.getAllRequests(), HttpStatus.OK);
    }
}
