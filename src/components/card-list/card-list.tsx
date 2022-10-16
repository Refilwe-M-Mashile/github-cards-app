import React, { Component } from 'react';
import Card from '../card/card';

type CardProps = { id: number, login: string, avatar_url: string, company: string }
type UsersProps = { users: CardProps[] }
export default class CardList extends Component<UsersProps> {
    render() {
        return (
            <section className='card-list'>
                {this.props.users.map((profile: CardProps) => <Card key={profile.id} {...profile} />)}
            </section>
        )
    }
}
