# Job Listing Component with Client-Side Filtering — Technical Documentation

## Project Overview

The Job Listing Component is a client-rendered user interface that enables users to browse job openings and filter them using client-side filtering. The filters include department, job location, job type, and optional job title search. The module prioritizes clarity, responsiveness, and maintainability.

## Purpose and Scope

This document describes:

* Recommended directory organization

* Local JSON mock API integration strategy

* Inclusion of new directories into an existing repository

* Technical design guidelines for filter-driven UI behavior*

## System Requirements
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

## Directory Structure

job-listing/

├── public/

│   └── jobs.json

├── app/

│   ├── components/

│   │   └── JobList.tsx

│   └── page.tsx

|    └── types/

│       └── job.ts

|    └── utils/

|        └── jobFilter.ts

## Mock API Using Local JSON

Data fetched through the component is stored in a local .json file.

## Filtering Logic

Data fetched from the API is filtered by Department, Location, Type, and Title.

User can easily change filters through a filter section at the top of the component.

## How to run

* clone the repository locally:

git clone <link to reporsitory>

* Install the dependencies

npm install

* Run the app server

"npm run dev" to run the development server.

"npm run build" > "npm run start" to run a prebuilt app.

* run test cases

"npm run test"

## Testing Environment

Testing environment is set up using Jest.

4 test cases, one for each of the filtering options is created.

### in the last commit all 4 test units passed successfully.

## Maintainability

This app is build to ensure readability and maintainability.

Separate directories are used to allow for convenient file classification.

component is stored in a separate directory.

Filterign logic, types, and tests are also stored in their own directories.
