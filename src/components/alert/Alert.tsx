import { FaTimesCircle } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import './Alert.css';
import Spinner from "../spinner/Spinner";

interface AlertProps {
  isPending: boolean,
  isSuccess: boolean,
  successMessage: string,
  errorMessage: string,
}

const Alert = ({ isPending, isSuccess, successMessage, errorMessage }: AlertProps) => {
  return (
    isPending ?
    (
      <h3 className={`alert-container alert-loading`}>
        <Spinner />
      </h3>
    ) :
    (
      <h3 className={`alert-container ${ isSuccess ? 'alert-valid' : 'alert-invalid'}`}>
        {
          isSuccess ?
          (
            <span className="alert-content">
              <IoIosCheckmarkCircle /> { successMessage }
            </span> 
          ) :
          (
            <span className="alert-content">
              <FaTimesCircle /> { errorMessage }
            </span>
          )
       }
      </h3>
    )
  )
}

export default Alert
