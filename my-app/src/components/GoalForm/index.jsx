import PropTypes from "prop-types";
export default function GoalForm({onClose, onSuccess, initialBudget}){
    return (
        <div className=""></div>
    )
}

GoalForm.propTypes = {
  initialBudget: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};