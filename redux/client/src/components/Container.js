import React from 'react'
import { connect } from 'react-redux'
// import { addCount } from '../actions'

class Container extends React.Component {
  render() {
    return (
      <div>
       <h2>container comp</h2>
     </div>
   )
  }
}

// const mapStateToProps = state => ({
//   counter: state.counter
// })
//
// const mapDispatchToProps = dispatch => ({
//   addCount: () => dispatch(addCount())
// })

export default connect(null, null)(Container)
