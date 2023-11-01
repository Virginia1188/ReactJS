import MovieList from './components/MovieList';
import movies from './assets/movies';
import Timer from './components/Timer';
import Counter from './components/Counter';
import './App.css';


function App() {

  return (
    <div>
      <h1>My First Dynamic React App</h1>

      <Timer startTime={5}/>

      <Counter />

      <MovieList movies={movies} headingText='Movie List' />
    </div>
  );
}

export default App;
