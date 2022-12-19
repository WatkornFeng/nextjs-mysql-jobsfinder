import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import JobPage from "./jobpage";
import Header from "../components/Header";
import Head from "next/head";
export default function Home() {
  const [jobList, setJobList] = useState([]);
  const [itemId, setItemId] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  console.log(currentPage);
  useEffect(() => {
    async function getJobs() {
      const response = await axios.get("/api/get-job");
      const jobs = response.data;
      setJobList(jobs);
    }
    getJobs();
  }, []);
  // Search Jobs//
  const jobResult = search ? search : jobList;

  // Calculation total pages for do Pagination
  const allItem = jobResult.length;
  const totalPages = Math.ceil(allItem / itemPerPage);

  //Slice array for show per page for do Pagination .
  const lastItemIndex = currentPage * itemPerPage; // 1*5 => 5
  const firstItemIndex = lastItemIndex - itemPerPage; //5-5=> 0
  const currentItem = jobResult.slice(firstItemIndex, lastItemIndex); // slice(0,5) => [0,1,2,3,4]

  return (
    <>
      <Head>
        <title>JobsFinder</title>
        <meta name="title" content="JobsFinder home page" />
      </Head>
      <Header
        setSearch={setSearch}
        jobList={jobList}
        setCurrentPage={setCurrentPage}
      />
      <JobPage
        jobList={jobResult}
        currentItem={currentItem}
        setItemId={setItemId}
        itemId={itemId}
        setCurrentPage={setCurrentPage}
      />
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
