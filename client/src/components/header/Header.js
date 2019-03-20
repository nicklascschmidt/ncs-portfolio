import React from "react";
import './header.css';

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className='header-style p-3 mb-3' id={this.props.id}>
        <h1 className='hr-header'>{this.props.title}</h1>
      </div>
    );
  }
}

export default HeaderComponent;
