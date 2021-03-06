import React from 'react'
import s, { css } from 'styled-components'
import { Nav } from '@/components/Nav'

export const Row = s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 99vh;

  &::after {
    content: '';
    clear: both;
    display: table;
  }
`

const convertWidth = (numCols: number) => {
  return `width: ${(numCols / 12) * 100}%;`
}

interface IColumnProps {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  center?: boolean
  vertical?: boolean
  home?: boolean
}

export const Column = s.div<IColumnProps>(
  ({ xs, sm, md, lg, center, vertical, home }) => css`
    display: ${vertical ? 'inline-block' : 'flex'};
    ${xs ? convertWidth(xs) : 'width: 100%;'}
    ${center ? 'margin: 0 auto;' : 'float: left;'}
    ${home && 'display: inline-block;'}

    @media only screen and (min-width: 768px) {
      ${sm && convertWidth(sm)}
      display: ${vertical ? 'inline-block' : 'flex'};
    }

    @media only screen and (min-width: 992px) {
      ${md && convertWidth(md)}
    }

    @media only screen and (min-width: 1200px) {
      ${lg && convertWidth(lg)}
    }
  `
)

interface iGroupProps {
  horizontal?: boolean // defaults to vertical
  alignItems?: string
  justifyContent?: string
  margin?: string
  padding?: string
}

/**
 * Div wrapper for a group of elements.
 */
export const Group = s.div<iGroupProps>(
  ({ horizontal, alignItems, justifyContent, margin, padding }) => css`
    display: ${horizontal ? 'flex' : 'inline-block'};
    width: 100%;
    ${justifyContent && `justify-content: ${justifyContent};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${margin && `margin: ${margin};`}
    ${padding && `padding: ${padding};`}
  `
)

export const Container = ({ children }: { children: React.ReactNode }) => (
  <>
    <Column xs={10} sm={8} md={8} lg={8} center>
      <Group>
        <Nav />
        {children}
      </Group>
    </Column>
  </>
)
