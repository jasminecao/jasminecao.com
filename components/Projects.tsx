import React from 'react'
import s from 'styled-components'
import { Column, Group } from '@/components/Layout'
import Image from 'next/image'

const Card = s.div`
  border-radius: 10px;
  box-shadow: 0 0 8px 8px #d9d9d966;
  padding: 1rem;
  background-color: #fff;
  max-height: 75vh;
  width: 100%;
`

export const ProjectCard = ({
  children,
  href,
  img,
}: {
  children: React.ReactNode
  href: string
  img?: string
}) => {
  return (
    <Column sm={12} md={6} lg={6} vertical style={{ padding: '0.75rem' }}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <Card>
          {img && (
            <Image
              alt="prop"
              src={`/projects/${img}`}
              width={'100%'}
              height={'66%'}
              layout={'responsive'}
            />
          )}

          {children}
        </Card>
      </a>
    </Column>
  )
}
