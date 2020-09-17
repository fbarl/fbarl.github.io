import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 50px auto;
  text-align: center;
`;

const AppContainer = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.normal};
  display: inline-block;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.huge};

  small {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;

const SlothImage = styled.img.attrs({
  src: "../sloth.png",
})`
  margin-bottom: 20px;
  width: 300px;
`;

const Footer = styled.div``;

const FooterItem = styled.span`
  padding: 7px;
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.darkGray};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;

class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <AppContainer>
          <Header>
            Filip Barl{" "}
            <small>
              <Link href="https://github.com/fbarl">@fbarl</Link>
            </small>
          </Header>
          <SlothImage />
          <Footer>
            <FooterItem>
              <Link href="https://github.com/fbarl">[ github ]</Link>
            </FooterItem>
            <FooterItem>
              <Link href="mailto:filip.barl@gmail.com">[ email ]</Link>
            </FooterItem>
          </Footer>
        </AppContainer>
      </AppWrapper>
    );
  }
}

export default App;
