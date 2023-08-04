import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface SectionTitleProps {
  name: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ name }) => {
  return (
    <Box 
    sx={{ 
      textAlign:'center',
      bgcolor: 'white',
      p: 2,
      marginBottom: 2,
    
    }}
    >
      <Typography variant="h4" component="h2"  color= 'black' >
        {name}
      </Typography>
    </Box>
  );
}

export default SectionTitle;
