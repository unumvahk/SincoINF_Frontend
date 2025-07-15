import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { login } from "../../lib/api";
import { Box, Button, CircularProgress, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const { mutate: SingIn, isPending, isError } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate('/equipos/', {
        replace: true,
      });
    }
  });

  const [loginData, setLoginData] = useState({
    correo: '',
    contrasena: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    SingIn(loginData)
  }

  return (
    <Box 
      component='form'
      sx={{
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: 4
      }}
      onSubmit={ handleSubmit }
    >
      <Typography variant="h6" textAlign='center'>Inicio de sesión</Typography>

      {
        isError && <Typography variant="body2" color="error">Correo o contraseña invalida.</Typography>
      }

      <TextField
        size="small"
        fullWidth
        name="correo"
        label='Correo'
        placeholder="Ingrese su correo aquí"
        variant="outlined"
        type="email"
        value={ loginData.correo }
        onChange={ handleInputChange }
        required
      />

      <TextField
        size="small"
        fullWidth
        name="contrasena"
        label='Contraseña'
        placeholder="Ingrese su contraseña"
        variant="outlined"
        type="password"
        value={ loginData.contrasena }
        onChange={ handleInputChange }
        required
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 1 }}
        disabled={!loginData.correo || !loginData.contrasena}
      >
        {
          isPending ? <CircularProgress size='24px' color="inherit" /> : 'Acceder'
        }
      </Button>

      <Link
        component={RouterLink}
        to='/password/forgot'
        underline='none'
        replace
        fontSize='14px'
      >
        ¿Olvidaste tu contraseña?
      </Link>
    </Box>
  )
}

export default LoginForm;