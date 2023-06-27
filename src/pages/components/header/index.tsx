import { HeaderComponent, Preview } from './styles';
import Image from 'next/image';
import previewImg from '../../../../public/me (1).jpg';

export function Header() {
  return (
    <HeaderComponent>
      <div>
        <Preview>
          <Image 
            src={previewImg} 
            alt='Calendário simbolizando a aplicação em funcionamento' 
            height={50} 
            quality={50} 
            priority />
        </Preview>
        <h1>Sávio Araújo</h1>
      </div>

      <nav>
        <a href="/">Sobre mim</a>
        <a href="/rontend">Front-end</a>
        <a href="/backend">Back-end</a>
        <a href="/portfolio">Portfólio</a>
        <a href="/contato">Contato</a>
      </nav>
    </HeaderComponent>
  );
}