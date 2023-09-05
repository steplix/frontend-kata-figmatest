import { FC } from 'react';
import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';

export const CustomToolbar: FC = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

export default CustomToolbar;
