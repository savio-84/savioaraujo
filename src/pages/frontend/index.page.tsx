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
              <ProgressBar title='HTML' amount={100} />
              <ProgressBar title='CSS' amount={80} />
              <ProgressBar title='JavaScript' amount={90} />
              <ProgressBar title='React.Js' amount={80} />
              <ProgressBar title='React.Js' amount={70} />
            </MainContentGroup>
          </MainContent>
        </ContentContainerSection>
      </ContentContainer>
    </>
  );
}