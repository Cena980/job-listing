import { filterJobs } from "../utils/jobFilter";
import { Job } from "../types/job";

const mockJobs: Job[] = [
  { id: "1", title: "Software Engineer", department: "Engineering", location: "New York", type: "Full-time" },
  { id: "2", title: "Data Scientist", department: "Engineering", location: "San Francisco", type: "Contract" },
  { id: "3", title: "Product Manager", department: "Marketing", location: "Remote", type: "Full-time" }
];

test("Filter by Department", () => {
  const res = filterJobs(mockJobs, "Engineering", "All", "All", "");
  expect(res).toEqual([
    mockJobs[0],
    mockJobs[1]
  ]);
});

test("Filter by location", () => {
  const res = filterJobs(mockJobs, "All", "New York", "All", "");
  expect(res).toEqual([
    mockJobs[0]
  ]);
});

test("Filter by type", () => {
  const res = filterJobs(mockJobs, "All", "All", "Contract", "");
  expect(res).toEqual([
    mockJobs[1]
  ]);
});

test("Filter by title search", () => {
  const res = filterJobs(mockJobs, "All", "All", "All", "software");
  expect(res).toEqual([
    mockJobs[0]
  ]);
});
