import { FC } from 'react';
import IosShareIcon from '@mui/icons-material/IosShare';

import Export from 'src/services/Export';

import { RowType } from '../../../interfaces/table';

import HeaderButton from './TableButton';

interface ExcelExportProps {
  data: RowType[];
  fileName: string;
  label: string;
}

const ExcelExport: FC<ExcelExportProps> = ({ data, fileName, label }) => {
  return (
    <HeaderButton
      color={'primary'}
      label={label}
      startIcon={<IosShareIcon />}
      variant="text"
      onClickEvent={() => Export.exportToExcel(data, fileName)}
    />
  );
};

export default ExcelExport;
