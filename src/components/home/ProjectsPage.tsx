import React from 'react';
import ProjectSection from './ProjectSection';
import { Box, Typography } from '@mui/material';

const ProjectsPage = () => {
  return (
    <Box className='section'>
      <Typography variant='h4' fontWeight='bold'>
        My Projects
      </Typography>
      <Box className='section-underline' />
      <ProjectSection />
    </Box>
  );
};

export default ProjectsPage;
