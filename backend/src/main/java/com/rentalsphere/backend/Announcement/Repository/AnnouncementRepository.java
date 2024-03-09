package com.rentalsphere.backend.Announcement.Repository;


import com.rentalsphere.backend.Announcement.Model.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
}
