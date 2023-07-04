import { styled } from '@/styles';

export const ContentContainer = styled('header', {
  backgroundColor: '#252525',
  height: '12rem',
  minHeight: '12rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '2rem',
  fontSize: '2rem',
  borderTop: '1px solid #333333',
  borderBottom: '1px solid #333333',
  h1: {
    fontSize: '2rem'
  },

  '@media(max-width: 1000px)': {
    height: '10rem',
    minHeight: '10rem',
    h1: {
      fontSize: '2rem'
    }
  },

  '@media(max-width: 450px)': {
    height: '8rem',
    minHeight: '8rem',

    h1: {
      fontSize: '2rem'
    }
  },
  
});