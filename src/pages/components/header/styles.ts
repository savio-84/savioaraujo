import { styled } from "@/styles";

export const HeaderComponent = styled('header', {
  backgroundColor: '#222222',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: '2rem',
  paddingLeft: '2rem',
  paddingTop: '2.875rem',
  paddingBottom: '3.8125rem',
  top: 0,
  width: '100vw',
  // height:'10.125rem',

  'div': {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    cursor: 'pointer',
  },

  'nav': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '2rem',    
  }
});

export const Menu = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '2rem',

  'a': {
    color: 'rgba(255, 255,255, .5)',
    fontWeight: 'bold',
    fontSize: '1.875rem',
    textDecoration: 'none',
    cursor: 'pointer',
    '&.active': {
      color: 'White',
    }
  }
});

export const Preview = styled('div', {
  paddingRight: '$8',
  borderRadius: '100%',
  overflow: 'hidden',
  
  '@media(max-width: 600px)': {
    display: 'none'
  }
});