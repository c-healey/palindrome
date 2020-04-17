import React from "react";

class ResultsCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="item">{this.props.palindrome}</div>;
  }
}
export default ResultsCard;
