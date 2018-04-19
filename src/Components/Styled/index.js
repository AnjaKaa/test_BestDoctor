import styled from 'styled-components';
export const LayoutWrap = styled.div`
  margin: auto;
  padding: 20px;
  width: 700px;
  height: 400px;
  background-color: #ccc;
`;

export const Layout = styled.div`
  display: flex;
  min-height: 100%;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 200px;
  max-width: 200px;
  font-size: 25px;
  padding: 40px 0 15px;
  margin: auto;
`;

export const LinkNav = styled.div`
  display: block;
  font-family: 'Marmelad';
  cursor: pointer;
  color: white;
  margin: 0 8px;
  background: ${({ selected }) => (selected ? '#74cac2' : 'none')};

  & a {
    display: block;
    color: #fff;
    text-decoration: none;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  margin: auto;
`;

export const ContainerWrap = styled.div`
  display: block;
  text-align: center;
`;

export const BlockCenter = styled.div`
  text-align: crnter;
  margin: auto;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: auto;
`;

export const Title = styled.span`
  font-size: 40px;
  margin: 30px;
  min-width: 70px;
  text-align: center;
`;
