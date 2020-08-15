import React, { Component } from "react";

class ReadContent extends Component {
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

export default ReadContent;
