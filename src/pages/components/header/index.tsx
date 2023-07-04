import { HeaderComponent, Preview, Menu, DropdownContainer, DropdownButton, DropdownList, DropdownItem } from './styles';
import Image from 'next/image';
import previewImg from '../../../../public/me.svg';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { List } from 'phosphor-react';

export function Header() {  
  const router = useRouter(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function handleClickLink(path: string) {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
    router.push(path);
  }
  
  return (
    <HeaderComponent>
      <div onClick={() => router.push('/')}>
        <Image 
          src={previewImg} 
          alt='Calendário simbolizando a aplicação em funcionamento' 
          quality={50} 
          priority />
        {/* <Preview>
        </Preview> */}
        <h1>Sávio Araújo</h1>
      </div>

      <Menu>
        <a className={router.pathname == '/'? 'active' : ''} onClick={() => handleClickLink('/')}>Sobre mim</a>
        <a className={router.pathname == '/backend'? 'active' : ''} onClick={() => handleClickLink('/backend')}>Back-end</a>
        <a className={router.pathname == '/frontend'? 'active' : ''} onClick={() => handleClickLink('/frontend')}>Front-end</a>
        {/* <a className={router.pathname == '/portfolio'? 'active' : ''} onClick={() => handleClickLink('/portfolio')}>Portfólio</a> */}
        <a className={router.pathname == '/contato'? 'active' : ''} onClick={() => handleClickLink('/contato')}>Contato</a>
      </Menu>

      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}><List size={'3rem'} /></DropdownButton>
        {isDropdownOpen && (
          <DropdownList>
            <DropdownItem onClick={() => handleClickLink('/')}>
              Sobre mim
            </DropdownItem>
            <DropdownItem onClick={() => handleClickLink('/backend')}>
              Back-end
            </DropdownItem>
            <DropdownItem onClick={() => handleClickLink('/frontend')}>
              Front-end
            </DropdownItem>
            {/* <DropdownItem onClick={() => handleClickLink('/portfolio')}>
              Portfólio
            </DropdownItem> */}
            <DropdownItem onClick={() => handleClickLink('/contato')}>
              Contato
            </DropdownItem>
          </DropdownList>
        )}
      </DropdownContainer>
    </HeaderComponent>
  );
}