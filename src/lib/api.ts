import API from "../config/apiClient";

interface LoginData {
  correo: string,
  contrasena: string,
}

export const login = async (data: LoginData) => API.post('/auth/login', data);
export const verifyEmail = async (verificationCode: number) => API.get(`/auth/email/verify/${verificationCode}`);
export const sendPasswordResetEmail = async (email: string) => API.post(`/auth/password/forgot`, { email });