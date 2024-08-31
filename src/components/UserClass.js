import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // to declare state variable
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  componentDidMount() {
    console.log("Hello Moto");
  }
  render() {
    const { count, count2 } = this.state;
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h3>Count2: {count2}</h3>
      </div>
    );
  }
}
export default UserClass;
