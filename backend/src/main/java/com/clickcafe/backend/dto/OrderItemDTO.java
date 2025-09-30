package com.clickcafe.backend.dto;

import jakarta.validation.constraints.*;

public class OrderItemDTO {
    @NotNull
    private Long productId;

    @NotNull
    @Min(1)
    private Integer quantity;

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long v) {
        productId = v;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer v) {
        quantity = v;
    }
}
