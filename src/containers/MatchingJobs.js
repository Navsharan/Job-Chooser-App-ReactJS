import React, { useEffect } from "react";
import axios from "axios";

const MatchingJobs = props => {
  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://test.swipejobs.com/api/worker/${props.workerID}/matches`;
    axios.get(proxyurl + url).then(res => {
      const jobs = res.data;
      props.pushJobs(jobs);
    });
  }, []);
  return null;
};

export default MatchingJobs;
