import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Popular from "./pages/Popular";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import MovieInnerPage from "./pages/MovieInnerPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movie" element={<Outlet />}>
            <Route path=":movieId" element={<MovieInnerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
