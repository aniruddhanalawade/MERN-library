import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import AddBook from './Components/AddBook';
import Header from './Components/Header';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import BookDetails from './Components/Book/BookDetails';
import Books from './Components/Book/Books';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Signin from './Components/Signin';

function App() {
  return (
    <>
    <Router basename='/MERN-library'>
      <Header />
      <Routes>
        <Route path='/MERN-library' element={<Home/>} />
        <Route path='/add' element={<AddBook/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/books/:id' element={<BookDetails/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;