import React from "react";
import ResultCard from "./ResultsCard";
import "./ResultList.css";

const ResultList = (props) => {
  if (props.results.length > 0) {
    const uniqueRes = [...new Set(props.results)];
    const results = uniqueRes.map((result, idx) => {
      return <ResultCard key={idx} palindrome={result} />;
    });
    return (
      <div className="results">
        There are {props.results.length} Palindromes with {uniqueRes.length}{" "}
        unique results
        <div className="result-list">{results}</div>
      </div>
    );
  }
  return (
    <div>
      Technically, no characters is a palindrome. It reads the same forward and
      backward.{" "}
    </div>
  );
};
export default ResultList;
