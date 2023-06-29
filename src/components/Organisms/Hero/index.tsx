import React from 'react'
import { ContentContainer, MainContainer, TopText, UpperContainer, DownContainer,  HeroAsset, FirstCall, SecondCall} from './styles'
import Image from 'next/image'
import heroAsset from '@/assets/hero/heroAsset.png'

const Hero: React.FC = () => {
  return (
      <MainContainer>
          <ContentContainer>
              <UpperContainer>
                  <TopText>WEBINARS EXCLUSIVOS</TopText>
                  <FirstCall>Menos Conversinha, <br /> <span>Mais Conversão</span></FirstCall>
                  <HeroAsset>
                      <Image src={heroAsset} alt="Logo" width={40} height={30} />
                  </HeroAsset>
              </UpperContainer>
              <DownContainer>
                  <SecondCall>Conheça as estratégias que <span>mudaram o jogo</span> e como aplicá-la no seu negócio</SecondCall>
              </DownContainer>
          </ContentContainer>
      </MainContainer>
  )
}

export default Hero
