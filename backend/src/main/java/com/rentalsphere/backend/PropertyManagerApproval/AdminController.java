package com.rentalsphere.backend.PropertyManagerApproval;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/v1/admin")
public class AdminController {
    @Autowired
    private RequestService requestService;

    @PostMapping("/approve/{email}")
    public ResponseEntity<?> approveRequest(@PathVariable String email){
        requestService.approveRequest(email);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/deny/{email}")
    public ResponseEntity<?> denyRequest(@PathVariable String email){
        requestService.denyRequest(email);
        return ResponseEntity.ok().build();
    }
}
