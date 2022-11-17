import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function PostDetails() {
  const { id } = useParams();
  const [post, isLoading] = useFetch("http://localhost:8000/posts/" + id);
  const navigate = useNavigate();

  function handleRemove(id) {
    fetch("http://localhost:8000/posts/" + id, {
      method: "DELETE",
    }).then(() => navigate("/"));
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}

      {post && (
        <div className="post-details">
          <div className="post-author">
            <span className="author-profile"></span>
            {post.author}
          </div>
          <p className="post-body">{post.body}</p>
          <button className="post-delete" onClick={() => handleRemove(post.id)}>
            Delete
          </button>
        </div>
      )}
    </>
  );
}

export default PostDetails;
