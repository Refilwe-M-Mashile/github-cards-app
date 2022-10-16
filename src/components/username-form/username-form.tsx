import React, { Component } from 'react'
import { getUser } from '../../services/github-api';
import './username-form.scss'

type FormProps = { onSubmit: (login: string) => void }
export default class UsernameForm extends Component<FormProps> {

    state = { userName: '' };
    handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const { login } = await getUser(this.state.userName);
        this.props.onSubmit(login);
        this.setState({ userName: '' });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="GitHub username"
                    required
                />
                <button>Add User</button>
            </form>
        )
    }
}
