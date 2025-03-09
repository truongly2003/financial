package com.example.financial.service;

import com.example.financial.dto.request.TransactionRequest;
import com.example.financial.dto.response.TransactionResponse;

import java.time.LocalDate;
import java.util.List;

public interface ITransactionService {
    List<TransactionResponse> getAllTransactionByUserIdAndPeriod(Integer id, String filterType);

    List<TransactionResponse> getTransactionsByUserIdAndFilterRange(Integer userId, LocalDate startDate, LocalDate endDate);

    TransactionResponse getTransactionById(Integer id);

    boolean addTransaction(TransactionRequest request);

    boolean updateTransaction(Integer transactionId, TransactionRequest request);

    boolean deleteTransaction(Integer transactionId);
}
