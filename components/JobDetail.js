import classes from "./JobDetail.module.css";

export default function JobDetail({ itemId, currentItem, setItemId }) {
  const jobId = currentItem.filter((e) => e.id == itemId);

  return (
    <>
      {jobId.map((jobs) => (
        <div className={classes.main}>
          <div className={classes.btn} onClick={() => setItemId(0)}>
            X
          </div>
          <img src={jobs.img} alt="comapany-img"></img>
          <p>{jobs.company}</p>
          <h2>{jobs.position}</h2>
          <p id={classes.detail}>
            <h3>Responsibilities :</h3>
            {jobs.detail}
          </p>
          <p id={classes.salary}>
            <h3>Salary/Month : (THB)</h3>
            {jobs.salary?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p id={classes.hilight}>
            <h3>Job-highlight :</h3>
            {jobs.hilight}
          </p>
        </div>
      ))}
    </>
  );
}
