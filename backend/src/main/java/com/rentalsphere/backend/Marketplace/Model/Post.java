package com.rentalsphere.backend.Marketplace.Model;

import com.rentalsphere.backend.Enums.AvailabilityStatus;
import com.rentalsphere.backend.Tenant.Model.Tenant;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Entity(name = "Marketplace_Post")
@Table(name = "Marketplace_Post")
@Builder
@Data
@AllArgsConstructor
public class Post {
    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private Double price;
    private String imageUrl;
    @Enumerated(EnumType.STRING)
    private AvailabilityStatus availabilityStatus;
    private Date creationDate;
    @ManyToOne
    @JoinColumn(name = "tenant_id", referencedColumnName = "TenantID")
    private Tenant tenant;

    @PrePersist
    protected void onCreate(){
        creationDate = new Date();
    }
}
