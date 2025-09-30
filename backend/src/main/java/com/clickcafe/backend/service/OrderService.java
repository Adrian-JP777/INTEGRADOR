package com.clickcafe.backend.service;

import com.clickcafe.backend.model.Order;
import com.clickcafe.backend.model.OrderItem;
import com.clickcafe.backend.model.Product;
import com.clickcafe.backend.dto.OrderCreateDTO;
import com.clickcafe.backend.dto.OrderResponseDTO;
import com.clickcafe.backend.repository.OrderItemRepository;
import com.clickcafe.backend.repository.OrderRepository;
import com.clickcafe.backend.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.math.BigDecimal;

@Service
public class OrderService {

    private final OrderRepository orderRepo;
    private final OrderItemRepository itemRepo;
    private final ProductRepository productRepo;

    public OrderService(OrderRepository orderRepo, OrderItemRepository itemRepo, ProductRepository productRepo) {
        this.orderRepo = orderRepo;
        this.itemRepo = itemRepo;
        this.productRepo = productRepo;
    }

    public Page<Order> list(Pageable pageable) {
        return orderRepo.findAll(pageable);
    }

    public Order get(Long id) {
        return orderRepo.findById(id).orElseThrow(() -> new RuntimeException("Pedido no encontrado"));
    }

    @Transactional
    public OrderResponseDTO create(OrderCreateDTO dto) {
        Order order = new Order();
        order.setCustomerName(dto.getCustomerName());
        order.setPhone(dto.getPhone());
        order.setAddress(dto.getAddress());
        order.setStatus("RECIBIDO");

        BigDecimal total = BigDecimal.ZERO;

        for (var itemDto : dto.getItems()) {
            Product product = productRepo.findById(itemDto.getProductId())
                    .orElseThrow(() -> new RuntimeException("Producto no encontrado: " + itemDto.getProductId()));

            if (product.getStock() < itemDto.getQuantity()) {
                throw new RuntimeException("Stock insuficiente para: " + product.getName());
            }

            product.setStock(product.getStock() - itemDto.getQuantity());

            OrderItem item = new OrderItem();
            item.setOrder(order);
            item.setProduct(product);
            item.setQuantity(itemDto.getQuantity());
            item.setUnitPrice(product.getPrice());
            item.setSubtotal(product.getPrice().multiply(BigDecimal.valueOf(itemDto.getQuantity())));

            order.getItems().add(item);
            total = total.add(item.getSubtotal());
        }

        order.setTotalAmount(total);
        Order saved = orderRepo.save(order);

        OrderResponseDTO resp = new OrderResponseDTO();
        resp.setId(saved.getId());
        resp.setCustomerName(saved.getCustomerName());
        resp.setPhone(saved.getPhone());
        resp.setAddress(saved.getAddress());
        resp.setTotalAmount(saved.getTotalAmount());
        resp.setStatus(saved.getStatus());
        return resp;
    }

    @Transactional
    public void updateStatus(Long id, String status) {
        Order o = get(id);
        o.setStatus(status);
        orderRepo.save(o);
    }
}
