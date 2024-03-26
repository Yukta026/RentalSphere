package com.rentalsphere.backend.AnnouncementTests.Service;

import com.rentalsphere.backend.Announcement.Model.Announcement;
import com.rentalsphere.backend.Announcement.Repository.AnnouncementRepository;
import com.rentalsphere.backend.Announcement.Service.AnnouncementService;
import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.RequestResponse.Announcement.AnnouncementRegisterRequest;
import com.rentalsphere.backend.Property.Repository.PropertyRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AnnouncementTests {

    @Mock
    private AnnouncementRepository announcementRepository;

    @Mock
    private PropertyRepository propertyRepository;

    @InjectMocks
    private AnnouncementService announcementService;



    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllAnnouncements() {
        // Mock data
        Announcement announcement1 = new Announcement(1L, "Title 1", "Content 1", new Date());
        Announcement announcement2 = new Announcement(2L, "Title 2", "Content 2", new Date());
        List<Announcement> announcementList = Arrays.asList(announcement1, announcement2);

        // Mock repository behavior
        when(announcementRepository.findAll()).thenReturn(announcementList);

        // Call the service method
        List<Announcement> result = announcementService.getAllAnnouncements();

        // Verify that the repository findAll method was called
        verify(announcementRepository).findAll();

        // Assert the result
        assertEquals(2, result.size());
        assertEquals(announcement1, result.get(0));
        assertEquals(announcement2, result.get(1));
    }

    @Test
    void testGetAnnouncementById() {
        // Mock data
        Long announcementId = 1L;
        Announcement announcement = new Announcement(announcementId, "Title", "Content", new Date());

        // Mock repository behavior
        when(announcementRepository.findById(announcementId)).thenReturn(Optional.of(announcement));

        // Call the service method
        Optional<Announcement> result = announcementService.getAnnouncementById(announcementId);

        // Verify that the repository findById method was called
        verify(announcementRepository).findById(announcementId);

        // Assert the result
        assertTrue(result.isPresent());
        assertEquals(announcement, result.get());
    }

    @Test
    void testCreateAnnouncement() {
        // Mock input data
        AnnouncementRegisterRequest request = new AnnouncementRegisterRequest("Title", "Content");
        request.setPropertyId(1L); // Set property ID

        // Mock repository behavior
        Property property = new Property();
        property.setPropertyApplicationID(1L); // Set property ID
        Announcement savedAnnouncement = new Announcement(1L, "Title", "Content", new Date());
        savedAnnouncement.setProperty(property);
        when(propertyRepository.findById(anyLong())).thenReturn(Optional.of(property)); // Mock property repository
        when(announcementRepository.save(any(Announcement.class))).thenReturn(savedAnnouncement);

        // Call the service method
        Announcement result = announcementService.createAnnouncement(request);

        // Verify that the repository save method was called with the correct parameters
        verify(announcementRepository).save(any(Announcement.class));

        // Assert the result
        assertEquals(savedAnnouncement, result);
    }

    // Remaining test cases unchanged


    @Test
    void testDeleteAnnouncement() {
        // Mock data
        Long announcementId = 1L;

        // Call the service method
        announcementService.deleteAnnouncement(announcementId);

        // Verify that the repository deleteById method was called with the correct parameter
        verify(announcementRepository).deleteById(announcementId);
    }

    @Test
    void testUpdateAnnouncement() {
        // Mock data
        Long announcementId = 1L;
        Announcement existingAnnouncement = new Announcement(announcementId, "Title", "Content", new Date());
        Announcement newAnnouncement = new Announcement(announcementId, "Updated Title", "Updated Content", new Date());
        Property property = new Property();
        property.setPropertyApplicationID(1L); // Set property ID for new announcement
        newAnnouncement.setProperty(property); // Set property for new announcement

        // Mock repository behavior
        when(announcementRepository.findById(announcementId)).thenReturn(Optional.of(existingAnnouncement));
        when(propertyRepository.findById(anyLong())).thenReturn(Optional.of(property)); // Mock property repository
        when(announcementRepository.save(any(Announcement.class))).thenReturn(newAnnouncement);

        // Call the service method
        Announcement result = announcementService.updateAnnouncement(announcementId, newAnnouncement);

        // Verify that the repository findById method was called
        verify(announcementRepository).findById(announcementId);
        // Verify that the repository save method was called with the correct parameters
        verify(announcementRepository).save(any(Announcement.class));

        // Assert the result
        assertEquals(newAnnouncement, result);
    }

}
