import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, FilmsPage, SingleFilmPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="films" element={<FilmsPage />} />
        <Route path="films/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;