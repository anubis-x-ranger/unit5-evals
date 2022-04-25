import { Link } from "react-router-dom";
import styled from "styled-components"
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        <Button>Home</Button>
      </Link>
      <Link className="nav-list" to="/employees">
       <Button>Employee List</Button>
      </Link>
      <Link className="nav-admin" to="/admin">
         <Button>Admin</Button>
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}
      <Link className="nav-logout" to="/logout">
         <Button>Logout</Button>
      </Link>

      <Link className="nav-login" to="/login">
         <Button>Login</Button>
      </Link>
    </div>
  );
};

const Button=styled.button`
  color:white;
  margin:10px 10px;
  background:aqua
`