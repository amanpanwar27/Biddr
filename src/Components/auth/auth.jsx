import AuthContainer, { Auths, Slider } from "./authstyle";
import Carousel from "react-material-ui-carousel";
import Comp1 from "../slidingcomps/comp1";
import Comp2 from "../slidingcomps/comp2";
import Comp3 from "../slidingcomps/comp3";
import Comp4 from "../slidingcomps/Comp4";
import { DesktopView } from "react-device-detector";
const Auth = () => {
  return (
    <>
      <AuthContainer>
        <DesktopView>
          <Slider>
            <Carousel>
              <Comp1 />
              <Comp2 />
              <Comp3 />
              <Comp4 />
            </Carousel>
          </Slider>
        </DesktopView>
        <Auths></Auths>
      </AuthContainer>
    </>
  );
};
export default Auth;
