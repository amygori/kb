/* globals describe, it, expect */

import Time from '../Time'

describe('Time', () => {
  it('should convert to a string', () => {
    let time
    time = new Time(0)
    expect(time.toString()).toBe('00:00:00')

    time = new Time(21600)
    expect(time.toString()).toBe('06:00:00')

    time = new Time(24303)
    expect(time.toString()).toBe('06:45:03')
  })
})
