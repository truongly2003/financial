package com.example.financial.repository;

import com.example.financial.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    List<Transaction> getTransactionsByUserId(Integer userId);
    Transaction getTransactionById(Integer id);
}
