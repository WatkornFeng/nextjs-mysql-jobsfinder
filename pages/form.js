import NewJobForm from "../components/NewJobForm";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
export default function Form() {
  const router = useRouter();
  async function postJobs(jobData) {
    await axios
      .post("/api/post-job", {
        company: jobData.company,
        position: jobData.position,
        img: jobData.img,
        detail: jobData.detail,
        salary: jobData.salary,
        hilight: jobData.hilight,
      })
      .then(router.push("/"));
  }
  return (
    <>
      <Head>
        <title>JobsFinder create job</title>
        <meta name="create-job" content="Page for employer " />
      </Head>
      <NewJobForm onAddJob={postJobs} />
    </>
  );
}
