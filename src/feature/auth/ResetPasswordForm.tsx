import { Alert, Box, Button, CircularProgress, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { resetPassword } from "../../lib/api";

type ResetPasswordFormProps = {
  code: number
}

const ResetPasswordForm = ({ code }: ResetPasswordFormProps) => {
  const [newPassword, setNewPassword] = useState('');
  const {
    mutate: resetUserPassword,
    isPending, 
    isSuccess,
    error,
  } = useMutation({
    mutationFn: resetPassword
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetUserPassword({ 
      nuevaContrasena: newPassword,
      codigoVerificacion: code,
    })
  }

  return (
    <Box>
      {
        isSuccess ? (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Alert severity="success">Se ha cambiado la contraseña correctamente</Alert>
            <Link component={RouterLink} to='/login' underline="none"  marginTop={2} replace>Volver al login</Link>
          </Box>
        ) : (
          <form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                mb: 1
              }}
            >
              Cambia tu contraseña
            </Typography>

            {
              error && <Typography variant="body2" color="error" sx={{ mb: 1 }}>{ error?.message }</Typography>
            }

            <TextField
              size="small"
              fullWidth
              placeholder="Igrese su nueva contraseña aquí"
              label='Nueva contraseña'
              variant="outlined"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1 }}
              disabled={!newPassword}
            >
              {
                isPending ? <CircularProgress size='24px' color="inherit"/> : 'Cambiar Contraseña'
              }
            </Button>

            <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
              Volver al <Link component={RouterLink} to='/login' underline="none" replace>Login</Link>
            </Typography>
          </form>
        )
      }
    </Box>
  )
}

export default ResetPasswordForm;