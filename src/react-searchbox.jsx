function SearchboxInput(props) {
  return (
    <input type="text" value={props.filter} />
  );
}
function SearchboxList(props) {
  return (
    <div class="table-wrapper-scroll-y position-absolute" id="_SearchTableDiv">
      <table class="table table-sm table-bordered table-hover" id="_SearchTable">
        <tbody>
		      <tr><td>{props.data1}</td><td>{props.data2}</td></tr>
        </tbody>
      </table>
    </div>
  );
}
var Searchbox = (
  <div>
    <SearchboxInput filter="filter" />
    <SearchboxList data1="A One" data2="A Two" />
  </div>
);