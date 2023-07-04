import {
  ContentContainer,
  ContentContainerSection,
  MainContent,
  MainContentGroup,
  MainContentSection,
  Title,
} from './styles';

import Head from 'next/head';
import { Facade } from '../components/facade';
import { ProgressBar } from '../components/progressBar';
import { Desktop, Gear, Link } from 'phosphor-react';


export default function Backend() {
  return (
    <>
      <Head>
        <title>Habilidades Front-end</title>
      </Head>
      <ContentContainer>
        <Facade title="Back-end skills"/>
        <ContentContainerSection>
          <MainContent>
            <Title>Em que venho trabalhando?</Title>
            <MainContentGroup>
              <MainContentSection>
                <Gear size={'3.5rem'} color='#007CED'/>
                <div>
                  <h2>Test Driven Design</h2>
                  <p>Sempre utilizo as práticas de TDD (Desevolvimento baseado em testes) garantindo maior qualidade e segurança das aplicações.</p>
                </div>
              </MainContentSection>

              <MainContentSection>
                <Desktop size={'3.5rem'} color='#007CED'/>
                <div>
                  <h2>Domain Driven Design</h2>
                  <p>Utilizando o desenvolvimento baseado a domínios meus softwares são mais fáceis de desenvolver e manter garantindo maior velocidade de desenvolvimento e menor custo.</p>
                </div>
              </MainContentSection>
              
              <MainContentSection>
                <Link size={'3.5rem'} color='#007CED'/>
                <div>
                  <h2>Microsserviços</h2>
                  <p>Habilidade para criar microsserviços, permitindo criar aplicações mais performáticas e escaláveis.</p>
                </div>
              </MainContentSection>
            </MainContentGroup>
          </MainContent>

          <MainContent>
            <Title>Coding skills</Title>

            <MainContentGroup>
              <ProgressBar title='JavaScript' amount={100} />
              <ProgressBar title='TypeScript' amount={100} />
              <ProgressBar title='Node.Js' amount={95} />
              <ProgressBar title='Git' amount={90} />
              <ProgressBar title='Docker' amount={90} />
              <ProgressBar title='PostgreSQL' amount={85} />
              <ProgressBar title='MongoDB' amount={75} />
              <ProgressBar title='Python' amount={70} />
              <ProgressBar title='AWS' amount={70} />
            </MainContentGroup>
          </MainContent>
        </ContentContainerSection>
      </ContentContainer>
    </>
  );
}