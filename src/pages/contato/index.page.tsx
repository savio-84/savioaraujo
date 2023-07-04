import { ContentContainer, ContentContainerSection, FormContainer, MainContent, MainContentGroup, MainContentSection, Title } from "./styles";
import Head from "next/head";
import { Facade } from '../components/facade';
import { Phone, MapPin, Envelope } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

const sendMailFormSchema = z.object({
  // username: z
  //   .string()
  //   .min(3, {message: 'Digite um nome de usuário com no mínimo 3 letras.'})
  //   .regex(/^[a-z0-9\\-]+$/i, {
  //     message: 'O usuário pode conter apenas letras, números e hifens.'
  //   })
  //   .transform(username => username.toLowerCase()),
  // name: z
  //   .string()
  //   .min(3, {message: 'Digite um nome de usuário com no mínimo 3 letras.'})
  name: z.string().min(3, {message: 'Seu nome deve ter pelo menos 3 letras.'}),
  email: z.string().email(),
  message: z.string(),
});

type SendMailFormType = z.infer<typeof sendMailFormSchema>;

export default function Contact() {

  const { register, handleSubmit, formState: {errors, isSubmitting}, setValue} = useForm<SendMailFormType>({
    resolver: zodResolver(sendMailFormSchema)
  });

  async function handleRegister({ name, email, message }: SendMailFormType) {
    console.log(name, email, message);
    try {
      await api.post('/sendMail', {
        name,
        email,
        message
      })
    } catch(error: any) {
      if (error instanceof AxiosError && error?.response?.data?.message) alert(error.response.data.message);
    }
  }

  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <ContentContainer>
        <Facade title="Contato"/>
        <ContentContainerSection>
          <MainContent>
            <MainContentGroup>
              <MainContentSection>
                <Phone size={'3.5rem'} color='#007CED'/>
                <div>
                  <h2>+55 (84) 981718070</h2>
                  <p>Telefone e whatsapp, estou disponível todos os dias das 8h as 18h.</p>
                </div>
              </MainContentSection>

              <MainContentSection>
                <MapPin size={'3.5rem'} color='#007CED'/>
                <div>
                  <h2>Natal, RN</h2>
                  <p>Atualmente moro em Natal RN porém trabalho de forma remota para todo o país.</p>
                </div>
              </MainContentSection>
              
              <MainContentSection>
                <Envelope size={'3.5rem'} color='#007CED'/>
                <div>
                  <h2><a href="mailto:svcarvalho38@gmail.com">svcarvalho38@gmail.com</a></h2>
                  <p>Posso ajudá-lo? Me envie um email ou preencha o formulário ao lado.</p>
                </div>
              </MainContentSection>
            </MainContentGroup>
          </MainContent>

          <MainContent>
            <Title>Contate-me</Title>

            <FormContainer onSubmit={handleSubmit(handleRegister)} >
              <div>
                <div>
                  <input type="text" placeholder="Nome (Ex.: Sávio Araújo)" {...register('name')} />
                  <input type="email" placeholder="Email (Ex.: seuemail@email.com)" {...register('email')} />
                </div>
                <textarea placeholder="Em que posso ajudá-lo?" {...register('message')}/>
              </div>
              <button type="submit">Enviar</button>
            </FormContainer>
          </MainContent>
        </ContentContainerSection>
      </ContentContainer>
    </>
  );
}