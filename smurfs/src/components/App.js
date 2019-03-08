import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSmurfs, addSmurf } from '../actions/action-creators';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  onSmurfFormSubmit = (event) => {
    event.persist();
    event.preventDefault();
    const name = event.target['name'].value;
    const age = event.target['age'].value;
    const height = event.target['height'].value;
    const formIsFilled = name !== '' && age !== '' && height !== '';
    if (formIsFilled) {
      this.props.addSmurf(name, age, height);
      this.clearForm(event.target)
    }
  }

  clearForm = (form) => {
    for (let i = 0; i < form.length; i++) {
      form[i].value = '';
    }
  }

  render() {
    const { smurfs } = this.props;
    return (
      <div className="App">
        {
          smurfs.map(smurf =>
            <div key={smurf.id + 1}>
              <h3>{smurf.name}</h3>
              <h3>{smurf.age}</h3>
              <h3>{smurf.height}</h3>
            </div>
          )
        }
        <form className="add-smurf-form" onSubmit={this.onSmurfFormSubmit}>
          <input
            type="text"
            name="name"
          />
          <input
            type="number"
            name="age"
          />
        <input
          type="text"
          name="height"
          />
        <button type="submit">Add Smurf</button>
        </form>
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
    getSmurfs,
    addSmurf
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
