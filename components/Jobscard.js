import classes from "./Jobscard.module.css";

export default function Jobscard({ jobs, setItemId }) {
  const routeToJobdetail = () => {
    setItemId(jobs.id);
  };
  return (
    <>
      <div className={classes.card} onClick={routeToJobdetail}>
        <img src={jobs.img} alt="comapany-img"></img>
        <br></br>
        <h4>{jobs.position}</h4>
        <p>{jobs.company}</p>
        <p>
          <span>Salary: </span>
          {jobs.salary?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          <span>THB / Months</span>
        </p>
        <li className="hilight">{jobs.hilight}</li>
      </div>
    </>
  );
}
