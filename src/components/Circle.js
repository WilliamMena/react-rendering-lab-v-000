import React from 'react';

class Circle extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.color !== this.props.color) {
      return true
    } else {
      return false
    }
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);

    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
