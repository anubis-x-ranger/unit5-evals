import { Link } from "react-router-dom";
import styled from "styled-components"
import { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext'
export const Navbar = () => {
  const {isAuth}=useContext(AuthContext);
  // console.log(isAuth);
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
      {isAuth ? <Link className="nav-logout" to="/logout" >
         <Button>Logout</Button>
      </Link>: <Link className="nav-login" to="/login">
         <Button>Login</Button>
      </Link>}
      {/* <Link className="nav-logout" to="/logout" >
         <Button>Logout</Button>
      </Link>

      <Link className="nav-login" to="/login">
         <Button>Login</Button>
      </Link> */}
    </div>
  );
};

const Button=styled.button`
  color:white;
  margin:10px 10px;
  background:aqua;
`