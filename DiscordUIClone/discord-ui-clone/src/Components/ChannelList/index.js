import React from 'react';


import ChannelButton from '../ChannelButton/index';

import {Container, Category, AddCategoryIcon} from './styles';



const ChannelInfo = () => {
  return (
      <>
        <Container>
            <Category>
                <span>Canais de Texto</span>    
                <AddCategoryIcon />     
            </Category>
            <ChannelButton channelName="estudo" />
            <ChannelButton channelName="trabalho" selected />
            <ChannelButton channelName="conteúdo" />
            <ChannelButton channelName="links" selected/>
            <ChannelButton channelName="dúvidas" />
        </Container>
      </>
  )
}

export default ChannelInfo;