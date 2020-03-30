import React, { Component } from 'react';

class SocialMediaIcon extends Component {
    render() {
        return (
            <a href={this.props.url} target="_blank">
                <i class={this.props.icon}/>
            </a>
        );
    }
}

export default SocialMediaIcon;