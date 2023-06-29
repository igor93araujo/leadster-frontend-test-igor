'use client';
import React, { useState } from 'react'
import { ContentContainer, MainContainer, WebnarsLink ,WebinarsNavigation, WebnarOrder, InputTitle, InputSelect, HeaderContainer} from './styles'
// import Image from 'next/image'
// import heroAsset from '@/assets/hero/heroAsset.png'

const Webinars: React.FC = () => {

    const [ selectedWebinar, setSelectedWebinar ] = useState('');

    const webinarsLinks = [
        'Agências',
        'ChatBots',
        'Marketing Digital',
        'Geração de Leads',
        'Mídia Paga'
    ];

  return (
      <MainContainer>
          <ContentContainer>
                <HeaderContainer>
                    <WebinarsNavigation>
                        {webinarsLinks.map((link, index) => (
                            <WebnarsLink
                                key={index}
                                onClick={() => setSelectedWebinar(link)}
                                selected = {selectedWebinar === link}
                            >{link}
                            </WebnarsLink>
                        ))}
                    </WebinarsNavigation>
                    <WebnarOrder>
                        <InputTitle>Ordenar por </InputTitle>
                        <InputSelect>
                            <option value="Data">Data de Publicação</option>
                            <option value="Tema">Tema</option>
                        </InputSelect>
                    </WebnarOrder>
                </HeaderContainer>
          </ContentContainer>
      </MainContainer>
  )
}

export default Webinars;
