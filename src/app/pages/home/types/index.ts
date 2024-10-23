export type Ticker = {
  ticker: string;
  PM: number;
  precoAtual: number;
  variacao: number;
  quantidade: number;
  patrimonio: number;
  variacaoTotal: number;
  carteiraPorcentagem: number;
};

export interface Users {
  id: number;
  name: string;
  created_at: string;
}
