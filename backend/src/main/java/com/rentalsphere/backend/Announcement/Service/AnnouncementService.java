package com.rentalsphere.backend.Announcement.Service;

import com.rentalsphere.backend.Announcement.Model.Announcement;
import com.rentalsphere.backend.Announcement.Repository.AnnouncementRepository;
import com.rentalsphere.backend.Announcement.Service.IService.IAnnouncementService;
import com.rentalsphere.backend.Property.Model.Property;
import com.rentalsphere.backend.Property.Repository.PropertyRepository;
import com.rentalsphere.backend.RequestResponse.Announcement.AnnouncementRegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AnnouncementService implements IAnnouncementService {

    private AnnouncementRepository announcementRepository;
    private PropertyRepository propertyRepository;

    @Autowired
    public AnnouncementService(AnnouncementRepository announcementRepository, PropertyRepository propertyRepository) {
        this.announcementRepository = announcementRepository;
        this.propertyRepository = propertyRepository;
    }

    public AnnouncementService(AnnouncementRepository announcementRepository) {
        this.announcementRepository = announcementRepository;
    }

    public AnnouncementService(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @Override
    public List<Announcement> getAllAnnouncements() {
        return announcementRepository.findAll();
    }

    @Override
    public Optional<Announcement> getAnnouncementById(Long id) {
        return announcementRepository.findById(id);
    }

    @Override
    public Announcement createAnnouncement(AnnouncementRegisterRequest request) {

        Date currentDate = Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant());
        Property property = propertyRepository.findById(request.getPropertyId())
                .orElseThrow(() -> new IllegalArgumentException("Property not found"));

        Announcement announcement = Announcement.builder()
                .title(request.getTitle())
                .property(property)
                .content(request.getContent())
                .announcementDate(currentDate)
                .build();
        return announcementRepository.save(announcement);
    }

    @Override
    public void deleteAnnouncement(Long id) {
        announcementRepository.deleteById(id);
    }

    @Override
    public Announcement updateAnnouncement(Long id, Announcement newAnnouncement) {
        Optional<Announcement> optionalAnnouncement = announcementRepository.findById(id);
        Property property = propertyRepository.findById(newAnnouncement.getProperty().getPropertyApplicationID())
                .orElseThrow(() -> new IllegalArgumentException("Property not found"));

        if (optionalAnnouncement.isPresent()) {
            Announcement existingAnnouncement = optionalAnnouncement.get();
            existingAnnouncement.setTitle(newAnnouncement.getTitle());
            existingAnnouncement.setContent(newAnnouncement.getContent());
            existingAnnouncement.setAnnouncementDate(newAnnouncement.getAnnouncementDate());
            existingAnnouncement.setProperty(property);
            return announcementRepository.save(existingAnnouncement);
        } else {
            throw new RuntimeException("Announcement not found with id: " + id);
        }
    }

    public List<Announcement> getAnnouncementsByPropertyId(Long propertyId) {
        return announcementRepository.findByPropertyId(propertyId);
    }
}