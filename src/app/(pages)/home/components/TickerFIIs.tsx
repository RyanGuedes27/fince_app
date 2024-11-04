'use client';
import { Column } from '@/components/ReusableTable/types';
import { Ticker } from '../types';
import { formatCurrency } from '@/utils/formatCurrency';
import { ReusableTable } from '@/components/ReusableTable';
import { fiis } from '../utils/constants';

export function TickerFIIs() {
  const columns: Column<Ticker>[] = [
    { header: 'Ticker', accessor: 'ticker', type: 'Text' },
    { header: 'PM', accessor: 'PM', format: (value: number) => formatCurrency(value, 'BRL'), type: 'Text' },
    {
      header: 'Preço Atual',
      accessor: 'precoAtual',
      format: (value: number) => formatCurrency(value, 'BRL'),
      type: 'Text',
    },
    {
      header: 'Variação (%)',
      accessor: 'variacao',
      format: (value: number) => `${value.toFixed(2)}%`,
      type: 'Numeric',
    },
    { header: 'Quantidade', accessor: 'quantidade', type: 'Text' },
    {
      header: 'Patrimônio',
      accessor: 'patrimonio',
      format: (value: number) => formatCurrency(value, 'BRL'),
      type: 'Text',
    },
    {
      header: 'Variação Total (R$)',
      accessor: 'variacaoTotal',
      format: (value: number) => formatCurrency(value, 'BRL'),
      type: 'Numeric',
    },
    {
      header: '% na Carteira',
      accessor: 'carteiraPorcentagem',
      format: (value: number) => `${value.toFixed(2)}%`,
      type: 'Text',
    },
  ];

  return (
    <ReusableTable<Ticker>
      columns={columns}
      data={fiis}
      caption='Resumo da sua carteira de FIIs'
      footerData={<div className='text-right'>Total: {formatCurrency(12000, 'BRL')}</div>}
    />
  );
}
