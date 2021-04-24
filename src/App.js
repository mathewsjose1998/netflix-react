import logo from "./logo.svg";
import "./App.css";
import Row from "./Row";
import request from "./requests";

function App() {
  return (
    <div className="App">
      <h2>yoyoyoyo</h2>

      <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} />
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending} />
      <Row title="TopRated" fetchUrl={request.fetchTopRated} />
      <Row title="RomanceMovies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="ActionMovies" fetchUrl={request.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={request.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
