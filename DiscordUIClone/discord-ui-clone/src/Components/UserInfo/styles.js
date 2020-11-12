import styled from 'styled-components';


import { Mic, Headset, Settings} from 'styled-icons/material';



export const Container = styled.div`
    grid-area: UI;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--quaternary);
    box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
`
export const Profile = styled.div`
   display: flex;
   align-items: center;
`
export const Avatar = styled.div`
    display:flex;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--gray);
`
export const UserData = styled.div`
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 13px;
        color:var(--white);
        display: block;
    }
    > span {
        color: var(--gray);
        font-size: 13px;
    }
`
export const Icons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const MicIcon = styled(Mic)`
    width: 19px;
    height: 19px;
    color: var(--white);
    opacity:.7;
    cursor: pointer; 
    &:hover {
        opacity: 1;
    }
`

export const HeadPhoneIcon = styled(Headset)`
    width: 19px;
    height: 19px;
    color: var(--white);
    opacity:.6;
    margin-left: 4px;
    cursor: pointer; 
    &:hover {
        opacity: 1;
    }
`

export const SettingsIcon = styled(Settings)`
width: 19px;
    height: 19px;
    color: var(--white);
    opacity:.7;
    margin-left: 6px;
    cursor: pointer; 
    &:hover {
        opacity: 1;
    }
`

