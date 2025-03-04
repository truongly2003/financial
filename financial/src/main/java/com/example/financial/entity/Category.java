package com.example.financial.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore
    private User user;

    @Column(name = "category_name", nullable = false)
    private String categoryName;

    @Lob
    @Column(name = "category_type", nullable = false)
    private String categoryType;

    @Lob
    @Column(name = "description")
    private String description;

    @Lob
    @Column(name = "icon")
    private String icon;



    @ColumnDefault("current_timestamp()")
    @Column(name = "created_at")
    private Instant createdAt;

}