import React from "react";
import PropTypes from "prop-types";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }

    // console.log(location.state);
    // console.log(this.props.history);
  }

  render() {
    const { location } = this.props;
    console.log(location.state);
    if (location.state) {
      return (
        <div className="middle">
          <img src={location.state.poster}></img>
          <h1>{location.state.title}</h1>
          <h2>{location.state.genres}</h2>
          <h3>{location.state.summary}</h3>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;

Detail.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
