import React from "react";

import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import hasPalindromes from "./Palindromes";

class App extends React.Component {
  state = { palindromes: [] };

  onInputSubmit = (term) => {
    console.log(`oninputsubmit term = ${term}`);
    const response = hasPalindromes(term);
    this.setState({ palindromes: response });
    console.log(response);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onInputSubmit} />
        <ResultList results={this.state.palindromes} />
      </div>
    );
  }
}

export default App;
