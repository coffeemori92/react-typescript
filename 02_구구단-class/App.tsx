import * as React from 'react';
import { Component } from 'react';

interface State {
  first: number;
  second: number;
  value: string;
  result: string;
}

class App extends Component<{}, State> {
  state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: '',
  };
  input: HTMLInputElement | null = null;
  onRefInput = (c: HTMLInputElement) => { this.input = c };
  onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(parseInt(this.state.value) === this.state.first * this.state.second) { // 정답을 맞추면
      this.setState(prevState => ({
        result: `정답: ${prevState.value}`,
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
      }));
    } else {
      this.setState(prevState => ({
        result: '땡',
        value: '',
      }));
    }
    this.input!.focus();
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <>
        <div>{this.state.first} 곱하기 {this.state.second}는?</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.onRefInput}
            type="number"
            value={this.state.value}
            onChange={this.onChange}
          />
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

export default App;