package com.rentalsphere.backend.PropertyManagerApproval;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Admin {
    @Id
    private String email;
}
