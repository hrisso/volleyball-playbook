# Project Overview

## Volleyball Playbook

## Project Description

The Volleyball Playbook app is a library of volleball plays that allows a user to read and add to the library. 

## Wireframes

![imageAlt](https://res.cloudinary.com/doas1ztbf/image/upload/v1611097333/Home%20Wireframe.png)
![imageAlt](https://res.cloudinary.com/doas1ztbf/image/upload/v1611097668/Plays%20Feed%20Wireframe.png)
![imageAlt](https://res.cloudinary.com/doas1ztbf/image/upload/v1611098227/Mobile%20Homepage%20Wireframe.png)

## Component Hierarchy

![imageAlt](https://res.cloudinary.com/doas1ztbf/image/upload/v1611096521/Component%20Hierarchy.png)

## API and Data Sample


```json
{
  "records": [
      {
          "id": "recYg2XZDEjrBFKF4",
          "fields": {
              "Name": "Quick Set (1)",
              "description": "Quick, low set where ball is hit on its way up usually in the middle positon",
              "author": "volleyfun",
              "image": "https://res.cloudinary.com/doas1ztbf/image/upload/v1611095652/quick_uwstwd.jpg"
          },
          "createdTime": "2021-01-19T22:22:59.000Z"
      },
      {
          "id": "reculQw3HdRXOYEOA",
          "fields": {
              "Name": "Back Slide",
              "description": "Quick set shot out behind the setter usually an attack by the middle position",
              "author": "coachrick",
              "image": "https://res.cloudinary.com/doas1ztbf/image/upload/v1611095893/pipe_qgxqul.jpg"
          },
          "createdTime": "2021-01-19T22:22:59.000Z"
      },
      {
          "id": "rec0oLwycwWSaYfmW",
          "fields": {
              "Name": "Pipe",
              "description": "Back row attack from the middle",
              "author": "VBtoo"
          },
          "createdTime": "2021-01-19T22:22:59.000Z"
      }
  ],
  "offset": "rec0oLwycwWSaYfmW"
}
```

### MVP/PostMVP

#### MVP 

- Airtable data for volleyball playbook
- Working api call from Airtable
- Render airtable data on page with 6 components (get)
- Allow user to add to volleyball playbook with a form (post)

#### PostMVP  

- Add categorization for offense / defense
- Allow user to delete plays
- Allow user to update/edit plays
- Search bar to search all plays
- Add ratings to plays

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Jan 19| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Jan 20| Project Approval | Incomplete
|Jan 20| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Jan 21| Pseudocode / actual code | Incomplete
|July 22 | Initial Clickable Model  | Incomplete
|July 25| MVP | Incomplete
|July 27| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setup React App | H | 2hrs| 0hrs | 0hrs |
| Display Airtable data on homepage | H | 3hrs| 0hrs | 0hrs |
| Header Component | H | 1hr| 0hrs | 0hrs |
| Footer Component | H | 1hr| 0hrs | 0hrs |
| Feed Component | H | 3hrs| 0hrs | 0hrs |
| Form Component | H | 3hrs| 0hrs | 0hrs |
| App.js routes | H | 3hrs| 0hrs | 0hrs |
| CSS styling homepage | H | 2hrs| 0hrs | 0hrs |
| CSS styling feed | H | 3hrs| 0hrs | 0hrs |
| CSS styling form| H | 3hrs| 0hrs | 0hrs |
| CSS styling header/footer | H | 1hr| 0hrs | 0hrs |
| Total | H | 25hrs| 0hrs | 0hrs |

## SWOT Analysis

### Strengths:
I have a clear understanding of CRUD and what I have to do for those requirements. 
### Weaknesses:
I'm still not super clear on whether this design will look good. I might have to change strategies if I implement it and I'm not happy with the visual. I'm also concerned about my time estimates.
### Opportunities:
I'm looking forward to creating a react app from scratch independently to solidy my understanding of the concepts from class.
### Threats:
I tend to spend a lot of time with CSS and styling to see what makes the app look good, but I need to focus on MVP and keep advanced styling for the end so I don't run out of time for MVP.