# pocwebsite-user-management

This is a usermanagement system built using Spring framework for backend, Angular framework for frontend and MySQL for database requirements. The user has the following functionalities: login, register, update, delete and list all users. 

## Approach

### Backend
I created a basic spring project through Spring Initializer website with the required dependencies. For database I setup MySQL database and setup its credentials in the spring project. I created necessary packages in the project. I used IntelliJ IDE and Visual Studio Code for the entire project.

I created the user entity with basic details for object representation. I created a corresponding UserRepository which extendds Jparepository for CRUD functionalities.

I then created UserService class which uses UserRepository to handle required functionalities.

For the REST endpoints I created a UserController class. It handles the routing of the incoming requests to its corresponding function.

And finally for security, I used Spring Security and Java JWT dependencies. I created authentication and authorization functionalities for it.

### Frontend
Since I use Angular for frontend functionalities, I created the required components of login, register, update, delete and users. I then connected the components by setting up the routes from one component to other. For example users component would route to update and delete component. I then created a basic CSS for the webpages.

## Images

###Endpoints Testing Images
