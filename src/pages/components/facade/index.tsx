import {
  ContentContainer
} from './styles';

interface IFacadeProps {
  title: string
}

export function Facade({ title }: IFacadeProps) {
  return (
    <ContentContainer>
      <h1>{title}</h1>
    </ContentContainer>
  );
}