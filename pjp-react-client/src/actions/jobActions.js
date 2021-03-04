
import axios from "axios";
import { GET_ERRORS, GET_JOBS } from "./types";

export const addJob = (job, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:9090/api/job", job);
    history.push("/dashboard");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};


export const getJobs = () => async dispatch => {//4
  const jobs = await axios.get("http://localhost:9090/api/job/all");
  dispatch({
    type: GET_JOBS,
    payload: jobs.data
  })
}