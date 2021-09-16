/* eslint-disable no-undef */
import { useSelector } from "react-redux";
import Movie from "./components/Movie";
import DetailsMovie from './components/DetailsMovie';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { utilsChangeDash } from "./utils/utils";

const App = () => {
  const titleMovie = useSelector((state)=> state.movie.DetailsMovie.Title)
  const convertedTitleMovie = titleMovie ? utilsChangeDash(titleMovie) : "";
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Movie />
        </Route>
        <Route exact path={`/${convertedTitleMovie}`}>
          <DetailsMovie />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
