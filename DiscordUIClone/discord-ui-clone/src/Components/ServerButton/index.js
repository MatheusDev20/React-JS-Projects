import React from 'react';


import {Button} from './styles';


const ServerButton = ({isHome,hasNotifications,mentions,selected}) => {
    return (
        <>
            <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
            >
            </Button>
        </>
    )
}
export default ServerButton;
