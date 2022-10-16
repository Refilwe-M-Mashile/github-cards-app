import React, { Component } from 'react';
import { getUser } from '../../services/github-api';
import CardList from '../card-list/card-list';
import UsernameForm from '../username-form/username-form';
import './App.scss';

type Props = {
  title: string
}
type CardProps = { id: number, login: string, avatar_url: string, company: string }

class App extends Component<Props> {
  state = {
    users: [],
  };
  addNewProfile = async (user: string) => {
    const userData: CardProps = await getUser(user);
    this.setState(() => ({
      users: [...this.state.users, userData],
    }));
  };
  render() {
    return (
      <>
        <h1 className='header'>{this.props.title}</h1>
        <UsernameForm onSubmit={this.addNewProfile} />
        <CardList users={this.state.users} />
      </>
    )
  }
}

export default App;
