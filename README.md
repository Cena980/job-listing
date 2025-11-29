# Job Listing Component with Client-Side Filtering — Technical Documentation
1. Project Overview

The Job Listing Component is a client-rendered user interface module that enables users to browse job openings and apply real-time, client-side filtering. The filters include department, job location, job type, and optional job title search. The module prioritizes clarity, responsiveness, and maintainability while demonstrating structured frontend development practices.

2. Purpose and Scope

This document describes:

* Recommended directory organization

* Local JSON mock API integration strategy

* Inclusion of new directories into an existing repository

* Technical design guidelines for filter-driven UI behavior*

3. System Requirements
### Framework	

A Next.js project using the App Router structure
### Rendering	

Client-side filtering without backend dependency
### Data Source	

A local JSON file used for mock API responses

Styling	Responsive layout design
### Testing System

#### Jest

Supports test environment configurations compatible with frontend logic validation

4. Directory Structure

job-listing/
├── app/
│   ├── components/
│   │   └── JobList.tsx
│   ├── api/  (optional mock API routes)
│   │   └── jobs/route.ts (optional)
│   └── page.tsx
├── public/
│   └── jobs.json
├── types/
│   └── job.ts
└── utils/
    └── jobFilter.ts

5. Mock API Using Local JSON

Data fetched through the component is stored in a local .json file.

6. Filtering Logic

Data fetched from the API is filtered by Department, Location, Type, and Title.

User can easily change filters through a filter section at the top of the component.

7. How to run

* clone the repository locally:

git clone <link to reporsitory>

* Install the dependencies

npm install

* Run the app server

"npm run dev" to run the development server.
"npm run build" > "npm run start" to run a prebuilt app.

* run test cases

"npm run test"

8. Testing Environment

Testing environment is set up using Jest.

4 test cases, one for each of the filtering options is created.

### in the last commit all 4 test units passed successfully.

9. Maintainability

This app is build to ensure readability and maintainability.

Separate directories are used to allow for convenient file classification.

component is stored in a separate directory.

Filterign logic, types, and tests are also stored in their own directories.
