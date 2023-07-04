import { styled } from "@/styles";

export const ContentContainer = styled('main', {
  flex: 1,
  display: 'flex',
  paddingRight: '14.6875rem',
  paddingLeft: '14.6875rem',
  paddingTop: '7rem',
  paddingBottom: '7rem',
  overflowY: 'auto',
});

export const MainContent = styled('section', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
  gap: '5.125rem',

  'img': {
    height: '100%',
    minHeight: '20rem',
    width: 'auto',
    borderRadius: '100%',
    border: '1rem solid #444444',
    boxShadow: '0 0 50px black'
  }
});

export const AboutResume = styled('article', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '1rem',
  flexDirection: 'column',
  height: 'fit-content',

  'h1': {
    fontWeight: 'bolder',
    fontSize: '2.8125rem',
  },

  'h2': {
    color: 'rgba(255,255,255,.5)',
    fontWeight: 'normal',
  },

  'p': {
    color: 'White',
    fontSize: '1.25rem',
  },

  'div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '1rem',
  },

  '.portfolio-button': {
    border: '3px solid #007CED',
  },

  'button': {
    border: '3px solid #fff',
    backgroundColor: '#333333',
    borderRadius: '30px',
    color: 'White',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    boxShadow: '0 5px 5px black',
    fontSize: '1rem',
    cursor: 'pointer',
  }
})