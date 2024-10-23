// Definindo os tipos aceitos para a prop 'type'
export type ColumnType = 'Numeric' | 'Text' | 'Date';

export type Column<T> = {
  header: string;
  accessor: keyof T; // O 'accessor' agora é uma chave de T
  format?: (value: any) => string;
  type: ColumnType; // Numeric, Text ou Date
};

export type ReusableTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  caption?: string;
  footerData?: React.ReactNode;
};
