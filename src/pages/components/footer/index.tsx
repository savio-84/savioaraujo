import { FooterComponent, SocialMediaMenu } from './styles';
import { InstagramLogo, LinkedinLogo } from 'phosphor-react';

export function Footer() {
  return (
    <FooterComponent>
      <SocialMediaMenu>
        <a href="https://www.linkedin.com/in/saviocarvalho084/" target='_blank'>LinkedIn <LinkedinLogo size={20}/></a>
        <a href="https://www.instagram.com/saviocarvalho.ts/" target='_blank'>Instagram <InstagramLogo size={20}/></a>
      </SocialMediaMenu>

    </FooterComponent>
  )
};