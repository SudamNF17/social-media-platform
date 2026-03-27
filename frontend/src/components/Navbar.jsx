function Navbar() {
  return (
    <nav className="bg-primary-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SocialConnect</h1>
        <div className="space-x-4">
          <button className="bg-primary-700 hover:bg-primary-800 px-4 py-2 rounded-lg transition-colors">
            Home
          </button>
          <button className="bg-primary-700 hover:bg-primary-800 px-4 py-2 rounded-lg transition-colors">
            Profile
          </button>
          <button className="bg-secondary-600 hover:bg-secondary-700 px-4 py-2 rounded-lg transition-colors">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;