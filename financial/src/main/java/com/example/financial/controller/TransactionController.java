package com.example.financial.controller;

import com.example.financial.dto.request.TransactionRequest;
import com.example.financial.dto.response.ApiResponse;
import com.example.financial.dto.response.TransactionResponse;
import com.example.financial.entity.Transaction;
import com.example.financial.mapper.TransactionMapper;
import com.example.financial.service.ITransactionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transaction")

public class TransactionController {
    private final ITransactionService transactionService;

    public TransactionController(ITransactionService transactionService) {
        this.transactionService = transactionService;
    }

    //    get list transaction
    @GetMapping("/{id}")
    public List<TransactionResponse> getTransactionByUser(@PathVariable Integer id) {
        return transactionService.getAllTransactionByUserId(id);
    }

    // get transaction by id
    @GetMapping()
    public ResponseEntity<TransactionResponse> getTransactionById(@RequestParam Integer transactionId) {
        return ResponseEntity.ok(transactionService.getTransactionById(transactionId));
    }

    @PostMapping
    public ResponseEntity<String> addTransaction(@RequestBody TransactionRequest request) {
        try {
            boolean create = transactionService.addTransaction(request);
            if (create) {
                return ResponseEntity.ok("Thêm giao dịch thành công.");
            } else {
                return ResponseEntity.ok("Thêm giao dịch thất bại.");
            }
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.internalServerError().body("An error occurred: " + ex.getMessage());
        }
    }
    @PutMapping("/{transactionId}")
    public ResponseEntity<String> updateTransaction(@PathVariable Integer transactionId, @RequestBody TransactionRequest request) {
        try {
            boolean create = transactionService.updateTransaction(transactionId,request);
            if (create) {
                return ResponseEntity.ok("cập nhật giao dịch thành công.");
            } else {
                return ResponseEntity.ok("cập nhật giao dịch thất bại.");
            }
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.internalServerError().body("An error occurred: " + ex.getMessage());
        }
    }
    @DeleteMapping
    public ResponseEntity<String> deleteTransactionById(@RequestParam Integer transactionId) {
        try {
            boolean delete=transactionService.deleteTransaction(transactionId);
            if (delete) {
                return ResponseEntity.ok("xóa giao dịch thành công.");
            } else {
                return ResponseEntity.ok("xóa giao dịch thất bại.");
            }
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        } catch (Exception ex) {
            return ResponseEntity.internalServerError().body("An error occurred: " + ex.getMessage());
        }
    }
}
