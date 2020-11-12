import styled, { css } from 'styled-components';
import { shade } from 'polished';
import SignInBackground from '../../assets/sign-in-background.png';

interface ButtonProps {
    hasColor: string;
}
export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    img {
        width: 70px;
        margin-top: 65px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-weight: bold;
        margin-top: 65px;
    }
    form {
        margin-top: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        width: 300px;

        .social-links {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
        .keep-logged {
            display: flex;
            margin-top: 15px;
        }
        .keep-logged > p {
            color: #666464;
            font-weight: 500;
            font-size: 13px;
            margin-left: 8px;
            cursor: pointer;
        }
        input {
            width: 100%;
            background: #ffe6e6;
            border: 0;
            outline: 0;
            border-radius: 5px;
            padding: 15px;
            font-size: 14px;
            & + input {
                margin-top: 15px;
            }
            &::placeholder {
                color: #666464;
                font-weight: 500;
            }
        }
    }
    .recovery-links {
        width: 100%;
        display: flex;
        width: 350px;
        flex-direction: column;
        margin-top: 50px;
        align-items: center;
    }
    .recovery-links > div > a {
        font-size: 13px;
        color: #666464;
        font-weight: 500;
        text-decoration: none;
    }
`;
export const Background = styled.div`
    flex: 1;
    background: url(${SignInBackground}) no-repeat center;
    background-size: cover;
`;

export const Button = styled.div`
    height: 70px;
    width: 70px;
    border-radius: 25px;
    background: #ff4040;
    margin-top: 30px;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background: ${shade(0.2, '#ff4040')};
    }
`;

export const SocialIcon = styled.button<ButtonProps>`
    width: 30%;
    height: 35px;
    ${props =>
        props.hasColor === 'blue'
            ? css`
                  background: #1874cd;
                  &:hover {
                      background: ${shade(0.2, '#1874cd')};
                  }
              `
            : css`
                  background: #000;
                  &:hover {
                      background: #080808;
                  }
              `}
    border-radius: 5px;
    border: 0;
    outline: 0;
`;

export const GoogleIcon = styled.button`
    width: 30%;
    height: 35px;
    border-radius: 5px;
    border: 2px solid #f0f0f0 !important;
    background: #fff;
    border: 0;
    outline: 0;
    &:hover {
        background: #f0f0f0;
    }
`;
