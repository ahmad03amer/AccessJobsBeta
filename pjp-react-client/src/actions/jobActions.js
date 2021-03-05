
import axios from "axios";
import { GET_ERRORS, GET_JOBS, GET_JOB } from "./types";

export const addJob = (job, history) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:9090/api/job", job);
    history.push("/dashboard");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
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

//if we have any errors we will redirect to dashboard using history
export const getJob = (id, history) => async dispatch => {
  try {
    //the same id getting from route in App.js
    const res = await axios.get(`http://localhost:9090/api/job/${id}`)
    dispatch({
      type: GET_JOB,
      payload: res.data
    })
  } catch (error) {
    history.push("/dashboard")//if try to access non exist object
  }

}