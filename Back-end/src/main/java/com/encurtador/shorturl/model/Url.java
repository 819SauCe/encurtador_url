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

    @Column(nullable = false)
    private String url;

    @Column(nullable = false, unique = true)
    private String shortUrl;

    @Column(nullable = true)
    private String password;

    @Column(nullable = true)
    private LocalDateTime createdAt = LocalDateTime.now();
}
