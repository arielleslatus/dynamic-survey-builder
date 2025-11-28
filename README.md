# dynamic-survey-builder

To run this project locally, cd into dynamic-survey-builder-app and 'npm run dev'.

Small, reusable components are located in the /components directory.
Larger components are located in the /templates directory.
A question form hook is located in the /hooks directory. This is used managing state when both adding and editing questions.

Given more time, I would flesh out the ui quite a bit more and would probably do some refinement on my data models for Question and Answer as that part feels a bit clunky right now. If I had a backend for this project I would probably move the logic for populating the json responses in the preview modal to the backend. And then instead of showing just json responses, I would come up with a nice ui for displaying that data.
