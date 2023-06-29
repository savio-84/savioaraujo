import { styled } from "@/styles";

export const ContentContainer = styled('main', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
});

export const ContentContainerSection = styled('section', {
  flex: 1,
  padding: '3.8125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.6875rem',
});

export const MainContent = styled('article', {
  height: '100%',
  width: '45%',
  minWidth: '8.1216rem',
  minHeight: '26.75rem',
  paddingLeft: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.375rem',
  
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
    }
  }
})

export const MainContentSection = styled('div', {
  flex: '1',
  display: 'flex',
  gap: '1.6875rem',
  textAlign: 'justify',

  'div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
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
})