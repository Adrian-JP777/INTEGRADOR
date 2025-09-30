package com.clickcafe.backend.dto;

import java.math.BigDecimal;

public class OrderResponseDTO {
    private Long id;
    private String customerName;
    private String phone;
    private String address;
    private BigDecimal totalAmount;
    private String status;

    public Long getId() {
        return id;
    }

    public void setId(Long v) {
        id = v;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String v) {
        customerName = v;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String v) {
        phone = v;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String v) {
        address = v;
    }

    public BigDecimal getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(BigDecimal v) {
        totalAmount = v;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String v) {
        status = v;
    }
}
