import React from 'react';

import {Container, HashTagIcon, InviteIcon, SettingsIcon} from './styles';


const  ChannelButton = ({channelName, selected}) => {
  return (
      <>
        <Container className={selected ? 'active' : ''}>
            <div>
                <HashTagIcon />
                <span>{channelName}</span>
            </div>
            <div>
                <p>
                    <InviteIcon />
                </p>
                <p>
                    <SettingsIcon />
                </p>
            </div>
        </Container>


      </>
  )
}

export default ChannelButton;