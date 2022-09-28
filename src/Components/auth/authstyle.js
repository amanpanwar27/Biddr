import styled from "styled-components";
const AuthContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Slider = styled.div`
  width: 35%;
  height: 100vh;
  padding: 20px;
  padding-top: 80px;
//   border-left: 1px solid grey;
  box-shadow: 0 0.5em .5em 0px rgba(0, 0, 0, .25);
  background-color: #d5fefd;
background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 74%);

`;
export const Auths = styled.div`
  width: 65%;
  height: 100vh;
  background-color: #d5fefd;
  background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 74%);
  
  
`;
export default AuthContainer;
