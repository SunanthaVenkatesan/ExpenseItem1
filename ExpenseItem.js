//A custom made component(components are functions that return HTML code)
function ExpenseItem() {
  //the custom component must start with uppercase as we are using as JSX and react should detect as custom since lowercase are for default builtin HTML elements
  return (
    <div><h2>ExpenseItem</h2>
      <div>Food Rs 10</div>
      <div>
        Petrol Rs 100
      </div>
      <div>Movies Rs 200</div>
    </div>
  );
}
//to use tis component we have to export it else it isonly usable in this file
export default ExpenseItem;
