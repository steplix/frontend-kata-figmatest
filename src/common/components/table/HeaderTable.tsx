import PropTypes from 'prop-types';
import { FC } from 'react';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IosShareIcon from '@mui/icons-material/IosShare';
import AddIcon from '@mui/icons-material/Add';

import styles from './table.module.scss';
import HeaderButton from './TableButton';

interface HeaderTableProps {
  onExport?: () => void;
  onAddUser?: () => void;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HeaderTable: FC<HeaderTableProps> = ({ onAddUser, onExport, onSearch }) => {
  return (
    <Box display="flex" justifyContent="space-between" mb={4}>
      <TextField
        InputProps={{
          startAdornment: <SearchIcon className={styles.icon} />,
        }}
        placeholder="Search…"
        variant="outlined"
        onChange={onSearch}
      />
      <Box display="flex" gap={4}>
        <HeaderButton
          color={'primary'}
          label="Export"
          startIcon={<IosShareIcon />}
          variant="text"
          onClickEvent={onExport}
        />
        <HeaderButton
          isFab
          color={'primary'}
          label="Add User"
          startIcon={<AddIcon />}
          variant="contained"
          onClickEvent={onAddUser}
        />
      </Box>
    </Box>
  );
};

HeaderTable.propTypes = {
  onExport: PropTypes.func,
  onAddUser: PropTypes.func,
  onSearch: PropTypes.func.isRequired,
};

export default HeaderTable;
