import { FC, useRef, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IosShareIcon from '@mui/icons-material/IosShare';
import AddIcon from '@mui/icons-material/Add';

import { isStringLessThan, isStringEmpty } from '@/common/utils/validators';
import { filterRowsByText } from '@/common/utils/helpers';
import { DataTableProps } from 'src/interfaces';
import { BUTTON_LABELS } from '@/common/utils/constants';
import ModalWithStepper from '@/modules/auth/createUser/modalWithStepper';
import DropdownButton from '@/modules/dropDownButton';
import OptionMenu from '@/modules/optionMenu/optionMenu';

import styles from './table.module.scss';
import ExcelExport from './ExcelExport';
import TableButton from './TableButton';
import CustomToolbar from './CustomToolbar';

/**
 *
 * @param {Function} onExport by default it will export on excel format, if you want another kind of format you can pass a function to this prop
 */
const DataTable: FC<DataTableProps> = ({
  rows,
  columns,
  tableHeight,
  customLabels,
  onExport,
  ...props
}) => {
  const [tableRows, setTableRows] = useState(rows);
  const [open, setOpen] = useState(false);
  const tableRef = useRef(null);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueToFind = e.target.value;

    if (isStringEmpty(valueToFind)) setTableRows(rows);
    if (isStringLessThan(3, valueToFind)) return;

    const filteredRows = filterRowsByText(rows, valueToFind);

    setTableRows(filteredRows);
  };
  const onAddUser = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const renderButtonCell = () => {
    return (
      <DropdownButton
        color="primary.main"
        menuItems={[
          {
            color: 'primary.main',
            text: 'Modificar contraseña',
            iconName: 'lock',
          },
          {
            color: 'primary.main',
            text: 'Cambiar privilegio',
            iconName: 'security',
          },
          {
            color: 'primary.main',
            text: 'Dar de baja el usuario',
            iconName: 'delete',
          },
        ]}
      />
    );
  };

  const columnsWithButton: GridColDef[] = [
    ...columns,
    { field: 'button', headerName: 'Button', renderCell: renderButtonCell },
  ];

  return (
    <Box className={styles['table-container']}>
      <Box display="flex" gap={4} justifyContent="space-between" mb={4}>
        <TextField
          InputProps={{
            startAdornment: <SearchIcon className={styles.icon} />,
          }}
          placeholder="Search…"
          variant="outlined"
          onChange={onSearch}
        />
        <Box display="flex" gap={4}>
          {onExport ? (
            <TableButton
              color={'primary'}
              label={customLabels?.export ?? BUTTON_LABELS.export}
              startIcon={<IosShareIcon />}
              variant="text"
              onClickEvent={onExport}
            />
          ) : (
            <ExcelExport
              data={tableRows}
              fileName="users"
              label={customLabels?.export ?? BUTTON_LABELS.export}
            />
          )}

          <TableButton
            isFab
            color={'primary'}
            label={customLabels?.add ?? BUTTON_LABELS.add}
            startIcon={<AddIcon />}
            variant="contained"
            onClickEvent={onAddUser}
          />
          <ModalWithStepper handleClose={handleClose} open={open} />
        </Box>
      </Box>
      <Stack direction="row" height={tableHeight ?? 500} spacing={2}>
        <OptionMenu
          menuItems={[
            { iconName: 'map', text: 'Zonas' },
            { iconName: 'idea', text: 'Nodos' },
            { iconName: 'notification', text: 'Eventos' },
          ]}
        />
        <DataGrid
          ref={tableRef}
          checkboxSelection
          columns={columnsWithButton}
          components={{
            Toolbar: CustomToolbar,
          }}
          localeText={{
            toolbarExport: customLabels?.exportCSV ?? BUTTON_LABELS.exportCSV,
          }}
          rows={tableRows}
          {...props}
        />
      </Stack>
    </Box>
  );
};

DataTable.defaultProps = {
  tableHeight: 470,
};

export default DataTable;
