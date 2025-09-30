package com.clickcafe.backend.controller;

import com.clickcafe.backend.model.Product;
import com.clickcafe.backend.dto.ProductDTO;
import com.clickcafe.backend.service.ProductService;
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
@RequestMapping("/api/v1/products")
@Tag(name = "Productos", description = "API para la gestión de productos del café")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    @Operation(summary = "Listar productos", description = "Obtiene una lista paginada de todos los productos")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Lista de productos obtenida exitosamente")
    })
    public Page<Product> list(Pageable pageable) {
        return service.list(pageable);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener producto", description = "Obtiene un producto específico por su ID")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Producto encontrado"),
        @ApiResponse(responseCode = "404", description = "Producto no encontrado")
    })
    public Product get(@Parameter(description = "ID del producto") @PathVariable Long id) {
        return service.get(id);
    }

    @PostMapping
    @Operation(summary = "Crear producto", description = "Crea un nuevo producto")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Producto creado exitosamente"),
        @ApiResponse(responseCode = "400", description = "Datos de entrada inválidos")
    })
    public Product create(@Valid @RequestBody ProductDTO dto) {
        return service.create(dto);
    }

    @PutMapping("/{id}")
    @Operation(summary = "Actualizar producto", description = "Actualiza un producto existente")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Producto actualizado exitosamente"),
        @ApiResponse(responseCode = "404", description = "Producto no encontrado"),
        @ApiResponse(responseCode = "400", description = "Datos de entrada inválidos")
    })
    public Product update(@Parameter(description = "ID del producto") @PathVariable Long id, @Valid @RequestBody ProductDTO dto) {
        return service.update(id, dto);
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar producto", description = "Elimina un producto por su ID")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "Producto eliminado exitosamente"),
        @ApiResponse(responseCode = "404", description = "Producto no encontrado")
    })
    public void delete(@Parameter(description = "ID del producto") @PathVariable Long id) {
        service.delete(id);
    }
}
