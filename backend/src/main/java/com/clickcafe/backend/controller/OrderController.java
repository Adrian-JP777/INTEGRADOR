package com.clickcafe.backend.controller;

import com.clickcafe.backend.model.Order;
import com.clickcafe.backend.dto.OrderCreateDTO;
import com.clickcafe.backend.dto.OrderResponseDTO;
import com.clickcafe.backend.service.OrderService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = { "http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:5174", "http://127.0.0.1:5174" }, allowCredentials = "true")
@RestController
@RequestMapping("/api/v1/orders")
@Tag(name = "Órdenes", description = "API para la gestión de órdenes de compra")
public class OrderController {

    private final OrderService service;

    public OrderController(OrderService service) {
        this.service = service;
    }

    @GetMapping
    @Operation(summary = "Listar órdenes", description = "Obtiene una lista paginada de todas las órdenes")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Lista de órdenes obtenida exitosamente")
    })
    public Page<Order> list(Pageable pageable) {
        return service.list(pageable);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener orden", description = "Obtiene una orden específica por su ID")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Orden encontrada"),
        @ApiResponse(responseCode = "404", description = "Orden no encontrada")
    })
    public Order get(@Parameter(description = "ID de la orden") @PathVariable Long id) {
        return service.get(id);
    }

    @PostMapping
    @Operation(summary = "Crear orden", description = "Crea una nueva orden de compra")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Orden creada exitosamente"),
        @ApiResponse(responseCode = "400", description = "Datos de entrada inválidos")
    })
    public OrderResponseDTO create(@Valid @RequestBody OrderCreateDTO dto) {
        return service.create(dto);
    }

    @PatchMapping("/{id}/status")
    @Operation(summary = "Actualizar estado de orden", description = "Actualiza el estado de una orden existente")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Estado actualizado exitosamente"),
        @ApiResponse(responseCode = "404", description = "Orden no encontrada"),
        @ApiResponse(responseCode = "400", description = "Estado inválido")
    })
    public void updateStatus(@Parameter(description = "ID de la orden") @PathVariable Long id, 
                           @Parameter(description = "Nuevo estado de la orden") @RequestParam String status) {
        service.updateStatus(id, status);
    }
}
