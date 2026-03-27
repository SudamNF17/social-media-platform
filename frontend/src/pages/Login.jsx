import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:3000/api/auth/login", {
      username
    });

    localStorage.setItem("token", res.data.token);
    alert("Login success");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;