export function Sum({numbers}) {
  return (
    <h1>Sum: {numbers.reduce((prevNum, currNum) => prevNum + currNum, 0)}</h1>
  );
}
