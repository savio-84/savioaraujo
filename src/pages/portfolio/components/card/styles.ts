import { styled } from "@/styles";

export const ContainerComponent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '16.875rem',
  width: '29.6875rem',
  img: {
    height: '100%',
    maxHeight: '16.875rem',
    width: '100%',
    maxWidth: '29.6875rem',
    objectFit: 'cover',
    borderRadius: '25px'
  },
})