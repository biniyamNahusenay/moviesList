import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Component/Header/Header"
import Home from "./Component/Home/Home"
import MovieDetail from "./Component/MovieDetail/MovieDetail"
import Footer from "./Component/Footer/Footer"
import PageNotFound from "./Component/PageNotFound/PageNotFound"
function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
         <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/movie/:imdbId' element={<MovieDetail/>}/>
              <Route path='' element={<PageNotFound/>}/>
            </Routes>
         </div>
       <Footer/>
       </Router>
    </div>
  );
}

export default App;
