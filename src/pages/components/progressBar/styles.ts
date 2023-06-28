import { styled } from "@/styles";

export const ContentContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem'
});

export const HeaderComponent = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const ProgressBarContainer = styled('div', {
  height: '1rem',
  backgroundColor: '#222222',
  borderRadius: '10px',
  overflow: 'hidden',
  border: '3px solid #444444'
});

export const ProgressBarFill = styled('div', {
  height: '100%',
  backgroundColor: '#0070f3',
  borderRadius: '10px',
});