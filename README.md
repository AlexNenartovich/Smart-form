Instructions on how to set up and run:

Create an RDS database on AWS. Call it Employees. username: root, password: password
Open Workbench, connect to this RDS database (like we did in lab). Run this query to create a table:

CREATE TABLE `tb_emp` (`id` int(11) NOT NULL AUTO_INCREMENT, `name` varchar(255) DEFAULT NULL,`gender` varchar(255) DEFAULT NULL, `department` varchar(255) DEFAULT NULL, `dob` date DEFAULT NULL, PRIMARY KEY (`id`));

Clone this repo. In Eclipse or Spring IDE create a new Spring starter project and import this repo into your project.
In application.properties file, change spring.datasource.url property: leave jdbc:mysql:// part intact, append your RDS endpoint after //

HOW TO RUN WITHOUT DOCKER
Create a new folder, run npx create-react-app smart-form, wait for it to start. Copy the contents of the "frontend" folder into your React app. In Eclipse or Spring IDE, right click on project -> Run as -> SpringBoot Application. Wait for server to start. Open browser, go to localhost:3000  You will likely need to install dependencies. Once you do, React app should start. Try inserting in RDS database and displaying data.

HOW TO RUN INSIDE DOCKER
Download and install Docker. In Eclipse of Spring IDE, right-click project name -> Run as -> Maven Build... type "package" in a pop-up window, hit Run. It'll take 30 sec or so for Maven to create a jar file. Create a folder anywhere you like, call it anything (let's call it "demo"). Move the created jar file into demo folder. Also, locate a file called Dockerfile, move it to demo folder also. Open Terminal, cd to demo folder and run: docker build -f Dockerfile -t smart-form . (Note: put that last period there - it mean "use current folder"). Wait a bit, Docker will download all necessary stuff. Once docker image is created, in Terminal run (from anywhere): docker run -p 8085:8085 smart-form
Open browser, go to localhost:8085 , you should see React page there. Again, try inserting data to RDS and displaying it.
Once Docker container is running, you can also start previously created React app and access the application from localhost:3000 provided that Docker is running.