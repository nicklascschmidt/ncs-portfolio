import React from "react";

class IconATagComponent extends React.Component {  
  render() {
    return (
      <a href={this.props.hrefLink} target='_blank' rel="noopener noreferrer" className={this.props.classNameProp}>
        {this.props.children}
      </a>
    );
  }
}

export default IconATagComponent;


