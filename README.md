🚀 Basic CRUD Application Created with Angular and .NET 🔥
![image](https://github.com/krishanmurariji/Curd_Application/assets/144571603/f1e350d8-684e-4fb0-bf88-7d3a503dbe9b)
![image](https://github.com/krishanmurariji/Curd_Application/assets/144571603/df14427b-1fe8-4108-b4e9-89938f9b247f)
![image](https://github.com/krishanmurariji/Curd_Application/assets/144571603/12268785-fb65-4385-b7b8-7a6312ffd662)



<p align="center"> <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="Coding GIF" width="300"> </p>
Welcome to the exciting world of web development! 🌐 This readme file will guide you through the process of setting up and running a Basic CRUD (Create, Read, Update, Delete) Application built with Angular and .NET, along with the magic of Bootstrap for styling. Get ready to unleash your coding powers! 💻✨

Prerequisites
Before we dive in, make sure you have the following installed on your machine:

.NET SDK (Version 6.0 or later)
Node.js (Version 14.x or later)
Angular CLI (Install with npm install -g @angular/cli)
Step 1: Run the .NET Solution 🔥
Open your .sln file in Visual Studio or your preferred .NET IDE.
Restore NuGet packages if prompted.
Locate the appsettings.json file and update the connection string with your desired database name. 📝
json


Copy code
"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=YOUR_DATABASE_NAME;Trusted_Connection=True;MultipleActiveResultSets=true"
}
Open the Package Manager Console in Visual Studio.
Run the following command to create an initial migration:

Copy code
Add-Migration InitialCreate
Once the migration is created, run the following command to update the database:

Copy code
Update-Database
This will create the necessary tables in your database based on the models defined in your .NET project. 🏗️
![image](https://github.com/krishanmurariji/Curd_Application/assets/144571603/b760f210-c588-47e4-a4db-c88e04ae202c)

Step 2: Set Up the Angular Project ⚛️
Open a new terminal or command prompt.
Navigate to the ClientApp directory within your .NET project.
Run the following command to install the required Node.js packages:

Copy code
npm install
If you encounter any issues during installation, try running npm install --force to force the installation of packages.

Once the installation is complete, start the Angular development server with the following command:

Copy code
ng serve
This will compile the Angular application and launch it in your default browser at http://localhost:4200/. 🌐

Step 3: Enjoy the Application! 🎉
Congratulations! 🥳 You have successfully set up the Basic CRUD Application with Angular and .NET. You can now:

Create new records
Read existing records
Update records
Delete records
Feel free to explore the application, make modifications, and enhance it according to your needs. 🚀

Stay Connected 📶
Let's stay in touch! You can find me on various social media platforms:

<a href="https://linkedin.com/in/krishan-murari/" target="_blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="Krishan_murari" height="30" width="40" /></a>
&nbsp;
<a href="https://twitter.com/KrishanMuraari" target="_blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Krishan_murari" height="30" width="40" /></a>
&nbsp;
<a href="https://www.instagram.com/krishanmurariji/" target="_blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="Krishan_murari" height="30" width="40" /></a>
&nbsp;


Happy coding! 💻💖
