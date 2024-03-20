package com.rentalsphere.backend.Marketplace.Repository;

import com.rentalsphere.backend.Marketplace.Model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
