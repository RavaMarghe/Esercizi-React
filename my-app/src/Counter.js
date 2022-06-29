import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ initailValue = 0 }) {
  const [counter, setCounter] = useState(initailValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <CounterDisplay state={counter} />
    </div>
  );
}

/*export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  // the constructor is not longer required
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementBy,
        };
      });
    }, this.props.timeout);
  }

  render() {
    return (
      <>
        <CounterDisplay state={this.state.count} />
      </>
    );
  }
}

Counter.defaultProps = {
  initialValue: 0,
  incrementBy: 1,
  timeout: 1000,
};*/
