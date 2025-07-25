package com.encurtador.shorturl.repository;

import com.encurtador.shorturl.model.Url;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import java.util.Optional;

public interface UrlRepository extends JpaRepository<Url, Long> {
    Optional<Url> findByShortUrl(String shortUrl);
    Optional<Url> findByOriginalUrl(String originalUrl);
    void deleteByCreatedAtBefore(LocalDateTime dateTime);
}
