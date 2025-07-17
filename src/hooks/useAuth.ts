import { useQuery } from "@tanstack/react-query"
import { getUser } from "../lib/api";

export const AUTH = 'auth';

const useAuth = (opts = {}) => {
  const {
    data: usuario,
    ...rest
  } = useQuery({
    queryKey: [AUTH],
    queryFn: getUser,
    staleTime: Infinity,
    ...opts
  });

  return {
    usuario,
    ...rest
  }
}

export default useAuth;