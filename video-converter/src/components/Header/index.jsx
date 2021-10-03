import { Container, Navigation } from './styles';
import logo from '../../assets/video-player.png';

const Header = () => {
  return (
    <Container>
      <div className="header-primary">
        <img src={logo} alt="video-editor" />
        <span>Online video converter</span>
      </div>
      <Navigation>
        <a href="/">Anchor 1</a>
        <a href="/">Anchor 2</a>
        <a href="/">Anchor 3</a>
        <button>Sign in</button>
      </Navigation>
    </Container>

  )
}

export default Header