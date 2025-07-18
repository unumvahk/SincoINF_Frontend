import { Link } from "@mui/material";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GoBackBtn = () => {
  const navigate = useNavigate();

  return (
    <Link
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        fontSize: '14px',
        cursor: 'pointer',
        position: 'absolute',
        top: 5
      }}
      underline='none'
      onClick={ () => navigate(-1) }
    >
      <ArrowLeft/>
      Volver
    </Link>
  )
}

export default GoBackBtn
