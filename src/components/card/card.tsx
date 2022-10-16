import React, { Component } from 'react'
import './card.scss'

type CardProps = { login: string, avatar_url: string, company: string }

export default class Card extends Component<CardProps> {
    render() {
        const { avatar_url, login, company } = this.props;
        return (
            <section className="github-profile">
                <img src={avatar_url} alt="avatar" />
                <section className="info">
                    <h6 className="name">{login}</h6>
                    <p className="company">{company}</p>
                </section>
            </section>
        )
    }
}
