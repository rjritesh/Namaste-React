import React from 'react';


class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Ritesh dummy",
        location: "Dummy location"
      },
    }

  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rjritesh");
    const json = await data.json()

    this.setState({
      userInfo: json,
    })
  }
  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo

    return (
      <div>
        <img width="300px" src={avatar_url} alt="" />
        <h3>Name: {name}</h3>
        <h3>Role: {location}</h3>
        <h3>Bio: {bio}</h3>
        {/* <h3>Location: {this.props.location}</h3>
        <h3>Contact: {this.props.contact}</h3> */}


      </div>



    )
  }
}

export default UserClass;
