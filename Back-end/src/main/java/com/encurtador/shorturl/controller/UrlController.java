package com.encurtador.shorturl.controller;

import com.encurtador.shorturl.model.Url;
import com.encurtador.shorturl.service.UrlService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UrlController {
    private final UrlService urlService;

    public UrlController(UrlService urlService) {
        this.urlService = urlService;
    }

    @PostMapping("/shorten")
    public ResponseEntity<Url> shortenUrl(@RequestBody Url urlRequest) {
        Url newUrl = urlService.createShortUrl(urlRequest);
        return ResponseEntity.ok(newUrl);
    }

    @GetMapping("/{shortCode}")
    public ResponseEntity<String> redirectToOriginal(@PathVariable String shortCode) {
        return urlService.getOriginalUrl(shortCode)
                .map(url -> ResponseEntity.ok(url.getUrl()))
                .orElse(ResponseEntity.notFound().build());
    }
}
