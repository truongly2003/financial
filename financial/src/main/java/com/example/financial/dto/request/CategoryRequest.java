package com.example.financial.dto.request;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CategoryRequest {
    Integer userId;
    String categoryName;
    String categoryType;
    String description;
    String icon;
}
