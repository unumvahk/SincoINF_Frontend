import { Link } from "react-router-dom";
import './LinkButton.css';

interface LinkButtonProperties {
  route: string,
  text: string,
}

const LinkButton = ({ route, text }: LinkButtonProperties) => {
  return (
    <Link
      to={ route }
      replace
      className="link-btn"
    >
      { text }
    </Link>
  )
}

export default LinkButton;
