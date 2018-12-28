"use strict";

function SearchboxInput(props) {
  return React.createElement("input", {
    type: "text",
    value: props.filter
  });
}

function SearchboxList(props) {
  return React.createElement("div", {
    class: "table-wrapper-scroll-y position-absolute",
    id: "_SearchTableDiv"
  }, React.createElement("table", {
    class: "table table-sm table-bordered table-hover",
    id: "_SearchTable"
  }, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, props.data1), React.createElement("td", null, props.data2)))));
}

var Searchbox = React.createElement("div", null, React.createElement(SearchboxInput, {
  filter: "filter"
}), React.createElement(SearchboxList, {
  data1: "A One",
  data2: "A Two"
}));