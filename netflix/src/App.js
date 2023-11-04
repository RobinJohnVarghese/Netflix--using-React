import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import "./App.css"
import RowPost from "./components/RowPost/RowPost";
import { originals,action,comedyMovies,horrorMovies,romanceMovies,documentaries} from "./urls";
function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals' />
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedyMovies} title='ComedyMovies' isSmall/>
      <RowPost url={horrorMovies} title='HorrorMovies' isSmall/>
      <RowPost url={romanceMovies} title='RomanceMovies' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
