package com.example.financial.mapper;

import com.example.financial.dto.request.GoalRequest;
import com.example.financial.dto.response.GoalResponse;
import com.example.financial.entity.Goal;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface GoalMapper {
    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "wallet.id", target = "walletId")
    GoalResponse toGoalResponse(Goal goal);
    Goal toGoal(GoalRequest request);
}
