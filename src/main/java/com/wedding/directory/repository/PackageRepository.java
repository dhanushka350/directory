package com.wedding.directory.repository;

import com.wedding.directory.modal.advertisement.Packages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackageRepository extends JpaRepository<Packages,Integer> {
}
