import Header from "../Header";
import { Container, Content } from './styles';
const Layout = (props) => {
  return (
      <Container>
        <Header />
        <Content>
          {props.children}
        </Content>
      </Container>
  )
}


export default Layout;