import {
  ContentContainer,
  MainContent,
  AboutResume
} from './styles';
import previewImg from '../../../public/me.svg';
import Image from 'next/image';
import Head from 'next/head'; 
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Sávio Araújo</title>
      </Head>
      <ContentContainer>
        <MainContent>
          <Image 
              src={previewImg} 
              alt='Calendário simbolizando a aplicação em funcionamento' 
              priority
              />
          <AboutResume>
            <h2>Desenvolvedor Full Stack</h2>
            <h1>Sávio Araújo</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo cumque itaque atque! Quae cupiditate mollitia, nisi accusantium vero eum molestiae unde similique? Magni nulla enim, voluptatem ipsam quod tempore architecto.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, porro. Temporibus reprehenderit veniam recusandae dolores animi, magnam obcaecati laboriosam quo vitae minus, labore officia provident corporis quam nobis quibusdam? Dicta!
            </p>
            <div>
              <button className='portfolio-button' onClick={() => router.push('/portfolio')}>Portfólio</button>
              <button onClick={() => router.push('/contato')}>Contato</button>
            </div>
          </AboutResume>
        </MainContent>
      </ContentContainer>
    </>
  )
}