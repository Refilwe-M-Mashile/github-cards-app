import React, { Component } from 'react';
import Card from '../card/card';
import './App.scss';

type Props = {
  title: string
}
class App extends Component<Props> {
  render() {
    return (<><h1 className='header'>{this.props.title}</h1><Card /></>)
  }
}

export default App;
