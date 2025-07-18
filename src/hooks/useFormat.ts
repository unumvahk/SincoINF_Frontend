export const formatDate = ( rawDate: Date ) => {
  const date = new Date(rawDate);

  return date.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })
}

export const capitalize = (str?: string) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}