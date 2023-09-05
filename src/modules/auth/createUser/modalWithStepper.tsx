import { Box, Modal, Stack, Typography } from '@mui/material';
import { FC } from 'react';

import { ICreateUserNodal } from '@/interfaces/modals';
import SimpleButton from '@/common/components/buttons/simpleButton';

const ModalWithStepper: FC<ICreateUserNodal> = ({ open, handleClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 460,
    bgcolor: 'backgroundColor.main',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal aria-labelledby="create-user-modal" open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography>Crear Usuario</Typography>
        <Stack
          direction="row"
          spacing={1}
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <SimpleButton
            fullWidth={false}
            text="Cancelar"
            type="button"
            variant="text"
            onClick={() => handleClose()}
          />
          <SimpleButton
            fullWidth={false}
            text="Aceptar"
            type="submit"
            variant="contained"
          />
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalWithStepper;
