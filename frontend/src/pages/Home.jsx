import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";

function Home() {
  return (
    <div className="space-y-8">
      <CreatePost />
      <PostList />
    </div>
  );
}

export default Home;