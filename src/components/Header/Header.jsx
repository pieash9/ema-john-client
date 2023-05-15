import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const handleLogOut =() =>{
    logOut()
    .then(result=> console.log(result.user))
    .catch(error => console.log(error))
  }
  return (
    <div>
      <nav className="bg-slate-900 flex justify-between px-20 items-center py-4">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="text-white flex gap-10">
            <Link className="hover:text-orange-600" to="/">Shop</Link>
            <Link className="hover:text-orange-600" to="/orders ">Orders </Link>
            <Link className="hover:text-orange-600" to="/inventory">Inventory</Link>
            <Link className="hover:text-orange-600" to="/login">Login</Link>
            <Link className="hover:text-orange-600" to="/signup">Sign Up</Link>
            {user && <span>Welcome, {user.email}<button onClick={handleLogOut} className="btn btn-error btn-xs ml-2">Logout</button></span> }
        </div>
      </nav>
    </div>
  );
};

export default Header;
