import React, { Component } from 'react'
import './card.scss'

export default class Card extends Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://picsum.photos/200" alt="" />
                <div className="info">
                    <div className="name">Name here...</div>
                    <div className="company">Company here...</div>
                </div>
            </div>
        )
    }
}
