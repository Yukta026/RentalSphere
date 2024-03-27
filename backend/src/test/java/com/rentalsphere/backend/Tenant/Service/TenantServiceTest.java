package com.rentalsphere.backend.Tenant.Service;

import com.rentalsphere.backend.DTOs.TenantDTO;
import com.rentalsphere.backend.Enums.ApplicationStatus;
import com.rentalsphere.backend.Exception.Property.PropertyNotFoundException;
import com.rentalsphere.backend.Exception.Tenant.TenantNotFoundException;
import com.rentalsphere.backend.Mappers.PropertyMapper;
import com.rentalsphere.backend.Mappers.TenantMapper;
import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.Property.Repository.PropertyRepository;
import com.rentalsphere.backend.Tenant.Model.Tenant;
import com.rentalsphere.backend.Tenant.Repository.TenantRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class TenantServiceTest {
    @InjectMocks
    private TenantService tenantService;
    @Mock
    private TenantRepository tenantRepository;
    @Mock
    private PropertyRepository propertyRepository;
    @Mock
    private Property property;
    @Mock
    private Tenant tenant;
    @Mock
    private List<Tenant> tenants;
    private List<TenantDTO> dummyTenants;

    @BeforeEach
    void init(){
        TenantDTO dummyTenant1 = new TenantDTO();
        dummyTenant1.setId(1L);
        dummyTenant1.setName("John Doe");
        dummyTenant1.setEmail("johndoe@example.com");
        dummyTenant1.setPhoneNumber("555-555-5555");
        dummyTenant1.setDateOfBirth(new Date());
        dummyTenant1.setDesiredMoveInDate(new Date());
        dummyTenant1.setNumOccupants(2);
        dummyTenant1.setApplicationDate(new Date());

        TenantDTO dummyTenant2 = new TenantDTO();
        dummyTenant2.setId(2L);
        dummyTenant2.setName("Jane Doe");
        dummyTenant2.setEmail("janedoe@example.com");
        dummyTenant2.setPhoneNumber("555-555-5556");
        dummyTenant2.setDateOfBirth(new Date());
        dummyTenant2.setDesiredMoveInDate(new Date());
        dummyTenant2.setNumOccupants(1);
        dummyTenant2.setApplicationDate(new Date());

        this.dummyTenants = Arrays.asList(dummyTenant1, dummyTenant2);
    }

    @Test
    void testGetAllTenantApplications(){
        List<TenantDTO> actualResponse;

        when(propertyRepository.findById(anyLong())).thenReturn(Optional.of(property));
        when(tenantRepository.findAllByPropertyAndApplicationStatus(any(Property.class), any(ApplicationStatus.class))).thenReturn(tenants);

        try(MockedStatic<TenantMapper> tenantMapper = mockStatic(TenantMapper.class)){
            tenantMapper.when(()->TenantMapper.convertToTenantDTOs(anyList())).thenReturn(dummyTenants);
            actualResponse = tenantService.getAllTenantApplications(anyLong());
        }

        assertEquals(dummyTenants, actualResponse);
    }

    @Test
    void testGetAllTenantApplicationsNotFoundException(){
        when(propertyRepository.findById(anyLong())).thenReturn(Optional.empty());

        assertThrows(PropertyNotFoundException.class, ()->{
            tenantService.getAllTenantApplications(1L);
        });
    }

    @Test
    void testGetTenantApplicationById(){
        TenantDTO actualResponse;

        when(tenantRepository.findById(anyLong())).thenReturn(Optional.of(tenant));

        try(MockedStatic<TenantMapper> tenantMapper = mockStatic(TenantMapper.class)){
            tenantMapper.when(()->TenantMapper.convertToTenantDTO(any(Tenant.class))).thenReturn(dummyTenants.get(0));
            actualResponse = tenantService.getTenantApplicationById(anyLong());
        }

        assertEquals(dummyTenants.get(0), actualResponse);
    }

    @Test
    void testGetTenantApplicationByIdNotFoundException(){
        when(tenantRepository.findById(anyLong())).thenReturn(Optional.empty());

        assertThrows(TenantNotFoundException.class, ()->{
           tenantService.getTenantApplicationById(anyLong());
        });
    }
}