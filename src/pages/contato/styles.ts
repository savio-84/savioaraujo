import { styled } from "@/styles";

export const ContentContainer = styled('main', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  overflowX: 'hidden',
});

export const ContentContainerSection = styled('section', {
  flex: 1,
  padding: '3.8125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.6875rem',

  '@media(max-width: 1000px)': {
    flexDirection: 'column',
    padding: '1.6875rem'
  }
});

export const MainContent = styled('article', {
  height: '100%',
  width: '45%',
  minWidth: '8.1216rem',
  paddingLeft: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.375rem',

  '@media(max-width: 1000px)': {
    width: '100%',
  },
  
  'div': {
    'h2': {
      fontSize: '1.125rem',
      color: 'White',
      fontWeight: 'bold',
    },

    'p': {
      fontSize: '1rem',
      color: 'rgba(255,255,255,.7)',
      fontWeight: 'normal'
    },

    a: {
      fontSize: '1.125rem',
      color: 'White',
      fontWeight: 'bold',
      textDecoration: 'none'
    }
  }
})

export const MainContentSection = styled('div', {
  flex: '1',
  display: 'flex',
  gap: '1.6875rem',
  textAlign: 'justify',
  alignItems: 'center',

  'div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
    maxWidth: '75%',
  }
})

export const MainContentGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  overflowY: 'auto',
})

export const Title = styled('h1', {
  position: 'relative',
  width: 'fit-content',
  fontSize: '1.75rem',

  '&::after': {
    content: "",
    position: 'absolute',
    bottom: -5,
    left: 0,
    width: '25%',
    height: '1px',
    backgroundColor: '#007CED',
  },

  '&::before': {
    content: "",
    position: 'absolute',
    bottom: -5,
    left: '25%',
    width: '75%',
    height: '1px',
    backgroundColor: '#353535',
  }
});

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6875rem',
  flex: 1,

  '@media(max-width: 600px)': {
    height: '100%',
  },

  'div': {
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    height: '10rem !important',

    '@media(max-width: 600px)': {
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
    },
    
    'div': {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      height: '100%',
    }
  },

  'textArea': {
    flex: 1,
    resize: 'none',
    height: '100% !important',
    borderRadius: '8px',
    padding: '1rem',
    color: 'white',
    background: 'transparent',
    minHeight: '5rem',
    '@media(max-width: 600px)': {
      // flexDirection: 'column',
      width: '100%',
    },
  },

  'input': {
    width: '100%',
    height: '3.3125rem',
    borderRadius: '8px',
    background: 'transparent',
    border: '1px solid #555555',
    paddingLeft: '1rem',
    color: 'white',
    '&:-webkit-autofill': {
      WebkitTextFillColor: 'white !important', // mantém a cor do texto padrão
      WebkitBoxShadow: '0 0 0px 1000px #202024 inset', // força a cor de fundo padrão
    },
  },

  'button[type=submit]': {
    width: '11.3125rem',
    height: '3.875rem',
    border: '2px solid #007CED',
    backgroundColor: '#333333',
    color: 'White',
    fontSize: '1.25rem',
    borderRadius: '100px',
    cursor: 'pointer',
  }
})