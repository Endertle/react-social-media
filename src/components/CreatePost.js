import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handlePost(e) {
    e.preventDefault();

    const post = { author, body };

    setIsLoading(true);

    setTimeout(() => {
      fetch("http://localhost:8000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      }).then(() => {
        console.log("added");
        setIsLoading(false);
        navigate("/");
      });
    }, 1000);
  }

  return (
    <div className="create-post">
      <form onSubmit={handlePost}>
        <label>Author: </label>
        <input
          type="text"
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Text: </label>
        <textarea required onChange={(e) => setBody(e.target.value)}></textarea>
        <button disabled={isLoading}>Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
