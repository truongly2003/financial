import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { getGoalById } from "@/services/GoalService";
import ProgressBar from "@/components/ProgressBar";
import ContributionForm from "@/components/ContributionForm";
import { getAllContributeByGoalIdAndUserId } from "@/services/Goal-Contribute";
import GoalForm from "@/components/GoalForm";
export default function GoalDetail() {
  const { id } = useParams();
  const [goal, setGoal] = useState(null);
  const [contribute, setContribute] = useState([]);
  const [showFormContribution, setShowFormContribution] = useState(false);
  const [showFormGoal, setShowFormGoal] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const goalResponse = await getGoalById(id);
        if (goalResponse.data) {
          setGoal(goalResponse.data);
          const contributeResponse = await getAllContributeByGoalIdAndUserId(
            goalResponse.data.id,
            id
          );
          if (contributeResponse.data) {
            setContribute(contributeResponse.data);
          }
        }
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      }
    };

    fetchData();
  }, [id]);
  console.log(contribute);

  if (!goal) {
    return <div>Đang tải dữ liệu...</div>;
  }

  return (
    <div className="min-h-screen mt-4">
      <div className="rounded-lg bg-white">
        <div className="flex items-center justify-between   p-4  ">
          {/* Thanh điều hướng */}
          <div className="flex items-center space-x-1">
            <Link to="/goal" className="text-gray-800">
              <ChevronLeft />
            </Link>
            <p className="text-gray-600">Mục tiêu</p>

            <p className="font-bold text-gray-800">{goal.goalName}</p>
            <ChevronRight className="w-4 h-4 text-gray-500" />
            <p className="text-gray-500 text-sm">Tất cả ví</p>
          </div>
          <div className="space-x-4">
            <button className="w-[180px] bg-green-100 text-green-600 font-semibold py-1 px-3 rounded-lg hover:bg-green-200"
              onClick={()=>{
                setShowFormGoal(true);
              }}
            >
              Chỉnh sửa mục tiêu
            </button>
            <button
              className="w-[180px] bg-green-100 text-green-600 font-semibold py-1 px-3 rounded-lg hover:bg-green-200"
              onClick={() => {
                setShowFormContribution(true);
                // setEditingBudget(budget);
              }}
            >
              Thêm đóng góp
            </button>
          </div>
        </div>

        <div className="flex space-x-4  p-2 justify-center">
          <div className="p-4 bg-white rounded-2xl shadow border text-center min-w-[250px]">
            <p className="text-gray-600 font-semibold">Số tiền cần đạt</p>
            <p className="text-green-500 font-bold text-xl">
              {goal.targetAmount.toLocaleString()} đ
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl shadow border text-center min-w-[250px]">
            <p className="text-gray-600 font-semibold">Số tiền hiện có</p>
            <p className="text-red-500 font-bold text-xl">
              {goal.currentAmount.toLocaleString()} đ
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl shadow border text-center min-w-[250px]">
            <p className="text-gray-600 font-semibold">Số tiền còn thiếu</p>
            <p className="text-red-500 font-bold text-xl">
              {(goal.targetAmount - goal.currentAmount).toLocaleString()} đ
            </p>
          </div>

          <div className="p-4 bg-white rounded-2xl shadow border text-center min-w-[250px]">
            <p className="text-gray-600 font-semibold">Bạn có thể tiết kiệm</p>
            <p className="text-gray-700 font-bold text-xl">
              {/* {goal > 0 ? `${goal.toLocaleString()} đ` : "0 đ"} */}
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg bg-white mt-4">
        <div className="p-4">
          <span className="text-gray-600">Tiến trình</span>
          <div className="flex justify-center">
            <span className="text-gray-600">
              Số tiền còn thiếu{" "}
              {(goal.targetAmount - goal.currentAmount).toLocaleString()} đ{" "}
            </span>
          </div>
          <div className="flex justify-center w-full">
            <div className="w-full max-w-4xl">
              <ProgressBar
                progress={50}
                progressColor="bg-green-600"
                endDate={goal.deadline}
              />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-gray-600 ">
              Danh sách giao dịch đã đóng góp
            </span>
            {contribute.length > 0 ? (
              <div className="mt-2 space-y-2">
                {contribute.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-white cursor-pointer hover:bg-slate-200 p-2 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-700">
                        {new Date(item.contributionDate).toLocaleDateString(
                          "vi-VN"
                        )}
                      </span>
                    </div>
                    <span className="text-red-500 font-semibold">
                      + {item.amount.toLocaleString()} đ
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 mt-2">Chưa có giao dịch nào.</p>
            )}
          </div>
        </div>
      </div>
      <div></div>
      {/* form goal */}
      {showFormGoal && (
        <GoalForm onClose={()=>setShowFormGoal(false)}/>
      )}
      {/* form contribution */}
      {showFormContribution && (
        <ContributionForm onClose={() => setShowFormContribution(false)} />
      )}
    </div>
  );
}
