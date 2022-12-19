import classes from "./Header.module.css";
import Link from "next/link";
import Fuse from "fuse.js";

export default function Header({ setSearch, jobList, setCurrentPage }) {
  let search = "";
  const onSubmitSearch = (event) => {
    event.preventDefault();
    // Change search to be object for using in Fuse
    const searchResult = { search };
    const fuse = new Fuse(jobList, { keys: ["position", "company"] });
    const results = searchResult.search
      ? fuse.search(searchResult.search)
      : alert("Please input position or company's name");
    const result = results?.map((e) => e.item);
    setSearch(result);

    // Reset input field in search bar when its got clicked!
    const searchInput = document.getElementById("search_input");
    searchInput.value = "";
    setCurrentPage(1);
  };

  return (
    <>
      <div className={classes.panel}>
        <div className="row">
          <div className="col-3">
            <a href="/" className={classes.logo}>
              JobsFinder
            </a>
          </div>
          <div className="col-6">
            <form className={classes.top} onSubmit={onSubmitSearch}>
              <input
                id="search_input"
                type="text"
                placeholder="  Search job by position or company's name here . . ."
                onChange={(e) => {
                  search = e.target.value;
                }}
              />
              <button type="submit">Job Search</button>
            </form>
          </div>
          <div className="col-3">
            <div className={classes.buttonlogin}>
              <Link href="/form">
                <button>Create Job</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
