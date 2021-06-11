import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
                <nav classname="navbar navbar-expand-sm navbar-light bg-light">
                    <button classname="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span classname="navbar-toggler-icon"></span>
                    </button>
                    <div classname="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a classname="navbar-brand" href="#">Health system</a>
                    <ul classname="navbar-nav mr-auto mt-2 mt-lg-0">
                    </ul>
                    </div>
                </nav>
        )
    }
}

export default Header
