import React from "react";

class Item extends React.Component {
  state = {
    isInCart: false,
  }

  handleAddToCartClick = () => {
    this.setState({
      isInCart: !this.isInCart,
    })
  }

  render() {
    return (
      <li className={this.state.isInCart ? "in-cart" : ""}>
        <span>{this.props.name}</span>
        <span className="category">{this.props.category}</span>
        <button
          className={this.stateisInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {this.stateisInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    )
  }
}

export default Item;
