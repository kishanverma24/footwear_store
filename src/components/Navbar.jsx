const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="./brand_logo.png" alt="logo" />
      </div>
      <ul className="flex ">
        <li href="#">Men</li>
        <li href="#">Women</li>
        <li href="#">Catalogue</li>
        <li href="#">About</li>
      </ul>

      <button>login</button>
    </nav>
  );
};

export default Navbar;
