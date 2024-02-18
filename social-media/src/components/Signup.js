import styled from "styled-components";

const Signup = (props) => {
  return (
    <Container>

        <Logo>
          <a href="/">
            <img src="/images/logo-white2.png" height = "38vh" alt="" />
          </a>
        </Logo>

        <Main>
        <Heading>
            Join as a Founder or Investor
        </Heading>

        <Elements>
            <Founder>
                I'm a startup founder, looking to get some investors.
            </Founder>

            <Investor>
                I'm an investor, looking to connect with startups.

            </Investor>
        </Elements>
    <Account>
            Already have an account?<span><a href = "/">Log In</a></span>         
          </Account>
    </Main>

    </Container>
  );
};

const Container = styled.div `
    background-color : #ffeae5;
    height : 100%
    `;
    
    const Main = styled.div `
    display : flex;
    flex-direction : column;
    // border: 3px solid red;
    height : 91vh;
    // margin: auto;
    // width: 50%;
    justify-content : center;
    background-image: url("/images/login-hero.svg");
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover;

    `;
const Logo = styled.div `
    // border: 3px solid blue;
    padding-top : 1vh;
    
`;
const Heading = styled.div `
    text-align: center;
    // color : #f5f5f5;
    // border: 3px solid green;
    margin-top: 20vh;
    // width: 50%;
    padding-bottom : 10vh;
    font-size : 8vh;
    font-weight : 100;

    `;
    const Founder = styled.button`
    display: flex;
    justify-content: center;
    background-color: #ffd7d7;
    align-items: center;
    height: 56px;
    width: 20%;
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    padding : 7vh;
    
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    opacity : 100%;
    &:hover {
        background-color: #ffafaf;
        color: rgba(0, 0, 0, 0.75);
    }
    & > img {
        padding : 1vh;
    } 
    `;
    const Investor = styled.button`
    display: flex;
    justify-content: center;
    background-color: #ffd7d7;
    align-items: center;
    height: 56px;
    width: 20%;
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
    padding : 7vh;
    margin-bottom : 10vh;
    margin-left : 10vh;

  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: #ffafaf;
    color: rgba(0, 0, 0, 0.75);
  }
  & > img {
    padding : 1vh;
  } 
`;
const Elements = styled.div `
    // border: 3px solid blue;
    display : flex;
    justify-content : center ;
    margin-bottom : 15vh;
    
`;

const Account = styled.div `
  margin-top : 0;
//   color : #f5f5f5;
//   text-decoration : none;
font-size : 3vh;
  z-index : 100;
`;

export default Signup;
