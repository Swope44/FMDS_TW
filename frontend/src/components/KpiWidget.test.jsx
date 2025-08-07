import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import KpiWidget from './KpiWidget'

test('renders provided title', () => {
  render(<KpiWidget title="Test KPI"><div>content</div></KpiWidget>)
  expect(screen.getByText('Test KPI')).toBeDefined()
})
