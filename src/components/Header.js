import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <h1>{this.props.title}</h1>
    )
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

}

export default Header;
