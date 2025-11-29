import {Job} from '../types/job';

export function filterJobs(
    jobs: Job[],
    department: string,
    location: string,
    type: string,
    search: string
): Job[] {
    return jobs.filter((job) => {
        return (
            (department == "All" || job.department === department) &&
            (location == "All" || job.location === location) &&
            (type == "All" || job.type === type) &&
            job.title.toLowerCase().includes(search.toLowerCase())
        );
    });
}