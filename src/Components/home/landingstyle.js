import styled from "styled-components";
const LandingContainer = styled.div`
background-image:url('/images/landing.png');
width:100vw;
height:97vh;
background-position:bottom;
background-size:cover;  
@media only screen and (max-width: 768px) {
    background-position:right;
}
.joinbtn{
top:290px;
right:27.5%;
@media only screen and (max-width: 768px) {
    top:450px;
}
}

&>span{
    position:absolute;
    right:100px;
    top:180px;
    font-size:17px;
    @media only screen and (max-width: 768px) {
        top:250px;
        flex-direction:column;
        right:30px;
        left:15px;
        gap:0px;
    }
}
&>div{
    position:absolute;
    right:60px;
    top:100px;
    font-size:28px;
    display:flex;
    gap:30px;
    h1:last-child{
        text-shadow: -2px 0 red, 0 2px red, 2px 0 red, 0 -2px red;
    }
    @media only screen and (max-width: 768px) {
        flex-direction:column;
        right:40px;
        gap:0px;
    }
   
}
`;
export default LandingContainer;
