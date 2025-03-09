package com.example.financial.repository;

import com.example.financial.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    @Query("select t from Transaction t where t.user.id = :userId and t.transactionDate between :startDate and :endDate")
    List<Transaction> getTransactionsByUserIdAndPeriod(@Param("userId") Integer userId, @Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

    Transaction getTransactionById(Integer id);
}
