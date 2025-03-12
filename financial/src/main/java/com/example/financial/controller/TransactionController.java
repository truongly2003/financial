package com.example.financial.controller;

import com.example.financial.dto.request.TransactionRequest;
import com.example.financial.dto.response.ApiResponse;
import com.example.financial.dto.response.TransactionResponse;
import com.example.financial.service.ITransactionService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/transaction")

public class TransactionController {
    private final ITransactionService transactionService;

    public TransactionController(ITransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping("/filter")
    public ResponseEntity<ApiResponse<List<TransactionResponse>>> getTransactionByUserIdAnd(
            @RequestParam Integer userId,
            @RequestParam String filterType) {
        List<TransactionResponse> transactionResponses = transactionService.getAllTransactionByUserIdAndPeriod(userId, filterType);
        return ResponseEntity.ok(new ApiResponse<>(200, "lấy danh sách giao dịch thành công", transactionResponses));
    }

    @GetMapping("/filter-range")
    public ResponseEntity<ApiResponse<List<TransactionResponse>>> getTransactionsByCustomRange(
            @RequestParam Integer userId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {

        List<TransactionResponse> transactions = transactionService.getTransactionsByUserIdAndFilterRange(userId, startDate, endDate);
        return ResponseEntity.ok(new ApiResponse<>(200, "lấy danh sách giao dịch thành công", transactions));
    }

    @GetMapping()
    public ResponseEntity<ApiResponse<TransactionResponse>> getTransactionById(@RequestParam Integer transactionId) {
        return ResponseEntity.ok(new ApiResponse<>(200, "success", transactionService.getTransactionById(transactionId)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Boolean>> addTransaction(@RequestBody TransactionRequest request) {
        try {
            boolean create = transactionService.addTransaction(request);
            if (create) {
                return ResponseEntity.ok(new ApiResponse<>(201, "Thêm giao dịch thành công", true));
            } else {
                return ResponseEntity.ok(new ApiResponse<>(201, "Thêm giao dịch thất bại", false));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(500, "Lỗi hệ thống: " + e.getMessage(), false));
        }
    }

    @PutMapping("/{transactionId}")
    public ResponseEntity<ApiResponse<Boolean>> updateTransaction(@PathVariable Integer transactionId, @RequestBody TransactionRequest request) {
        try {
            boolean create = transactionService.updateTransaction(transactionId, request);
            if (create) {
                return ResponseEntity.ok(new ApiResponse<>(201, "Cập nhật giao dịch thành công ", true));
            } else {
                return ResponseEntity.ok(new ApiResponse<>(201, "Cập nhật giao dịch thành công ", true));
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(500, "Lỗi hệ thống: " + e.getMessage(), false));
        }
    }

    @DeleteMapping
    public ResponseEntity<ApiResponse<Boolean>> deleteTransactionById(@RequestParam Integer transactionId) {
        try {
            boolean delete = transactionService.deleteTransaction(transactionId);
            if (delete) {
                return ResponseEntity.ok(new ApiResponse<>(201, "Xóa giao dịch thành công ", true));

            } else {
                return ResponseEntity.ok(new ApiResponse<>(201, "Xóa giao dịch thành công ", true));

            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse<>(500, "Lỗi hệ thống: " + e.getMessage(), false));
        }
    }

    @GetMapping("/budget-list")
    public ResponseEntity<ApiResponse<List<TransactionResponse>>> getBudgetByUserId(
            @RequestParam Integer userId,
            @RequestParam Integer budgetId) {
        List<TransactionResponse> transactions = transactionService.getAllTransactionByUserIdAndBudgetId(userId, budgetId);
        return ResponseEntity.ok(new ApiResponse<>(200, "success", transactions));
    }
}
