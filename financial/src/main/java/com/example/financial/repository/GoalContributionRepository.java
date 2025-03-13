package com.example.financial.repository;

import com.example.financial.entity.GoalContribution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoalContributionRepository extends JpaRepository<GoalContribution, Integer> {
    List<GoalContribution> getGoalContributionsByGoalIdAndUserId(Integer goalId, Integer userId);
    GoalContribution getGoalContributionById(int id);
}
