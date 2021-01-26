# Project Overview

## Volleyball Playbook

## Project Description

The Volleyball Playbook app is a library of volleball plays that allows a user to read and add to the library. The plays are organized by type and include title, description, image link, and author.

## Wireframes

![imageAlt](https://res.cloudinary.com/doas1ztbf/image/upload/v1611097333/Home%20Wireframe.png)
![imageAlt](https://res.cloudinary.com/doas1ztbf/image/upload/v1611160558/List%20Wireframe.png)
![imageAlt](https://res.cloudinary.com/doas1ztbf/image/upload/v1611160210/Mobile%20form%20wireframe.png)

## Component Hierarchy

![imageAlt](https://res.cloudinary.com/doas1ztbf/image/upload/v1611161104/Component%20Hierarchy.png)

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
|Jan 19| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Jan 20| Project Approval | Complete
|Jan 20| Core Application Structure (HTML, CSS, etc.) | Complete
|Jan 21| Pseudocode / actual code | Complete
|July 22 | Initial Clickable Model  | Complete
|July 25| MVP | Complete
|July 27| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Setup React App | H | 2hrs| 2hrs | 2hrs |
| Display Airtable data on homepage | H | 3hrs| 2hrs | 2hrs |
| Header Component | H | 1hr| 1hrs | 1hrs |
| Footer Component | H | 1hr| 1hrs | 1hrs |
| Feed Component | H | 3hrs| 3hrs | 3hrs |
| Form Component | H | 3hrs| 3hrs | 3hrs |
| App.js routes | H | 3hrs| 2hrs | 2hrs |
| CSS styling homepage | H | 2hrs| 4hrs | 4hrs |
| CSS styling feed | H | 3hrs| 4hrs | 4hrs |
| CSS styling form| H | 3hrs| 4hrs | 4hrs |
| CSS styling header/footer | H | 1hr| 6hrs | 6hrs |
| Total | H | 25hrs| 32hrs | 32hrs |

## SWOT Analysis

### Strengths:
I have a clear understanding of CRUD and what I have to do for those requirements. 
### Weaknesses:
I'm still not super clear on whether this design will look good. I might have to change strategies if I implement it and I'm not happy with the visual. I'm also concerned about my time estimates.
### Opportunities:
I'm looking forward to creating a react app from scratch independently to solidy my understanding of the concepts from class.
### Threats:
I tend to spend a lot of time with CSS and styling to see what makes the app look good, but I need to focus on MVP and keep advanced styling for the end so I don't run out of time for MVP.