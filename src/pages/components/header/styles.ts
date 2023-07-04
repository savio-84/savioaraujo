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

  '@media(max-width: 1000px)': {
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
  },

  img: {
    height: '44px !important',
    width: '44px !important',
    borderRadius: '100%',
  },

  h1: {
    '@media(max-width: 600px)': {
      display: 'none'
    }
  },

  'div': {
    width: 'fit-content',
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
  display: 'flex !important',
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
  },

  '@media(max-width: 768px)': {
    display: 'none !important'
  }
});

export const Preview = styled('div', {
  paddingRight: '$8',
  borderRadius: '100%',
  overflow: 'hidden',
  width: 'fit-content',
  
  '@media(max-width: 600px)': {
    display: 'none'
  }
});


// Dropdown
export const DropdownContainer = styled('nav', {
  position: 'relative',
  display: 'inline-block !important',

  '@media(min-width: 768px)': {
    display: 'none !important',
  }
});

export const DropdownButton = styled('a', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

export const DropdownList = styled('ul', {
  position: 'absolute',
  top: '100%',
  right: 0,
  zIndex: 1,
  padding: 0,
  margin: 0,
  listStyle: 'none',
  width: '10rem',
});

export const DropdownItem = styled('li', {
  padding: '.5rem',
  backgroundColor: '#333333',
  '&:hover': {
    backgroundColor: '#222222',
  },
});