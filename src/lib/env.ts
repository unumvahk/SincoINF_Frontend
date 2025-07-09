const getEnv = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key] || defaultValue;

  if (value === undefined) {
    throw new Error(`Missing String environment variable for ${key}`);
  }

  return value;
};

export const VITE_API_URL = getEnv('VITE_API_URL');