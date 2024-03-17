package com.rentalsphere.backend.ViolationLog.Service;


import com.rentalsphere.backend.Exception.Property.PropertyNotFoundException;
import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.Property.Repository.PropertyRepository;
import com.rentalsphere.backend.RequestResponse.ViolationLog.UpdateViolationLogRequest;
import com.rentalsphere.backend.RequestResponse.ViolationLog.UpdateViolationLogResponse;
import com.rentalsphere.backend.RequestResponse.ViolationLog.ViolationLogRegisterRequest;
import com.rentalsphere.backend.RequestResponse.ViolationLog.ViolationLogRegisterResponse;
import com.rentalsphere.backend.ViolationLog.Model.ViolationLog;
import com.rentalsphere.backend.ViolationLog.Repository.ViolationLogRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ViolationLogServiceTest {

    @Mock
    private ViolationLogRepository violationLogRepository;

    @Mock
    private PropertyRepository propertyRepository;

    @InjectMocks
    private ViolationLogService violationLogService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllViolationLogs() {
        // Setup
        List<ViolationLog> violationLogs = Arrays.asList(new ViolationLog(), new ViolationLog());
        when(violationLogRepository.findAll()).thenReturn(violationLogs);

        // Execute
        List<ViolationLog> result = violationLogService.getAllViolationLogs();

        // Verify
        assertEquals(violationLogs, result);
    }

    @Test
    void testGetViolationLogById() {
        // Setup
        Long id = 1L;
        ViolationLog violationLog = new ViolationLog();
        violationLog.setId(id);
        when(violationLogRepository.findById(id)).thenReturn(Optional.of(violationLog));

        // Execute
        Optional<ViolationLog> result = violationLogService.getViolationLogById(id);

        // Verify
        assertTrue(result.isPresent());
        assertEquals(id, result.get().getId());
    }

    @Test
    void testCreateViolationLog() {
        // Setup
        Long propertyId = 1L;
        Property property = new Property();
        property.setPropertyApplicationID(propertyId);

        ViolationLogRegisterRequest request = new ViolationLogRegisterRequest();
        request.setPropertyId(propertyId);

        when(propertyRepository.findById(propertyId)).thenReturn(Optional.of(property));
        when(violationLogRepository.save(any(ViolationLog.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // Execute
        ViolationLogRegisterResponse response = violationLogService.createViolationLog(request);

        // Verify
        assertNotNull(response);
        assertTrue(response.isSuccess());
        assertEquals("Violation Log Added", response.getMessage());
        assertNotNull(response.getTimeStamp());
        verify(violationLogRepository, times(1)).save(any(ViolationLog.class));
    }

    @Test
    void testCreateViolationLog_PropertyNotFound() {
        // Setup
        Long propertyId = 1L;
        ViolationLogRegisterRequest request = new ViolationLogRegisterRequest();
        request.setPropertyId(propertyId);

        when(propertyRepository.findById(propertyId)).thenReturn(Optional.empty());

        // Verify
        assertThrows(PropertyNotFoundException.class, () -> violationLogService.createViolationLog(request));
        verify(violationLogRepository, never()).save(any());
    }

    @Test
    void testDeleteViolationLog() {
        // Setup
        Long id = 1L;

        // Execute
        violationLogService.deleteViolationLog(id);

        // Verify
        verify(violationLogRepository, times(1)).deleteById(id);
    }

    @Test
    void testUpdateViolationLog() {
        // Setup
        Long id = 1L;
        UpdateViolationLogRequest request = new UpdateViolationLogRequest();
        request.setId(id);
        request.setTitle("Updated Title");

        ViolationLog existingViolationLog = new ViolationLog();
        existingViolationLog.setId(id);

        when(violationLogRepository.findById(id)).thenReturn(Optional.of(existingViolationLog));
        when(violationLogRepository.save(any(ViolationLog.class))).thenAnswer(invocation -> invocation.getArgument(0));

        // Execute
        UpdateViolationLogResponse response = violationLogService.updateViolationLog(request);

        // Verify
        assertNotNull(response);
        assertTrue(response.isSuccess());
        assertEquals("Violation Log Updated", response.getMessage());
        assertNotNull(response.getTimeStamp());
        assertEquals(request.getTitle(), existingViolationLog.getTitle());
        verify(violationLogRepository, times(1)).save(existingViolationLog);
    }

    @Test
    void testUpdateViolationLog_ViolationLogNotFound() {
        // Setup
        Long id = 1L;
        UpdateViolationLogRequest request = new UpdateViolationLogRequest();
        request.setId(id);

        when(violationLogRepository.findById(id)).thenReturn(Optional.empty());

        // Verify
        assertThrows(RuntimeException.class, () -> violationLogService.updateViolationLog(request));
        verify(violationLogRepository, never()).save(any());
    }

    @Test
    void testGetAllViolationLogsByPropertyId() {
        // Setup
        Long propertyId = 1L;
        Property property = new Property();
        property.setPropertyApplicationID(propertyId);
        List<ViolationLog> violationLogs = Arrays.asList(new ViolationLog(), new ViolationLog());

        when(propertyRepository.findById(propertyId)).thenReturn(Optional.of(property));
        when(violationLogRepository.findAllByProperty(property)).thenReturn(violationLogs);

        // Execute
        List<ViolationLog> result = violationLogService.getAllViolationLogsByPropertyId(propertyId);

        // Verify
        assertEquals(violationLogs, result);
    }

    @Test
    void testGetAllViolationLogsByPropertyId_PropertyNotFound() {
        // Setup
        Long propertyId = 1L;
        when(propertyRepository.findById(propertyId)).thenReturn(Optional.empty());

        // Verify
        assertThrows(PropertyNotFoundException.class, () -> violationLogService.getAllViolationLogsByPropertyId(propertyId));
        verify(violationLogRepository, never()).findAllByProperty(any());
    }
}
