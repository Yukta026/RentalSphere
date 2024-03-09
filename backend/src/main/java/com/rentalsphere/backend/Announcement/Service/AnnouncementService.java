package com.rentalsphere.backend.Announcement.Service;

import com.rentalsphere.backend.Announcement.Model.Announcement;
import com.rentalsphere.backend.Announcement.Repository.AnnouncementRepository;
import com.rentalsphere.backend.Announcement.Service.IService.IAnnouncementService;
import com.rentalsphere.backend.RequestResponse.Announcement.AnnouncementRegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnnouncementService implements IAnnouncementService {

    @Autowired
    private AnnouncementRepository announcementRepository;

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
        Announcement announcement = Announcement.builder()
                .title(request.getTitle())
                .content(request.getContent())
                .announcementDate(request.getAnnouncementDate())
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
        if (optionalAnnouncement.isPresent()) {
            Announcement existingAnnouncement = optionalAnnouncement.get();
            existingAnnouncement.setTitle(newAnnouncement.getTitle());
            existingAnnouncement.setContent(newAnnouncement.getContent());
            existingAnnouncement.setAnnouncementDate(newAnnouncement.getAnnouncementDate());
            return announcementRepository.save(existingAnnouncement);
        } else {
            throw new RuntimeException("Announcement not found with id: " + id);
        }
    }
}