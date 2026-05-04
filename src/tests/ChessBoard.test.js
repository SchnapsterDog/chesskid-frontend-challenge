import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import ChessBoard from '../components/ChessBoard.vue'

describe('ChessBoard', () => {
  it('renders a full 8x8 chessboard', () => {
    render(ChessBoard)

    expect(screen.getAllByRole('gridcell')).toHaveLength(64)
  })

  it('highlights clicked squares and logs them in click order', async () => {
    const user = userEvent.setup()

    render(ChessBoard)

    await user.click(screen.getByRole('gridcell', { name: 'Square a8' }))
    await user.click(screen.getByRole('gridcell', { name: 'Square h1' }))

    expect(screen.getByRole('gridcell', { name: 'Square a8' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('gridcell', { name: 'Square h1' })).toHaveAttribute('aria-pressed', 'true')

    const logItems = screen.getAllByRole('listitem')

    expect(logItems[0]).toHaveTextContent('#1')
    expect(logItems[0]).toHaveTextContent('a8')
    expect(logItems[1]).toHaveTextContent('#2')
    expect(logItems[1]).toHaveTextContent('h1')
  })

  it('un-highlights an already highlighted square without adding a new log entry', async () => {
    const user = userEvent.setup()

    render(ChessBoard)

    const square = screen.getByRole('gridcell', { name: 'Square e4' })

    await user.click(square)
    await user.click(square)

    expect(square).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getAllByRole('listitem')).toHaveLength(1)
    expect(screen.getByText('1 entry')).toBeInTheDocument()
  })

  it('adds a new log entry when a square is highlighted again', async () => {
    const user = userEvent.setup()

    render(ChessBoard)

    const square = screen.getByRole('gridcell', { name: 'Square e4' })

    await user.click(square)
    await user.click(square)
    await user.click(square)

    expect(square).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
    expect(screen.getByText('2 entries')).toBeInTheDocument()
  })
})
