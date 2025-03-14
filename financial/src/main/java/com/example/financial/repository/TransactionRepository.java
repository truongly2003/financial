package com.example.financial.repository;

import com.example.financial.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    @Query("select t from Transaction t where t.user.id = :userId and t.transactionDate between :startDate and :endDate")
    List<Transaction> getTransactionsByUserIdAndPeriod(@Param("userId") Integer userId, @Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

    Transaction getTransactionById(Integer id);

    @Query("""
             select coalesce(sum(t.amount), 0)
             from Transaction t
             join Category c on t.category.id = c.id
             where t.user.id = :userId
             and t.category.id = :categoryId
             and c.categoryType = :categoryType
             and t.transactionDate between :startDate and :endDate
            """)
    BigDecimal getTotalSpentByBudget(
            @Param("userId") Integer userId,
            @Param("categoryId") Integer categoryId,
            @Param("categoryType") String categoryType,
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate
    );
    @Query("""
                    select t from Transaction t
                    join Category c on t.category.id = c.id
                    join Budget b on c.id = b.category.id
                    where t.user.id = :userId
                        and b.id = :budgetId
                        and c.categoryType = 'expense'
                        and t.transactionDate between b.startDate and b.endDate
            """)
    List<Transaction> getTransactionsByUserIdAndBudgetId(@Param("userId") Integer userId, @Param("budgetId") Integer budgetId);

}
