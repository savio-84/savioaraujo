
import Image from "next/image";
import { ContainerComponent } from "./styles";

interface IPortfolioCardProps {
  url: string;
  image: any;
  alt?: string
}

export function PortfolioCard({ image, url, alt }: IPortfolioCardProps) {
  return (
    <ContainerComponent>
      <a href={url} target="_blank">
        <Image
          src={image} 
          alt={alt? alt : ''}
          priority
        />
      </a>
    </ContainerComponent>
  );
}