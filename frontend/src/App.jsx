import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Login />
        <hr className="my-8 border-gray-300" />
        <Home />
      </main>
    </div>
  );
}

export default App;