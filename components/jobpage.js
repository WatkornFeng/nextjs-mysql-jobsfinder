import JobDetail from "./JobDetail";
import Jobscard from "./Jobscard";
import Job404Page from "./Job404page";

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
