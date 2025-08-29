
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovie()
  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
    </div>
  );
};

export default Browse;
