Welcome! This is my final project required for completing the software engineering program at PerScholas.
 This is a simple app that called Entries, built for journaling of any kind, whether it is venting, or just expressing whats on your mind!

Core Features:
This application allows users to create, read, update, and delete their entries. Users can also read entries created by other users. This app doesn't have proper authentication yet, but users can only access their entries to edit and delete. 
It features a notebook style UI and and an index for faster data queries.

Tech Stack:
Frontend: React, Vite, and CSS.
Backend: Express, MongoDB/Mongoose, and Node.js/Nodemon. 

How to Use:
To run this project, check out the link attached at the bottom.
I designed the app to be easy to follow. There are directions and buttons that will guide you through everything.

"Security Logic"/ App Quirks: 
I'm 8 months into coding and have a lot to learn about authentication so in the meantime, I created a way to check ownership of the posts made.
This way users are blocked from editing and deleting the entries that don't belong to them. I set it up so that the backend routes check the user id, and if they match access is granted to edit or delete. That's not real authentication, so there are some quirks that come along with this: When you create an entry, add a userId, and don't fill out the form, and press save, you'll get an alert. After that, if you click "Read", you will have access to that id on the Read page which means, if you know someone else's id, you can still edit and delete other peoples posts...

There is another issue im trying to fix with the deployment process where the refresh returns a white screen without any errors in the console. If you use the deployed version of this app, there is a possibility that you may face the white screen of death if you refresh on the read section. If it doesn't happen, that means I fixed it.

Notes on Design: 
Eventually I settled on a notebook design.  
I used a light lavender palette. For the paper background I used a CSS gradient library source I linked below.

Future Adjustments: 
I would like to enhance the styling more by adding icons and adding in media query to fit smaller screens.
Adding actual authentication or a actual way to make every post truly anonymous would also be nice.

Link to the deployed app:
https://capstone-frontend-0pva.onrender.com/home

My trello board to see how I tracked my progress:
https://trello.com/b/gP3SLBcg/my-trello-board

The free css gradient library that I used for the lined paper background:
https://projects.verou.me/css3patterns/#

If you got this far, thanks for reading and please enjoy!
