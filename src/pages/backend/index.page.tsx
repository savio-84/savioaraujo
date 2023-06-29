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
import { Desktop, Pencil, Storefront } from 'phosphor-react';


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
                <Pencil size={60} color='#007CED'/>
                <div>
                  <h2>UI/UX Design</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi quisquam, animi hic perferendis pariatur. Minus aliquam inventore consequuntur corporis quam magni consequatur reprehenderit quisquam vel, nihil corrupti, voluptatem sed.</p>
                </div>
              </MainContentSection>

              <MainContentSection>
                <Desktop size={60} color='#007CED'/>
                <div>
                  <h2>UI/UX Design</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi quisquam, animi hic perferendis pariatur. Minus aliquam inventore consequuntur corporis quam magni consequatur reprehenderit quisquam vel, nihil corrupti, voluptatem sed.</p>
                </div>
              </MainContentSection>
              
              <MainContentSection>
                <Storefront size={60} color='#007CED'/>
                <div>
                  <h2>UI/UX Design</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi quisquam, animi hic perferendis pariatur. Minus aliquam inventore consequuntur corporis quam magni consequatur reprehenderit quisquam vel, nihil corrupti, voluptatem sed.</p>
                </div>
              </MainContentSection>
            </MainContentGroup>
          </MainContent>

          <MainContent>
            <Title>Coding skills</Title>

            <MainContentGroup>
              <ProgressBar title='JavaScript' amount={100} />
              <ProgressBar title='Node.Js' amount={90} />
              <ProgressBar title='Python' amount={70} />
              <ProgressBar title='Microsserviços' amount={70} />
            </MainContentGroup>
          </MainContent>
        </ContentContainerSection>
      </ContentContainer>
    </>
  );
}