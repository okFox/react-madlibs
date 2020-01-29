import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    wordsArray: []
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

    handleChange = ({ target }) => {
      let newStateArray = this.state.wordsArray.slice();
      newStateArray[target.id] = target.value;
      this.setState({ wordsArray: newStateArray });
      // this.setState({ [target.id]: target.value });
    }
  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.onChange} />}
        {showResult && <Result words={this.state.wordsArray} closeResult={this.toggleResult} />}
      </>
    );
  }
}
