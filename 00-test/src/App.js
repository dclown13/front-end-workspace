import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const Home = ({list, deleteMovies}) => {
  const onClick = (event) => {
    deleteMovies(event.target.id);
  };
  
  return (
    <table>
      <thead>
        <h1>Movie</h1>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Release Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.genre}</td>
            <td>{item.releaseDate}</td>
            <td>
              <button onClick={onClick} id={item.id}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Create = ({addMovies}) => {
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const genre = event.target.genre.value;
    const releaseDate = event.target.releaseDate.value;
    addMovies(title, genre, releaseDate);
    navigate("/");
  };
  
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" id="title" name="title" placeholder="Input movie title"/>
      </div>
      <div>
        <input type="text" id="genre" name="genre" placeholder="Input movie genre"/>
      </div>
      <div>
        <label htmlFor="releaseDate">출시일 : </label>
        <input type="date" id="releaseDate" name="releaseDate"/>
      </div>
      <input type="submit" value="Add Movie"/>
    </form>
  );
};

const App = () => {
  const [id, setId] = useState(4);
  const [movies, setMovies] = useState([
    {
      id: 1, 
      title: 'Movie 1', 
      genre: "Drama",
      releaseDate: "2022-01-01",
    },
    {
      id: 2, 
      title: 'Movie 2', 
      genre: "Action",
      releaseDate: "2022-02-01",
    },
    {
      id: 3, 
      title: 'Movie 3', 
      genre: "Comedy",
      releaseDate: "2022-03-01",
    }
  ]);

  const addMovies = (title, genre, releaseDate) => {
    const newMovies = {id, title, genre, releaseDate};
    setMovies([...movies, newMovies]);
    setId(id + 1);
  };

  const deleteMovies = (id) => {
    const newList = movies.filter((item) => item.id !== parseInt(id));
    setMovies(newList);
  };

  return(
  <BrowserRouter>
  <div><Link to="/">List</Link></div>
  <div><Link to="/create">Add New Movie</Link></div>
  <h1>Create Movie</h1>
    <Routes>
      <Route path="/" element={<Home list={movies} deleteMovies={deleteMovies}/>}/>
      <Route path="/create" element={<Create addMovies={addMovies}/>}/>
    </Routes>

  </BrowserRouter>);
}

export default App;