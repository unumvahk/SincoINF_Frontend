import { FaCheckCircle } from 'react-icons/fa';
import Spinner from '../spinner/Spinner';
import './Alert.css';
import { FaCircleXmark } from 'react-icons/fa6';

type Status = 'success' | 'error';

interface AlertProps {
  isPending: boolean,
  status: Status,
  text: string
}

const Alert = ({ isPending, status, text }: AlertProps) => {
  return (
    isPending ? (
      <h3 className='alert-container alert-loading'>
        <Spinner />
      </h3>
    ) : (
      <h3 className={`alert-container alert-${status}`}>
        {
          status === 'success' ? <FaCheckCircle className='icon'/> : <FaCircleXmark className='icon'/>
        }
        { text }
      </h3>
    )
  )
}

export default Alert;
