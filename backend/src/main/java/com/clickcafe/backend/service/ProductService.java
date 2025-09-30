package com.clickcafe.backend.service;

import com.clickcafe.backend.model.Product;
import com.clickcafe.backend.dto.ProductDTO;
import com.clickcafe.backend.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProductService {
    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public Page<Product> list(Pageable pageable) {
        return repo.findAll(pageable);
    }

    public Product get(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }

    @Transactional
    public Product create(ProductDTO dto) {
        Product p = new Product();
        apply(dto, p);
        return repo.save(p);
    }

    @Transactional
    public Product update(Long id, ProductDTO dto) {
        Product p = get(id);
        apply(dto, p);
        return repo.save(p);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    private void apply(ProductDTO dto, Product p) {
        p.setName(dto.getName());
        p.setDescription(dto.getDescription());
        p.setPrice(dto.getPrice());
        p.setCategory(dto.getCategory());
        p.setImageUrl(dto.getImageUrl());
        p.setStock(dto.getStock());
        p.setActive(dto.getActive() == null ? true : dto.getActive());
    }
}
