package com.clickcafe.backend.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ApiExceptionHandler {

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<?> handleValidation(MethodArgumentNotValidException ex) {
    Map<String, String> errors = new HashMap<>();
    ex.getBindingResult().getFieldErrors().forEach(fe -> errors.put(fe.getField(), fe.getDefaultMessage()));
    return ResponseEntity.badRequest().body(errors);
  }

  @ExceptionHandler(RuntimeException.class)
  public ResponseEntity<?> handleRuntime(RuntimeException ex) {
    Map<String, String> err = new HashMap<>();
    err.put("error", ex.getMessage());
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(err);
  }
}
