interface Registro {
  id: string;
  voto: string;
  nombre: string;
}

export default function unificarVotos(
  mesas: Registro[][],
  parametro: keyof Registro,
): Registro[] {
  // TODO: implementar
  return []
}
