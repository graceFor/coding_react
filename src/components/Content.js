import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <article>
        <h2>
          <a href="/">{this.props.title}</a>
        </h2>
        {this.props.desc}
      </article>
    );
  }
}

export default Content;
