import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  grid-template-areas: "logo nav";
  top: 0;
  height: 50px;
  width: 100vw;
  background-color: #282c34;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  .header-primary {
    display: flex;
    grid-area: logo;
    align-items: center;

    span {
      margin: 0 0 0 2rem;
      color: #fff;
      font-weight: bold;
    }
  }
  img {
    margin-left: 50px;
    height: 50px;
  }
`;


export const Navigation = styled.nav`
  display: flex;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-content: space-evenly;
  a {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    transition: 0.5s;
    text-decoration: none;
  }
  a:hover {
    transform: scale(1,1.1);
    color:rgb(219,112,147);
  }
  button {
  padding: 8px;
  outline: none;
  border: none;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  background-color:rgb(219,112,147);
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
button:active {
  transform: translateY(3px);
  box-shadow: 0px 2px 0px 0px rgba(255, 0, 0, 0.25);
}
button:hover {
  background-color: #ff1493;
}
`;
