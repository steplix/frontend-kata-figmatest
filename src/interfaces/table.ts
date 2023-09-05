import { DataGridProps, GridColDef } from '@mui/x-data-grid';

export type RowType = {
  [key: string]: string | number | null;
};

export interface DataTableProps extends DataGridProps {
  rows: RowType[];
  columns: GridColDef[];
  tableHeight?: number | string;
  customLabels?: {
    export?: string;
    add?: string;
    exportCSV?: string;
  };
  onExport?: () => void;
}
