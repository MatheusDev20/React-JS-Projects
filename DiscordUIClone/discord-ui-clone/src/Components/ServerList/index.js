import React from 'react';

import { Container } from './styles';

import {Separator} from './styles';

import ServerButton from '../ServerButton/index';

const ServerList = ()  => {
  return (
    <Container>
        <ServerButton isHome={true}/>

        <Separator />

        <ServerButton/>
        <ServerButton/>
        <ServerButton hasNotifications={true}/>
        <ServerButton mentions={32} />
        <ServerButton selected={true}/>
        <ServerButton/>
        <ServerButton/>
        <ServerButton mentions={12}/>
        <ServerButton/>
        <ServerButton/>
        <ServerButton mentions={10}/>
        <ServerButton/>
        <ServerButton/>
        <ServerButton/>
        <ServerButton/>

    </Container>
  )
}

export default ServerList;