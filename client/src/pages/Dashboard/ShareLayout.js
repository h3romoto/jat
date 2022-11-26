import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout"

const ShareLayout = () => {
  return <Wrapper>
    <Outlet />
  </Wrapper>
};
export default ShareLayout;
