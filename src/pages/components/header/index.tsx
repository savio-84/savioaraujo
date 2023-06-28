import { HeaderComponent, Preview, Menu } from './styles';
import Image from 'next/image';
import previewImg from '../../../../public/me.svg';
import { useRouter } from 'next/router';

export function Header() {  
  const router = useRouter();
  
  return (
    <HeaderComponent>
      <div onClick={() => router.push('/')}>
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

      <Menu>
        <a className={router.pathname == '/'? 'active' : ''} onClick={() => router.push('/')}>Sobre mim</a>
        <a className={router.pathname == '/frontend'? 'active' : ''} onClick={() => router.push('/frontend')}>Front-end</a>
        <a className={router.pathname == '/backend'? 'active' : ''} onClick={() => router.push('/backend')}>Back-end</a>
        <a className={router.pathname == '/portfolio'? 'active' : ''} onClick={() => router.push('/portfolio')}>Portfólio</a>
        <a className={router.pathname == '/contato'? 'active' : ''} onClick={() => router.push('/contato')}>Contato</a>
      </Menu>
    </HeaderComponent>
  );
}