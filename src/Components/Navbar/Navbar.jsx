import NavbarContainer from "./navbarstyle";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <div>
          <img src="/images/logo.png" />
        </div>
        <span>
          <ul>
            <li>About us</li>
            <li>How it works</li>
          </ul>
        </span>
      </NavbarContainer>
    </>
  );
};
export default Navbar;
