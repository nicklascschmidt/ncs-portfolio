import React from "react";
import './section-footer.css';

class SectionFooterComponent extends React.Component {
  render() {
    return (
      <div className='section-footer-style p-1 mb-3' id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}

export default SectionFooterComponent;
