import React, { useEffect } from "react";
import axios from "axios";

const Profile = props => {
  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://test.swipejobs.com/api/worker/${props.workerID}/profile`;
    axios
      .get(proxyurl + url)
      .then(res => {
        const person = res.data;

        props.pushWorkerName(person.firstName, person.lastName);

        //console.log(this.state.person);
      })
      .catch(err => console.log(err));
  }, []);
  return null;
};

export default Profile;
