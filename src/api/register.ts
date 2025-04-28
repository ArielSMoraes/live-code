export async function getRegisters() {
  const response = await fetch('https://geosapiens-react.free.beeceptor.com/v1/pesca/list');

  if (!response.ok) {
    throw new Error('Erro na requisição');
  }

  const data = await response.json();
  return data;
}
