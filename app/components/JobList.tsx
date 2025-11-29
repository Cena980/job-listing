"use client";

import { serialize } from 'v8';
import {Job} from '../types/job';
import {useEffect, useState} from 'react';
import {filterJobs} from '../utils/jobFilter';



export default function JobList() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [filtered, setFiltered] = useState<Job[]>([]);
    const [department, setDepartment] = useState("All");
    const [location, setLocation] = useState("All");
    const [type, setType] = useState("All");
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchJobs() {
            const res = await fetch('/jobs.json');
            const data= await res.json();
            setJobs(data);
            setFiltered(data);
        }
        fetchJobs();
    }, []);

    useEffect(() => {
        setFiltered(filterJobs(jobs, department, location, type,search));
    }, [department, location, type, search, jobs]);

    const departments = ["All", ...new Set(jobs.map(j => j.department))];
    const locations = ["All", ...new Set(jobs.map(j => j.location))];
    const types = ["All", "Full-time", "Contract"];

    return (
        <div className="p-5 rounded-lg bg-gray-800 max-w-4xl min-h-[calc(100vh-2rem)] mx-auto text-black">
            {/* Filters */}
            <div className='grid bg-gray-400 rounded-xl p-3 grid-cols-1 md:grid-cols-4 gap-4 mb-4'>
                <div>
                    <p className='md:text-center font-bold mb-2'>Search</p>
                    <input
                        placeholder='Search for jobs'
                        className='rounded-xl p-2 w-full border'
                        value={search}
                        onChange={e=> setSearch(e.target.value)}
                        />
                    </div>
                <div>
                    <p className='md:text-center font-bold mb-2'>Department</p>
                    <select 
                        className='rounded-lg p-2 w-full border' 
                        value={department} 
                        onChange={e=> setDepartment(e.target.value)}
                    >
                    {departments.map(dep => (
                        <option key={dep} value={dep}>
                            {dep}
                        </option>
                    ))}
                    </select>
                </div>

                <div>
                    <p className='md:text-center font-bold mb-2'>Location</p>
                    <select 
                        className='rounded-lg p-2 w-full border' 
                        value={location} 
                        onChange={e=> setLocation(e.target.value)}
                    >
                    {locations.map(loc => (
                        <option key={loc} value={loc}>
                            {loc}
                        </option>
                    ))}
                    </select>
                </div>

                <div>
                    <p className='md:text-center font-bold mb-2'>Type</p>
                    <select 
                        className='rounded-lg p-2 w-full border' 
                        value={type} 
                        onChange={e=> setType(e.target.value)}
                    >
                    {types.map(t => (
                        <option key={t} value={t}>
                            {t}
                        </option>
                    ))}
                    </select>
                </div>
            </div>

            {/* Job Listings */}
            <div className='space-y-4'>
                {filtered.length === 0 && (
                    <p>No jobs found.</p>
                )}

                {filtered.map(job => (
                    <div
                        key= {job.id}
                        className="rounded-xl bg-gray-400 p-4 hover:scale-101 transition-transform duration-300 cursor-grab"
                    >
                        <h2 className='text-xl font-bold mb-2'>{job.title}</h2>
                        <p className='text-gray-600 mb-1'>{job.department} | {job.location} | {job.type}</p>
                        
                        <div className='flex flex-wrap gap-2 mt-2 text-xs md:text-sm'>
                            <span className='bg-gray-100 px-2 py-1 rounded'>{job.location}</span>
                            <span className='bg-gray-100 px-2 py-1 rounded'>{job.type}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}