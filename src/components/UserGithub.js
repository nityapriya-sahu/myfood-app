import React from "react";

class UserGithub extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        id: "",
        location: "",
        public_repos: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/premanandasahoo");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("componet did update");
  }
  componentWillUnmount() {
    console.log("component will unmount"); //it call when current page not there(redirect to other page)
  }
  render() {
    const { name, id, public_repos, location } = this.state.userInfo;
    return (
      <div>
        <h1>github api Details</h1>
        <div>
          <h6>{name}</h6>
          <h6>{id}</h6>
          <h6>{public_repos}</h6>
          <h6>{location}</h6>
        </div>
      </div>
    );
  }
}
export default UserGithub;
