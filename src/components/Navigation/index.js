import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Content } from './styles'
import { FiMail } from 'react-icons/fi'

export default function Header() {
  return (
    <Container>
      <aside className="logo">WatchList</aside>
      <Content>
        <aside>
          <Link to="/watches">Watches</Link>
          <Link to="/contact">
            <FiMail size={20} />
            Contact
          </Link>
        </aside>
      </Content>
      <button type="button">Logout</button>
    </Container>
  )
}
