import LandingContainer from "./landingstyle";
import { Button } from "@mui/material";
const Landing = () => {
  return (
    <>
      <LandingContainer>
        <div>
          <h1 style={{ color: "white" }}>WELCOME TO </h1>
          <h1 style={{ borderColor: "red", color: "#47c1ff" }}> BIDDr</h1>
        </div>
        <span>
          <h1>Start bidding on an Item</h1>
          <h1>Or Add Your own Item.</h1>
        </span>
        <span className="joinbtn">
          <Button
            variant="contained"
            onClick={() => {
              window.location.href = "/signup";
            }}
          >
            Join Now
          </Button>
        </span>
      </LandingContainer>
    </>
  );
};
export default Landing;
