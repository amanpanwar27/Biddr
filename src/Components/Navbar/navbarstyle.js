import styled from "styled-components";
const NavbarContainer = styled.div`
  height: 50px;
  position:fixed;
  background-color:white;
  overflow:hidden;
  box-shadow: 0 4px 4px -3px rgba(0,0,0,.2);
  width:100vw;
  &>div>img{
    height:55px;
    width:100px;
    margin-left:5px;
    margin-top:-3px;
    cursor:pointer;
  }
  &>span{
    position:absolute;
    top:12px;
    &>ul{
        display:flex;
        gap:25px;
        
        li{
            font-weight:bolder;
            cursor:pointer;
        }
        li:hover{
            text-decoration:underline;
        }
    }
    left:80%;
    @media only screen and (max-width: 768px) {
        left:40%;
        white-space:nowrap;
        overflow: hidden;
    }
  }
`;

export default NavbarContainer;
