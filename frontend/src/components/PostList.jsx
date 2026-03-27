import { useEffect, useState } from "react";
import axios from "axios";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); // current page
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = () => {
    axios
      .get(`http://localhost:3000/api/posts?page=${page}`)
      .then((res) => {
        setPosts(res.data.data);
        setTotalPages(res.data.totalPages);
      });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Latest Posts</h2>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.content}</p>

            {post.image && (
              <div className="rounded-lg overflow-hidden">
                <img
                  src={`http://localhost:3000/uploads/${post.image}`}
                  alt="Post image"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 🔥 Pagination buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
        >
          Previous
        </button>

        <span className="px-4 py-2 text-gray-600">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PostList;