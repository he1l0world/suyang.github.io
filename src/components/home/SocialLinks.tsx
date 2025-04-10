import { Description, GitHub, LinkedIn, Email } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import React from 'react';

const socialLinks = [
  { icon: <GitHub />, url: 'https://github.com/he1l0world', label: 'GitHub' },
  {
    icon: <LinkedIn />,
    url: 'https://linkedin.com/in/suyang-chen',
    label: 'LinkedIn',
  },
  { icon: <Email />, url: 'mailto:dawson0xff@gmail.com', label: 'Email' },
  {
    icon: <Description />,
    url: '/assets/resume/Suyang_Chen_Resume.pdf',
    label: 'Resume',
  },
];

type SocialLinksProps = {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({className}) =>{
  return (
    <Stack
      direction='row'
      spacing={2}
      justifyContent='center'
      alignItems='center'
      sx={{ padding: 2 }}
    >
      {socialLinks.map((link) => (
        <IconButton
          key={link.label}
          href={link.url}
          target='_blank'
          rel='noopener noreferrer'
          color='primary'
          className={className}
          sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}
        >
          {link.icon}
        </IconButton>
      ))}
    </Stack>
  );
};

export default SocialLinks;
