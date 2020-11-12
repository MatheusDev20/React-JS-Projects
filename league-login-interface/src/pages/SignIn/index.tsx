import React from 'react';
import { GrCheckbox } from 'react-icons/gr';
import {
    AiOutlineArrowRight,
    AiFillFacebook,
    AiFillApple,
} from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import {
    Container,
    Content,
    Background,
    Button,
    SocialIcon,
    GoogleIcon,
} from './styles';
import logo from '../../assets/logo.png';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logo} alt="League of Legends" />
            <h2>Fazer Login</h2>

            <form>
                <input placeholder="Nome de Usuário" />
                <input placeholder="Senha" type="Password" />
                <div className="social-links">
                    <SocialIcon hasColor="blue">
                        <AiFillFacebook style={{ color: 'white' }} />
                    </SocialIcon>

                    <GoogleIcon>
                        <FcGoogle size={20} />
                    </GoogleIcon>
                    <SocialIcon hasColor="black">
                        <AiFillApple size={20} style={{ color: 'white' }} />
                    </SocialIcon>
                </div>
                <div className="keep-logged">
                    <GrCheckbox style={{ border: 'none' }} />
                    <p>Manter Login</p>
                </div>
                <Button>
                    <AiOutlineArrowRight size={30} style={{ color: '#fff' }} />
                </Button>
            </form>
            <div className="recovery-links">
                <div>
                    <a href="forgot">NÃO CONSEGUE INICIAR SESSÃO</a>
                </div>
                <div>
                    <a href="signUp">CRIAR CONTA</a>
                </div>
            </div>
        </Content>

        <Background />
    </Container>
);

export default SignIn;
