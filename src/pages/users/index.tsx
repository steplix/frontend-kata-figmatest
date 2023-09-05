import { GridValueGetterParams } from '@mui/x-data-grid';

import { MainLayout } from '@/layouts/MainLayout';
import { rows } from 'src/mocks';
import DataTable from '@/common/components/table';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const TablePage = () => {
  return (
    <MainLayout>
      <DataTable
        columns={columns}
        customLabels={{ export: 'Exportar' }}
        pageSize={10}
        rows={rows}
        rowsPerPageOptions={[10]}
      />
    </MainLayout>
  );
};

export default TablePage;
