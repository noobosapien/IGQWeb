import { styled } from '@mui/system';
import inner from '../public/inner.svg';
import mid from '../public/mid.svg';
import outter from '../public/outter.svg';
import logo from '../public/logo.png';
import Image from 'next/image';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Animation = styled('div')(({ theme }) => ({
  position: 'absolute',

  [theme.breakpoints.up('md')]: {
    width: '16rem',
    height: '16rem',
    top: '-3rem',
    left: '-3rem',
  },
  [theme.breakpoints.down('md')]: {
    // width: '100vw',
    // height: '100vw',
    width: '12rem',
    height: '12rem',
    left: '-1rem',
    top: '-1.5rem',
  },
  background: `url(${outter.src})`,
  //   left: 'calc(50%-75vw)',
  animation: 'antiRotate 30s infinite',

  '@keyframes antiRotate': {
    '0%': {
      transform: 'rotate(0)',
    },

    '100%': {
      transform: 'rotate(-360deg)',
    },
  },
}));

const Animation2 = styled('div')(({ theme }) => ({
  position: 'absolute',

  [theme.breakpoints.up('md')]: {
    width: '14rem',
    height: '14rem',
    top: '-2rem',
    left: '-2rem',
  },
  [theme.breakpoints.down('md')]: {
    // width: '80vw',
    // height: '80vw',
    width: '10rem',
    height: '10rem',
    top: '-0.5rem',
    left: '0rem',
  },
  background: `url(${mid.src})`,
  animation: 'rot 20s infinite',

  '@keyframes rot': {
    '0%': {
      transform: 'rotate(0)',
    },

    '100%': {
      transform: 'rotate(360deg)',
    },
  },
}));

const Animation3 = styled('div')(({ theme }) => ({
  position: 'absolute',

  [theme.breakpoints.up('md')]: {
    width: '10rem',
    height: '10rem',
  },
  [theme.breakpoints.down('md')]: {
    // width: '50vw',
    width: '7rem',
    // height: '50vw',
    height: '7rem',
    top: '1rem',
    left: '1.5rem',
    // top: '1vw',
    // left: '1vw',
  },
  background: `url(${inner.src})`,
  animation: 'antiRotate 10s infinite',
}));

const LogoContainer = styled('div')(({ theme }) => ({
  position: 'absolute',

  [theme.breakpoints.up('md')]: {
    top: '2rem',
    left: '2rem',
  },
  [theme.breakpoints.down('md')]: {
    top: '3rem',
    left: '3rem',
  },
  //   [theme.breakpoints.down('sm')]: {
  //     top: '3.5rem',
  //     left: '3rem',
  //   },
}));

function Logo() {
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesLG = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <LogoContainer>
      <Image
        src={logo}
        alt="logo"
        width={matchesMD ? 60 : 80}
        height={matchesMD ? 60 : 80}
      />
    </LogoContainer>
  );
}

export default function LogoAnim(props) {
  return (
    <>
      <Animation />
      <Animation2 />
      <Animation3 />
      <Logo />
    </>
  );
}
