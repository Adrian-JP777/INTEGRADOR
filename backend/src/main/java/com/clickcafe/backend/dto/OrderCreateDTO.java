package com.clickcafe.backend.dto;

import java.util.List;
import jakarta.validation.constraints.*;

public class OrderCreateDTO {
    @NotBlank
    private String customerName;

    @NotBlank
    private String phone;

    private String address;

    @NotEmpty
    private List<OrderItemDTO> items;

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

    public List<OrderItemDTO> getItems() {
        return items;
    }

    public void setItems(List<OrderItemDTO> v) {
        items = v;
    }
}
