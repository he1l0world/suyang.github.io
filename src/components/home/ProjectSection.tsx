import { ArrowForward } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const projects = [
  {
    title: 'Restaurant Ordering System',
    description:
      'A modern restaurant ordering system built with React, Redux, and TypeScript. Features include menu browsing, cart management, and a modern UI design.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    link: 'projects/restaurant',
  },
  // Add more projects here
];

const ProjectCard = ({ project }) => {
  return (
    <Card component={Link} to={project.link} className='project-card'>
      <CardMedia
        component='img'
        height='300'
        image={project.image}
        alt={project.title}
      ></CardMedia>
      <CardContent>
        <Typography variant='h5' component='h3' gutterBottom>
          {project.title}
        </Typography>
        <Typography color='text.secondary' paragraph>
          {project.description}
        </Typography>
        <Box display='flex' alignItems='center' color='primary.main'>
          <Typography sx={{ fontWeight: 500 }}>View Project</Typography>
          <ArrowForward sx={{ ml: 1 }} />
        </Box>
      </CardContent>
    </Card>
  );
};

const ProjectSection = () => {
  return (
    <Stack spacing={2} alignItems='center'>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </Stack>
  );
};

export default ProjectSection;
