import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    scrollbarWidth: 'thin',
    scrollbarColor: 'rgba(255,255,255,.2) transparent !important',

    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent !important',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(255,255,255,.2)',
      borderRadius: '4px',
    },

    '@media(max-width: 768px)': {
      fontSize: '14px',
    },
    '@media(max-width: 400px)': {
      fontSize: '10px',
    }
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '#222222',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  },

  '.container': {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflowY: 'auto',
    overflowX: 'hidden',
  }
})