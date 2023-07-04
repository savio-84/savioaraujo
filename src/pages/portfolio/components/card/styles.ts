import { styled } from "@/styles";

export const ContainerComponent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: '16/9',

  a: {
    width: '100%',
    height: '100%',
  },
  
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '25px'
  },
})