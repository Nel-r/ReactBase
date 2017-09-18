import React from 'react'

class ComponentDemo extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      results: []
    }

    this.test1 = this.test1.bind(this)
  }

  test1 (results) {
    this.setState({results: results, error: false})
  }

  render () {
    return (
      <h1>HELLO NEWB TUBE</h1>
    )
  }
}

ComponentDemo.props = {
}

module.exports = ComponentDemo
