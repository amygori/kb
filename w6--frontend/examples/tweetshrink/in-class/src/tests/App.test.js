/* globals jest, test, expect */

import React from 'react'
import App from '../App'
import { mount } from 'enzyme'
import synonymSearch from '../synonymSearch'

jest.mock('../synonymSearch.js')

test('can search for synonyms', () => {
  const wrapper = mount(<App />)
  expect(wrapper.text()).toContain('Replace')

  wrapper.find('#synonym-search').simulate('click')
  expect(wrapper.text()).toContain('Replace "component" with "part"')
})
