import API from "../config/apiClient";

interface LoginData {
  correo: string,
  contrasena: string,
}

interface ResetPasswordData {
  nuevaContrasena: string,
  codigoVerificacion: number
}

// auth functions
export const login = async (data: LoginData) => API.post('/auth/login', data);
export const logout = async () => API.get('/auth/logout')
export const verifyEmail = async (verificationCode: number) => API.get(`/auth/email/verify/${verificationCode}`);
export const sendPasswordResetEmail = async (email: string) => API.post('/auth/password/forgot', { email });
export const resetPassword = async (data: ResetPasswordData) => API.post('/auth/password/reset', data);

// user functions
export const getUser = async () => API.get('/usuario');