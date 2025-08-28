
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMovie()
  return (
    <div>
      <Header></Header>
    </div>
  );
};

export default Browse;
