package com.rentalsphere.backend.Tenant.Service;

import com.rentalsphere.backend.DTOs.TenantDTO;
import com.rentalsphere.backend.Enums.ApplicationStatus;
import com.rentalsphere.backend.Exception.Property.PropertyNotFoundException;
import com.rentalsphere.backend.Exception.Tenant.TenantNotFoundException;
import com.rentalsphere.backend.Mappers.TenantMapper;
import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.Property.Repository.PropertyRepository;
import com.rentalsphere.backend.RequestResponse.Tenant.GetAllTenantResponse;
import com.rentalsphere.backend.RequestResponse.Tenant.GetTenantResponse;
import com.rentalsphere.backend.Tenant.Model.Tenant;
import com.rentalsphere.backend.Tenant.Repository.TenantRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockedStatic;
import org.mockito.junit.jupiter.MockitoExtension;

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
    private Tenant tenant;
    @Mock
    private Property property;
    @Mock
    private TenantDTO tenantDTO;
    private GetAllTenantResponse getAllTenantResponseExpected;
    private GetTenantResponse getTenantResponseExpected;

    @BeforeEach
    void init(){
        getAllTenantResponseExpected = GetAllTenantResponse.builder()
                .isSuccess(true)
                .tenants(List.of(tenantDTO, tenantDTO))
                .timeStamp(new Date())
                .build();
        getTenantResponseExpected = GetTenantResponse.builder()
                .isSuccess(true)
                .tenant(tenantDTO)
                .timeStamp(new Date())
                .build();
    }

    @Test
    void testGetAllTenantApplicationsForProperty(){
        GetAllTenantResponse getAllTenantResponseActual;
        when(propertyRepository.findById(anyLong())).thenReturn(Optional.of(property));
        when(tenantRepository.findAllByPropertyAndApplicationStatus(any(Property.class), any(ApplicationStatus.class))).thenReturn(List.of(tenant));

        try(MockedStatic<TenantMapper> tenantMapper = mockStatic(TenantMapper.class)){
            tenantMapper.when(()->TenantMapper.convertToTenantDTOs(anyList())).thenReturn(List.of(tenantDTO, tenantDTO));
            getAllTenantResponseActual = tenantService.getAllTenantApplicationsForProperty(anyLong());
        }

        assertTrue(getAllTenantResponseActual.isSuccess());
        assertEquals(getAllTenantResponseExpected.getTenants(), getAllTenantResponseActual.getTenants());
    }

    @Test
    void testGetAllTenantApplicationsForProperty_PropertyNotFoundException(){
        when(propertyRepository.findById(anyLong())).thenReturn(Optional.empty());

        assertThrows(PropertyNotFoundException.class, ()->{
           tenantService.getAllTenantApplicationsForProperty(anyLong());
        });
    }

    @Test
    void testGetTenantApplicationById(){
        GetTenantResponse getTenantResponseActual;
        when(tenantRepository.findById(anyLong())).thenReturn(Optional.of(tenant));

        try(MockedStatic<TenantMapper> tenantMapper = mockStatic(TenantMapper.class)){
            tenantMapper.when(()->TenantMapper.convertToTenantDTO(tenant)).thenReturn(tenantDTO);
            getTenantResponseActual = tenantService.getTenantApplicationById(anyLong());
        }

        assertTrue(getTenantResponseActual.isSuccess());
        assertEquals(getTenantResponseExpected.getTenant(), getTenantResponseActual.getTenant());
    }

    @Test
    void testGetTenantApplicationById_TenantNotFound(){
        when(tenantRepository.findById(anyLong())).thenReturn(Optional.empty());

        assertThrows(TenantNotFoundException.class, ()->{
           tenantService.getTenantApplicationById(anyLong());
        });
    }
}
