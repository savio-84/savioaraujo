import {
  ContentContainer,
  HeaderComponent,
  ProgressBarContainer,
  ProgressBarFill
} from './styles';

interface IProgressBarProps {
  title: string;
  amount: number;
}

export function ProgressBar({ title, amount }: IProgressBarProps) {
  return (
    <ContentContainer>
      <HeaderComponent>
        <h1>{title}</h1>
        <span>{amount}%</span>
      </HeaderComponent>

      <ProgressBarContainer>
        <ProgressBarFill style={{width: `${amount}%`}} />
      </ProgressBarContainer>      
    </ContentContainer>
  );
}