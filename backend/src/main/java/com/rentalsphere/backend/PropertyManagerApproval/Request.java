package com.rentalsphere.backend.PropertyManagerApproval;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Request {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private UUID id;
    private String email;
    private String status;
}
