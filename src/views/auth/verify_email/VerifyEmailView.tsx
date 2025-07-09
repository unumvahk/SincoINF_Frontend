import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
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
        {
          isSuccess ? (
            <Alert isPending={isPending} status="success" text="Email Verificado" />
          ) : (
            <Alert isPending={isPending} status="error" text="Link Invalido" />
          )
        }

        <img src="/email-image.png" alt="email-image" className="img-decoration"/>

        {
          isError ? 
          (
            <p className="message-description"> El link es invalido o ha expirado.</p>
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
