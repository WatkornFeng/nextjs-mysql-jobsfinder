import { useEffect, useState } from "react";
import classes from "./NewJobForm.module.css";
import Link from "next/link";
import isUrl from "is-url";

export default function NewJobForm(props) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);
  const [hilight, setHilight] = useState("");
  const [img, setImg] = useState("");
  const [detail, setDetail] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [countDetail, setCountDetail] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();
    const jobData = { company, position, img, detail, salary, hilight };
    props.onAddJob(jobData);
  };

  useEffect(() => {
    if (
      company.length > 0 &&
      position.length > 0 &&
      salary !== 0 &&
      salary !== "" &&
      detail.length > 0 &&
      detail.length <= 500 &&
      hilight.length > 0 &&
      isUrl(img) == true &&
      img.includes(".jpg")
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [company, position, img, detail, salary, hilight]);
  useEffect(() => {
    setCountDetail(detail.length);
  }, [countDetail, detail]);

  return (
    <>
      <div className={classes.panel}>
        <div className="row">
          <div className="col-3">
            <Link href="/">
              <p className={classes.logo}>JobsFinder</p>
            </Link>
          </div>
          <div className="col-8">
            <div className={classes.buttonreturn}>
              <Link href="/">
                <button>Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h1 id={classes.headform}>Create your job here!</h1>
        </div>
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Company Name :</label>
          <input
            type="text"
            placeholder="Enter Company's name"
            required
            onChange={(e) => setCompany(e.target.value)}
          />
          <span>required* </span>
        </div>
        <div className={classes.control}>
          <label>Position :</label>
          <input
            type="text"
            placeholder="Enter Position"
            required
            onChange={(e) => setPosition(e.target.value)}
          />
          <span>required*</span>
        </div>
        <div className={classes.control}>
          <label>Salary :</label>
          <input
            type="number"
            required
            placeholder="Enter Amount of salary per month in THB ฿  "
            onChange={(e) => {
              setSalary(e.target.value);
            }}
          />
          <span>required* Please input only number ! e.g. 20000</span>
        </div>
        <div className={classes.control}>
          <label>Job highlight / key word for your job :</label>
          <input
            type="text"
            placeholder="Enter Job's Highlight"
            required
            onChange={(e) => setHilight(e.target.value)}
          />
          <span>required*</span>
        </div>
        <div className={classes.control}>
          <label>Please up load your company's logo :</label>
          <input
            type="url"
            placeholder="Enter Company's image "
            required
            onChange={(e) => setImg(e.target.value)}
          />
          <span>
            required* Please input as a link or URL ! e.g.
            https://pictureABC.jpg
          </span>
        </div>
        <div className={classes.control}>
          <label>Job Description :</label>
          <textarea
            rows="5"
            placeholder="Enter Job's Detail"
            required
            onChange={(e) => setDetail(e.target.value)}
          ></textarea>
          <span>required*</span>
          <h6>{countDetail}/500</h6>
        </div>
        <div className={classes.actions}>
          <button disabled={!formValid}>Create</button>
        </div>
      </form>
    </>
  );
}
