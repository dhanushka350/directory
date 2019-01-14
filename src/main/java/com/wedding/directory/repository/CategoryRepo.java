package com.wedding.directory.repository;

import com.wedding.directory.modal.advertisement.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {
    Category getTopByCategoryEquals(String cate);
}
