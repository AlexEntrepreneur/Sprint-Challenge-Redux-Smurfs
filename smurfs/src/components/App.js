import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  getSmurfs,
  addSmurf,
  deleteSmurf,
  editSmurf,
  selectCurrentSmurf,
  deselectCurrentSmurf
} from '../actions/action-creators';
import './App.css';

class App extends Component {
  smurfForm = React.createRef();

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

    if (this.props.currentSmurfId) {
      if (formIsFilled) {
        this.props.editSmurf(name, age, height, this.props.currentSmurfId);
        this.onEditCancelBtnClick();
      }
    }
    else {
      if (formIsFilled) {
        this.props.addSmurf(name, age, height);
        this.clearForm(event.target);
      }
    }
  }

  clearForm = (form) => {
    for (let i = 0; i < form.length; i++) {
      form[i].value = '';
    }
    form[0].focus();
  }

  onDeleteBtnClick = (id) => {
    this.props.deleteSmurf(id);
  }

  onEditBtnClick = (smurf) => {
    const fields = ['name', 'age', 'height'];
    for (let i = 0; i < this.smurfForm.current.length; i++) {
      fields.forEach(field => this.smurfForm.current[field].value = smurf[field]);
    }

    this.props.selectCurrentSmurf(smurf.id);
  }

  onEditCancelBtnClick = () => {
    this.props.deselectCurrentSmurf();
    this.clearForm(this.smurfForm.current);
  }

  render() {
    const { smurfs } = this.props;
    return (
      <div className="App">
        {
          smurfs.map(smurf =>
            <div className="card" key={smurf.id + 1}>
              <h3>{smurf.name}</h3>
              <h3>{smurf.age}</h3>
              <h3>{smurf.height}</h3>
              <button onClick={() => this.onDeleteBtnClick(smurf.id)}>delete</button>
              <button onClick={() => this.onEditBtnClick(smurf)}>edit</button>
            </div>
          )
        }
        <form
          className="add-smurf-form"
          onSubmit={this.onSmurfFormSubmit}
          ref={this.smurfForm}
        >
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
        <button type="submit">{this.props.currentSmurfId ? 'Confirm' : 'Add Friend'}</button>
        {
          this.props.currentSmurfId &&
          <button
            className="cancel-btn"
            onClick={this.onEditCancelBtnClick}
            >
            Cancel
          </button>
        }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return {
    smurfs: reducers.smurfsReducer.smurfs,
    error: reducers.smurfsReducer.error,
    currentSmurfId: reducers.smurfsReducer.currentSmurfId
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getSmurfs,
    addSmurf,
    deleteSmurf,
    selectCurrentSmurf,
    deselectCurrentSmurf,
    editSmurf
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
