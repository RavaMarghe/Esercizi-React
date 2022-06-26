export function Sum({ numbers = [1, 2, 3] }) {
  // set a default value: {numbers = [1, 2, 3]}
  return (
    <h1>Sum: {numbers.reduce((prevNum, currNum) => prevNum + currNum, 0)}</h1>
  );
}

// if the prop is not set the whole app is not rendered