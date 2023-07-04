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
              Sou apaixonado por TI desde criança da teoria a prática com um certo fascínio sobre a área de arquitetura de software pelo seus benefícios na construção de softwares performáticos e manuteníveis, passo a maior parte do meu tempo focado em descobrir formas cada vez melhores de criar softwares mais performáticos, organizados e legíveis para potencializar seu desempenho, manutenibilidade e reduzir seus custos com objetivo de impactar de forma positiva a vida de todos que são beneficiados com meu trabalho.
            </p>
            <div>
              {/* <button className='portfolio-button' onClick={() => router.push('/portfolio')}>Portfólio</button> */}
              <button className='portfolio-button' onClick={() => router.push('/contato')}>Contato</button>
            </div>
          </AboutResume>
        </MainContent>
      </ContentContainer>
    </>
  )
}