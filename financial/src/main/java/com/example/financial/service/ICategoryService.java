package com.example.financial.service;

import com.example.financial.dto.request.CategoryRequest;
import com.example.financial.dto.response.CategoryResponse;
import jakarta.persistence.criteria.CriteriaBuilder;

import java.util.List;

public interface ICategoryService  {
    List<CategoryResponse> getAllCategoriesByUserId(int userId);
    boolean addCategory(CategoryRequest categoryRequest);
    boolean updateCategory(Integer categoryId, CategoryRequest categoryRequest);
    boolean deleteCategory(Integer categoryId);
}
