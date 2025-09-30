package com.clickcafe.backend.dto;

import java.math.BigDecimal;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO para crear o actualizar un producto")
public class ProductDTO {
    
    @Schema(description = "ID del producto (solo para actualización)", example = "1")
    private Long id;

    @NotBlank
    @Size(max = 120)
    @Schema(description = "Nombre del producto", example = "Café Americano", required = true)
    private String name;

    @Size(max = 500)
    @Schema(description = "Descripción del producto", example = "Delicioso café americano preparado con granos selectos")
    private String description;

    @NotNull
    @DecimalMin(value = "0.0", inclusive = true)
    @Schema(description = "Precio del producto", example = "15.50", required = true)
    private BigDecimal price;

    @Size(max = 60)
    @Schema(description = "Categoría del producto", example = "Bebidas Calientes")
    private String category;

    @Schema(description = "URL de la imagen del producto", example = "https://example.com/images/cafe-americano.jpg")
    private String imageUrl;

    @NotNull
    @Min(0)
    @Schema(description = "Stock disponible", example = "100", required = true)
    private Integer stock;

    @Schema(description = "Estado activo del producto", example = "true", defaultValue = "true")
    private Boolean active = true;

    // getters/setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}
