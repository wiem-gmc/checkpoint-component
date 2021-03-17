import React, { Component } from 'react'
import image from '../../img.jpg'
export default class ProfilPhoto extends Component {
    render() {
        return (
            <div>
                <img src={image} alt="nature"></img>
            </div>
        )
    }
}
