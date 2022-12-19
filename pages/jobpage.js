import JobDetail from "../components/JobDetail";
import Jobscard from "../components/Jobscard";
import Job404Page from "../components/Job404page";

const JobPage = ({ jobList, currentItem, setItemId, itemId }) => {
  return (
    <div className="row">
      <div className="col-4">
        {currentItem?.map((jobs, index) => (
          <Jobscard key={index} jobs={jobs} setItemId={setItemId} />
        ))}
      </div>
      <div className="col-7">
        {itemId !== 0 ? (
          <JobDetail
            itemId={itemId}
            setItemId={setItemId}
            currentItem={currentItem}
          />
        ) : (
          <Job404Page jobList={jobList} />
        )}
      </div>
    </div>
  );
};

export default JobPage;
