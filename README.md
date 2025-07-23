Welcome! This is my final project required for graduating Coding Bootcamp. It is a really simple app that called Entries, that  was  originally  intended for anonymous journaling of any kind  whether it is venting, or just expressing whats on your mind!

Core Features:
This application allows users to create read, update, and delete their entries. It's set up so that users can read entries created by other users as well. This app doesn't have proper authentication yet but, users can only access their entries  to edit and delete. it features a notebook style UI and and a index for faster data query.

Tech Stack:
For the frontend: React, Vite, and CSS was used.

For the Backend:
Express, Mongodb / Mongoose, and node / nodemon was used 

How to Use:
To run this project you can simply check out the link attached to this repo. 
I tried my best to make the app easy to follow. There are directions and buttons that will guide you through the app.

"Security Logic"/ App Quirks: 
I'm still new to this. I coded for 8 months only. I'm really bad at authentication as I am currently. 
To make up for this I created a way to block other users from editing and deleting the other users entries. the way it is set up is that the backend routes check the user id  and if they match access is granted to edit or delete. that's not real authentication, so there are some quirks  with this. When you create a entry, add a userId , and don't fill out the form, and press save, you'll get an alert. After that, if you click read, you will have access to that id in the read page which means, if you know someone elses id, you can still edit and delete ...
big quirk. 


Notes on Design: 
Eventually I ended up sticking with a notebook design.  
I used a light lavender palette. For the paper background I used a source I linked below.

Future Adjustments: 
I would lke to enhance the styling more by adding icons and adding in media query.
adding actual authentication or a actual way to make every post anonymous  would also be nice 

.

My trello board to see how i tracked my progress:
https://trello.com/b/gP3SLBcg/my-trello-board

The free css  gradient library that i used for the lined paper background:
https://projects.verou.me/css3patterns/#