import PostsList from "./PostsList";
import useFetch from "./useFetch";

function Home() {
  const [posts, isLoading] = useFetch("http://localhost:8000/posts");

  return (
    <div className="Home">
      {posts && <PostsList posts={posts} />}
      {isLoading && <div>Loading...</div>}
    </div>
  );
}

export default Home;
