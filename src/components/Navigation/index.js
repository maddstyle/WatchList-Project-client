import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/watches">Watches</Link>
      <Link to="/contact">Contact</Link>
    </Container>
  );
}
