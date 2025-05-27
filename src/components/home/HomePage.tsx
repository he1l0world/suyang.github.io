import SocialLinks from './SocialLinks';
import '../../styles/home/homepage.css';
// import ProjectSection from './ProjectSection';
import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';

const HeadLine = () => {
  return (
    <Box textAlign={'center'} color='white'>
      <Stack spacing={2} alignItems='center'>
        <Typography
          variant='h3'
          component='h1'
          gutterBottom
          className='animate-fade-in'
          sx={{
            fontWeight: 'bold',
          }}
        >
          Suyang Chen
        </Typography>
        <Typography variant='h6' gutterBottom>
          Software Engineer | Full Stack Developer
        </Typography>
        <SocialLinks />
      </Stack>
    </Box>
  );
};

const AboutMe = () => {
  const introduction =
    "I'm Suyang Chen, a Software Engineer with a strong background in both\
        front-end and back-end development. I earned my Bachelor's in Computer\
        Science from the University of Arizona and am currently pursuing my\
        Master's in Computer Science at The City College of New York. With\
        professional experience at Goldman Sachs developing high-performance\
        trading platforms and distributed systems, along with hands-on startup\
        experience as a co-founder, I'm now seeking a full-time opportunity to\
        drive innovative projects and build robust, scalable software solutions.";

  return (
    <Box className='section'>
      <Typography variant='h4' fontWeight={'bold'}>
        About Me
      </Typography>
      <Box className='section-underline' />
      <Typography variant='h6' color='text.secondary' paragraph>
        {introduction}
      </Typography>
    </Box>
  );
};

// const Projects = () => {
//   return (
//     <Box className='section'>
//       <Typography variant='h4' fontWeight='bold'>
//         Featured Projects
//       </Typography>
//       <Box className='section-underline' />
//       <ProjectSection />
//     </Box>
//   );
// };

const HomePage = () => {
  return (
    <Box textAlign='center' className='home'>
      <Box className='headline'>
        <HeadLine />
      </Box>
      <Box>
        <Container className='content'>
          <AboutMe />
          {/* <Projects /> */}
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
