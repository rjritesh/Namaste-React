import React from 'react';


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "ritesh jha",
        bio: "dummy bio",
        location: "dummy area",
      }
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rjritesh")
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json
    })
  }

  componentWillUnmount(){
    console.log("componentwillunmount caled");
  }

  render() {

    const { name, location, avatar_url, bio } = this.state.userInfo;
    // debugger;
    return (
      <div>
        <img width="200px" height="200px" src={avatar_url} alt="" />
        <h3>Name:{name}</h3>
        <h3>Bio: {bio}</h3>
        <h3>Location:{location}</h3>



      </div>



    )
  }
}

export default UserClass;
