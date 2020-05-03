import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <div className='logo'>WatchList</div>
       <ul className="nav links">
         <li>
           <Link to="/" className="link">Home</Link>
         </li>
         <li>
           <Link to="/watches" className="link">Watches</Link>
         </li>
         <li>
           <Link to="/contact" className="link">Contact</Link>
         </li>
       </ul>
    </Container>
  );
}
