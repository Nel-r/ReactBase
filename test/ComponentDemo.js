import React from 'react'
import {shallow} from 'enzyme'
import chai from 'chai'

import ClearButton from '../components/Component'

const expect = chai.expect

describe('Component', () => {
  it('adds a class when the button is visible', () => {
    const component = shallow(<Component isVisible />)
    expect(component.find('H1')).to.equal('HELLO WORLD')
  })
})
