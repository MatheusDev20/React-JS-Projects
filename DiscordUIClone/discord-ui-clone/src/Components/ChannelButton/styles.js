import styled from 'styled-components';

import { Hashtag } from 'styled-icons/heroicons-outline';
import {PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    padding: 5px 3px;
    border-radius: 5px;
    background-color: transparent;
    transition: background-color .2s;
    > div > p {
        display: none;
    }
    > div {
        display: flex;
        align-items: center;

    }
    > div > span {
        color: var(--senary);
        margin-left: 5px;
    }
    &:hover, &:active {
        background-color: var(--quinary);
        div > p {
            display: inline;
        }
    }
   
`
export const HashTagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;
    color: var(--symbol);
    cursor: pointer;
    transition: color .2s;

    &:hover {
        color: var(--white);

    }
`
export const InviteIcon = styled(PersonAdd)`
    width: 18px;
    height: 18px;
    color: var(--symbol);
    cursor: pointer;
    transition: color .2s;

    &:hover {
        color: var(--white);
}
`
export const SettingsIcon = styled(Settings)`
    width: 18px;
    height: 18px;
    color: var(--symbol);
    cursor: pointer;
    transition: color .2s;
    margin-left:6px;

    &:hover {
        color: var(--white);
}
`