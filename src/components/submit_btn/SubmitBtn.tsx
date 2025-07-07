import Spinner from "../spinner/Spinner";

interface SubmitBtn {
  isPending: boolean,
  text: string,
}

const SubmitBtn = ({ isPending, text }: SubmitBtn) => {
  return (
    <button type="submit" className={`submit-btn`}>
      {
        isPending ? <Spinner/> : <span>{ text }</span>
      }
    </button>
  )
}

export default SubmitBtn;
