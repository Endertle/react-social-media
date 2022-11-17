import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
