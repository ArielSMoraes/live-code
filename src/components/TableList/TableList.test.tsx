import { describe, expect, it } from 'vitest'
import {render, screen} from '@testing-library/react'
import TableList from './TableList'
import { headers, rows } from './mock'

describe('TableList', () => {
  it('should render table with header', () => {
    render(<TableList headers={headers} rows={[]} />)

    const label1 = screen.queryByText(headers[0].label)
    const label2 = screen.queryByText(headers[1].label)
    const label3 = screen.queryByText(headers[2].label)
    const label4 = screen.queryByText(headers[3].label)
    const label5 = screen.queryByText(headers[4].label)

    expect(label1).toBeInTheDocument()
    expect(label2).toBeInTheDocument()
    expect(label3).toBeInTheDocument()
    expect(label4).toBeInTheDocument()
    expect(label5).toBeInTheDocument()
  })
})
