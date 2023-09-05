import { Box, Stack } from '@mui/material';

interface BlockBProps {
  components: { header: JSX.Element; content: JSX.Element };
}

const BlockC: React.FC<BlockBProps> = ({ components }) => {
  return (
    <Stack
      direction={'column'}
      spacing={2}
      sx={{ alignItems: 'stretch', justifyContent: 'stretch', flexGrow: 1 }}
    >
      <Box sx={{ width: '100%', height: '10.5rem' }}>{components.header}</Box>
      <Box sx={{ width: '100%', flexGrow: 1 }}>{components.content}</Box>
    </Stack>
  );
};

export default BlockC;
