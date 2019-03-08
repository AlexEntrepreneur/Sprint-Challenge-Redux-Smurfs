import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSmurfs } from '../actions/action-creators';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    const { smurfs } = this.props;
    return (
      <div className="App">
        {
          smurfs.map(smurf =>
            <div>
              <h3>{smurf.name}</h3>
              <h3>{smurf.age}</h3>
              <h3>{smurf.height}</h3>
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return {
    smurfs: reducers.smurfsReducer.smurfs,
    error: reducers.smurfsReducer.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSmurfs
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
