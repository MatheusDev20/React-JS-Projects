import React from 'react';

import {Container,Role,User,Avatar} from './styles';

const UserRow = ({nickname, isBot}) => {
    return (

        <User>
            <Avatar className={ isBot ? 'bot' : ''}/>
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>

    )
}
const  ServerName = () => {
  return (
      <>
        <Container>

            <Role>Disponível - 1</Role>
            <UserRow nickname="Matheus de Paula" />
            <Role>Offline - 1</Role>
            <UserRow nickname="Bot Ativo 1" isBot />
            <UserRow nickname="Usuário 1" />
            <UserRow nickname="Usuário 2" />
            <UserRow nickname="Usuário 3" />
            <UserRow nickname="Bot Ativo 2" isBot/>
            <UserRow nickname="Usuário 5" />
            <UserRow nickname="Usuário 6" />
            <UserRow nickname="Usuário 7" />
            <UserRow nickname="Bot Ativo 3" isBot/>
            <UserRow nickname="Usuário 9" />
            <UserRow nickname="Usuário 10" />
        </Container>


      </>
  )
}

export default ServerName;