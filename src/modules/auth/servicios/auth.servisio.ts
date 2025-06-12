// src/modulos/auth/servicios/authServicio.ts
import axios from 'axios'

const API = 'http://localhost:3001/api'

export const iniciarSesion = async (email: string, contraseña: string) => {
  try {
    const respuesta = await axios.post(`${API}/login`, { email, contraseña })
    return respuesta.data
  } catch (error: any) {
    throw error.response?.data?.mensaje || 'Error al iniciar sesión'
  }
}
