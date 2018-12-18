package com.wedding.directory.repository;

import com.wedding.directory.modal.Ratings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingsRepocitory extends JpaRepository<Ratings, Integer> {
}
