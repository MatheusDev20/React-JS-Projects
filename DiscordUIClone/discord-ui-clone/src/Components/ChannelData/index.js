import React from 'react';

import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';
import ChannelMessage , {Mention} from '../ChannelMessage/index';


const  ChannelData = () => {
  return (
      <>
        <Container>
            <Messages>
                <ChannelMessage     
                author="Usuário 2"
                date="25/06/2020"
                content="Mensagem exemplo 2" />

                <ChannelMessage 
                author="Usuário 5"
                date="25/06/2020"
                content={
                    <>
                        <Mention> @Matheus de Paula</Mention>, Exemplo de mensagem mencionada
                    </>
                }
                hasMention
                isBot
            />
            <ChannelMessage     
            author="Usuário 7"
            date="25/06/2020"
            content="Mensagem exemplo 7" />
            </Messages>

            <ChannelMessage     
            author="Usuário 3"
            date="25/06/2020"
            content="Mensagem exemplo 3" />

            <ChannelMessage     
            author="Usuário 2"
            date="25/06/2020"
            content="Mensagem exemplo 2" />

            <ChannelMessage     
            author="Usuário 9"
            date="25/06/2020"
            content={
                <>
                <Mention> @Usuario 7</Mention> Exemplo de mensagem mencionada 2
            </>

            }

            hasMention />

            <ChannelMessage     
            author="Usuário 6"
            date="25/06/2020"
            content="Mensagem exemplo 6" />
                

            <InputWrapper>
                <Input type="text" placeholder="Conversar com #chat livre"/>
                <InputIcon />
            </InputWrapper>

        </Container>

      </>
  )
}

export default ChannelData;