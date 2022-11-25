import { useAppContext } from "../context/appContext";

const Alert = () => {
  // state provided by global context
  const { alertType, alertText } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};
export default Alert;
