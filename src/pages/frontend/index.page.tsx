import {
  ContentContainer,
  ContentContainerSection,
  MainContent,
  Title,
  MainContentSection,
  MainContentGroup
} from './styles';
import Head from 'next/head'; 
import { Desktop, Pencil, Storefront } from 'phosphor-react';

import { Facade } from '../components/facade';
import { ProgressBar } from '../components/progressBar';

export default function FrontendSkills() {
  return (
    <>
      <Head>
        <title>Habilidades Front-end</title>
      </Head>
      <ContentContainer>
        <Facade title="Front-end skills"/>
        <ContentContainerSection>
          <MainContent>
            <Title>Em que venho trabalhando?</Title>
            <MainContentGroup>
              <MainContentSection>
                <Pencil size={'3.5rem'} color='#007CED'/>
                <div>
                  <h2>HTML, CSS, JavaScript</h2>
                  <p>Possuo considerável domínio das tecnologias base para desenvolvimento front-end, o que me permite desenvolver todos os tipos de interfaces.</p>
                </div>
              </MainContentSection>

              <MainContentSection>
                <Desktop size={'3.5rem'} color='#007CED'/>
                <div>
                  <h2>Responsividade</h2>
                  <p>Construo páginas responsivas, o que permite ao usuário ter uma boa usabilidade dos meus sistemas independente do tipo de aparelho que use para acessá-lo.</p>
                </div>
              </MainContentSection>
              
              <MainContentSection>
                <Storefront size={'3.5rem'} color='#007CED'/>
                <div>
                  <h2>SSR e SSG</h2>
                  <p>Através das tecnologias que utilizo, consigo criar páginas que possuem um melhor SEO fazendo meus sistemas receberem um melhor ranqueamento nos sistemas de busca.</p>
                </div>
              </MainContentSection>
            </MainContentGroup>
          </MainContent>

          <MainContent>
            <Title>Coding skills</Title>

            <MainContentGroup>
              <ProgressBar title='HTML' amount={100} />
              <ProgressBar title='CSS' amount={80} />
              <ProgressBar title='JavaScript' amount={100} />
              <ProgressBar title='React.Js' amount={80} />
              <ProgressBar title='React Native' amount={70} />
              <ProgressBar title='Next.Js' amount={80} />
            </MainContentGroup>
          </MainContent>
        </ContentContainerSection>
      </ContentContainer>
    </>
  );
}