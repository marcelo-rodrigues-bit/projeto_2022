export interface Product {
  id: string;
  nome: string;
  descricao: string;
  precoCusto: number;
  margemLucro: number;
  quantidade: number;
  unidade: string;
  ativo: boolean;
  dataValidade: string;  
  ultimaVenda: string;
  status: boolean  
}