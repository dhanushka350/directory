package com.wedding.directory.repository;

import com.wedding.directory.modal.messages.InquiryModal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InquiryRepo extends JpaRepository<InquiryModal, Integer> {
}
