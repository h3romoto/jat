import main from "../assets/images/main-alternative.svg";
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from "../components";
import {Link} from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Next level meh bruh messenger bag, vape neutra salvia readymade.
            Kombucha vice man bun godard forage flexitarian polaroid blog
            hashtag keffiyeh selvage franzen keytar four loko. Hell of
            sustainable echo park cornhole post-ironic chicharrones taiyaki
            try-hard cray jianbing intelligentsia live-edge. Cardigan gastropub
            selfies wayfarers ennui. Gluten-free butcher YOLO sriracha unicorn
            scenester. Chicharrones quinoa XOXO, semiotics adaptogen iPhone
            hammock hella vegan DIY you probably haven't heard of them ugh fit
            trust fund af. Normcore slow-carb echo park asymmetrical man bun
            health goth. Neutra hammock food truck, flexitarian art party
            whatever next level taiyaki. DIY cronut activated charcoal gatekeep
            bruh cold-pressed typewriter literally photo booth blog helvetica
            freegan. Polaroid YOLO banjo cloud bread, leggings DSA everyday
            carry gastropub retro tilde humblebrag.
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="jat-main-img" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;

