import { FC } from 'react';
import {
  Button,
  Fab,
  IconButton,
  useMediaQuery,
  Tooltip,
  Typography,
} from '@mui/material';

import styles from './table.module.scss';

interface TableButtonProps {
  label: string;
  variant: 'text' | 'outlined' | 'contained';
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  isFab?: boolean;
  onClickEvent?: () => void;
  startIcon: JSX.Element;
}

const TableButton: FC<TableButtonProps> = ({
  label,
  isFab,
  onClickEvent,
  startIcon,
  variant,
  color,
}) => {
  const mq = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {mq ? (
        isFab ? (
          <Fab className={styles.fab} variant="extended">
            {startIcon}
            {label}
          </Fab>
        ) : (
          <Tooltip title={label}>
            <IconButton className={styles.button} color={color} onClick={onClickEvent}>
              {startIcon}
            </IconButton>
          </Tooltip>
        )
      ) : (
        <Button
          className={styles.button}
          color={color}
          startIcon={startIcon}
          variant={variant}
          onClick={onClickEvent}
        >
          <Typography variant="button">{label}</Typography>
        </Button>
      )}
    </>
  );
};

export default TableButton;
