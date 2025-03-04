package com.example.financial.service;

import com.example.financial.dto.request.TransactionRequest;
import com.example.financial.dto.response.TransactionResponse;
import com.example.financial.entity.Transaction;

import java.util.List;

public interface ITransactionService  {
    List<TransactionResponse> getAllTransactionByUserId(Integer id);
    TransactionResponse getTransactionById(Integer id);
    boolean addTransaction(TransactionRequest request);
    boolean updateTransaction(Integer transactionId,TransactionRequest request);
    boolean deleteTransaction(Integer transactionId);
}
