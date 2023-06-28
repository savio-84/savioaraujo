import { styled } from "@/styles";

export const FooterComponent = styled('footer', {
  padding: '1rem',
  width: '100vw',
  bottom: 0,
  backgroundColor: '#222222',
  borderTop: '2px solid #333333'
})

export const SocialMediaMenu = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2rem',

  
  'a': {
    color: 'rgba(255, 255,255, .5)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '.5rem',
    padding: '.2rem',
  }
})