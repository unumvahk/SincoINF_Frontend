import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { verifyEmail } from "../../../lib/api";
import LinkButton from "../../../components/link_button/LinkButton";
import './VerifyEmailView.css';
import Alert from "../../../components/alert/Alert";

const VerifyEmailView = () => {
  const { code } = useParams();
  const { isPending, isSuccess, isError } = useQuery({
    queryKey:["emailVerification", code],
    queryFn: () => verifyEmail(Number(code))
  });

  return (
    <div className="main-container">
      <div className="message-container">
        <Alert
          isPending={ isPending }
          isSuccess={ isSuccess } 
          successMessage="Email Verificado"
          errorMessage="Link Invalido"
        />

        <img src="../../../../public/email-image.png" alt="email-image" className="img-decoration"/>

        {
          isError ? 
          (
            <p className="message-description"> El link es invalido o ha expirado. <Link to={'/password/reset'}>Generar uno nuevo</Link></p>
          ) :
          (
            <p className="message-description">El correo se ha verificado correctamente.</p>
          )
        }

        <LinkButton route="/" text="Volver Atrás" />
      </div>
    </div>
  );
}

export default VerifyEmailView;
