import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <div className='logo'>WatchList</div>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/watches">Watches</Link>
         </li>
         <li>
           <Link to="/contact">Contact</Link>
         </li>
       </ul>
    </Container>
  );
}
