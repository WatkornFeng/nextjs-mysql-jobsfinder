import classes from "./Job404page.module.css";
export default function Job404page({ jobList }) {
  return (
    <div className={classes.pagenotfound}>
      <h1>Now we have {jobList.length} jobs for you!</h1>
      <h2>Please select your job!</h2>
      <img src="jobsearch.jpg"></img>
    </div>
  );
}
