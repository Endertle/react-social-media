import { Link } from "react-router-dom";

function PostsList({ posts }) {
  let newPosts = posts;
  newPosts.sort((a, b) => (a.id > b.id ? -1 : 1));

  return (
    <div className="post-list">
      {newPosts.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`} className="link">
          <div className="post">
            <div className="post-author">
              <span className="author-profile"></span>
              {post.author}
            </div>
            <p className="post-body">{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostsList;
