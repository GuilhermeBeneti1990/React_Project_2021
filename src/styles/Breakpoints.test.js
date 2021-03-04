import { breakAt, BreakpointSizes } from './Breakpoints'

test.each([
  [BreakpointSizes.sm],
  [BreakpointSizes.md],
  [BreakpointSizes.lg],
  [BreakpointSizes.xl]
])('break at s%ipx', (size) => {
  expect(breakAt(BreakpointSizes.sm)).toEqual(
    `@media (min-width: ${BreakpointSizes.sm}px)`
  )
})
