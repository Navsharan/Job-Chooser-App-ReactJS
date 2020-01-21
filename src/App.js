import React, { useState } from "react";
import Profile from "./containers/Profile";
import MatchingJobs from "./containers/MatchingJobs";
import Header from "./components/Header/Header";
import JobBanner from "./components/JobBanner/JobBanner";
import CompanyJobDetails from "./components/CompanyJobDetails/CompanyJobDetails";
import DistanceAndRate from "./components/DistanceAndRate/DistanceAndRate";
import ShiftDetails from "./components/ShiftDetails/ShiftDetails";

const workerID = "7f90df6e-b832-44e2-b624-3143d428001f";

const App = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [jobs, setJobs] = useState([]);

  const pushWorkerName = (firstName, lastName) => {
    setFirstName(firstName);
    setLastName(lastName);
  };

  const pushJobs = result => {
    setJobs(result);
  };

  let header = null;
  if (firstname !== "" && lastname !== "") {
    header = <Header firstName={firstname} lastName={lastname}></Header>;
  }
  console.log(jobs);
  return (
    <div className="App">
      <Profile workerID={workerID} pushWorkerName={pushWorkerName}></Profile>
      <MatchingJobs workerID={workerID} pushJobs={pushJobs}></MatchingJobs>
      {header}
      <div className="container-main">
        {jobs.map(job => {
          return (
            <React.Fragment key={job.jobId}>
              <div className="container-job">
                <JobBanner /*imageSrc={job.jobTitle.imageUrl}*/></JobBanner>
                <CompanyJobDetails
                  jobTitle={job.jobTitle.name}
                  /* equivalent as above
                  jobTitle = {job["jobTitle"]["name"]}
                  */
                  companyName={job.company.name}
                ></CompanyJobDetails>
                <DistanceAndRate
                  distance={job.milesToTravel}
                  rate={job.wagePerHourInCents}
                ></DistanceAndRate>
                <ShiftDetails shiftsDates={job.shifts}></ShiftDetails>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default App;
