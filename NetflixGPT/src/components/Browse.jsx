
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovie();//fetching the nowplaying movies and updating the store
  usePopularMovies();//fetching the popular movies and updating the store
  useTopRatedMovies();//fetching the toprated movies and updating the store
  useUpcomingMovies()//fetching the upcoming movies and updating the store
  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  );
};

export default Browse;
