import React from 'react'
import { Column, Row, Group } from '@/components/Layout'
import Nav from '@/components/Nav'

export const Home = ({ children }: { children: React.ReactNode }) => (
  <div className="home">
    <Row>
      <Column xs={10} sm={8} md={6} lg={6} center>
        <Nav />
        <Group padding="0 2rem">{children}</Group>
      </Column>
    </Row>
  </div>
)
