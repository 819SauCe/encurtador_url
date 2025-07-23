package com.encurtador.shorturl.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
public class Url {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, name = "original_url")
    private String url;

    @Column(nullable = true, unique = true, name = "short_url")
    private String shortUrl;

    @Column(nullable = true, name = "password")
    private String password;

    @Column(nullable = true, name = "timer")
    private Integer timer;

    @Column(nullable = false, name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();
}
