/**
 * Formata um número como uma moeda especificada.
 *
 * @param value - O valor numérico que será formatado.
 * @param currency - A moeda que será utilizada na formatação. Aceita as opções: "BRL" (Real), "USD" (Dólar), "EUR" (Euro), "JPY" (Iene), "ARS" (Peso).
 * @returns Uma string no formato da moeda escolhida.
 *
 * Exemplo:
 * formatCurrency(1234.56, 'USD') => "$1,234.56"
 */
export const formatCurrency = (value: number, currency: 'BRL' | 'USD' | 'EUR' | 'JPY' | 'ARS') => {
  const locales: Record<typeof currency, string> = {
    BRL: 'pt-BR',
    USD: 'en-US',
    EUR: 'de-DE', // Alemanha como exemplo
    JPY: 'ja-JP',
    ARS: 'es-AR',
  };

  return value.toLocaleString(locales[currency], { style: 'currency', currency });
};
