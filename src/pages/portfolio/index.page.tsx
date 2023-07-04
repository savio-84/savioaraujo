import {
  ContentContainer,
  ContentContainerSection,
  MainContent,
  Title,
  MainContentSection,
  MainContentGroup
} from './styles';
import Head from 'next/head'; 

import { Facade } from '../components/facade';
import { PortfolioCard } from './components/card';
import previewImg from '../../../public/banner-exemple.svg';
import banner from '../../../public/banner-exemple-2.svg';

// necessário mudar a extensão do arquivo e adicionar responsividade à página
export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Habilidades Front-end</title>
      </Head>
      <ContentContainer>
        <Facade title="Portfólio"/>
        <ContentContainerSection>
          <PortfolioCard image={previewImg} url='/' />
          <PortfolioCard image={banner} url='/' />          
          <PortfolioCard image={previewImg} url='/' />
          <PortfolioCard image={banner} url='/' />          
          <PortfolioCard image={previewImg} url='/' />
          <PortfolioCard image={banner} url='/' />          
          <PortfolioCard image={previewImg} url='/' />
          <PortfolioCard image={banner} url='/' />          
          <PortfolioCard image={previewImg} url='/' />
          <PortfolioCard image={banner} url='/' />          
          <PortfolioCard image={previewImg} url='/' />
          <PortfolioCard image={banner} url='/' />          
          <PortfolioCard image={previewImg} url='/' />
          <PortfolioCard image={banner} url='/' />          
        </ContentContainerSection>
      </ContentContainer>
    </>
  );
}