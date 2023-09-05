import { Box, Stack } from '@mui/material';

interface BlockDProps {
  components: {
    header: JSX.Element;
    contentA: JSX.Element;
    contentB: JSX.Element;
    contentC: JSX.Element;
  };
}

const BlockC: React.FC<BlockDProps> = ({ components }) => {
  return (
    <Stack
      direction={'column'}
      spacing={2}
      sx={{ alignItems: 'stretch', justifyContent: 'stretch', flexGrow: 1 }}
    >
      <Box sx={{ width: '100%', height: '10.5rem' }}>{components.header}</Box>
      <Stack direction={'row'} spacing={2} sx={{ width: '100%', flexGrow: 1 }}>
        <Stack
          direction={'column'}
          spacing={2}
          sx={{ width: '50%', flexGrow: 1, height: '100%' }}
        >
          <Box sx={{ width: '100%', height: '10.5rem' }}>{components.contentA}</Box>
          <Box sx={{ flexGrow: 1 }}>{components.contentB}</Box>
        </Stack>
        <Box sx={{ width: '50%', flexGrow: 1 }}>{components.contentC}</Box>
      </Stack>
    </Stack>
  );
};

export default BlockC;
