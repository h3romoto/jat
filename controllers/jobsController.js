const createJob = async (req, res) => {
  res.send("create job");
};

const getAllJobs = async (req, res) => {
  res.send("get all the jobs");
};

const deleteJob = async (req, res) => {
  res.send("delete job");
};

const updateJob = async (req, res) => {
  res.send("update job");
};

const showStats = async (req, res) => {
  res.send("show job stats");
};

export { createJob, deleteJob, updateJob, getAllJobs, showStats };
