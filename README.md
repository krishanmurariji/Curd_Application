
</head>
<body>
  <h1 style="animation-delay: 0.2s;">🚀 Basic CRUD Application Created with Angular and .NET 🔥</h1>
  <div class="social-links" style="animation-delay: 0.4s;">
    <a href="https://angular.io/" target="_blank" rel="noopener noreferrer"><i class="fab fa-angular"></i></a>
    <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-dot-circle"></i></a>
    <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-bootstrap"></i></a>
  </div>
  <img class="gif" src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="Coding GIF" style="animation-delay: 0.6s;">
  <p style="animation-delay: 0.8s;">Welcome to the exciting world of web development! 🌐 This website will guide you through the process of setting up and running a Basic CRUD (Create, Read, Update, Delete) Application built with Angular and .NET, along with the magic of Bootstrap for styling. Get ready to unleash your coding powers! 💻✨</p>
  <h2 style="animation-delay: 1s;">Prerequisites</h2>
  <p style="animation-delay: 1.2s;">Before we dive in, make sure you have the following installed on your machine:</p>
  <ul style="animation-delay: 1.4s;">
    <li><a href="https://dotnet.microsoft.com/download" target="_blank" rel="noopener noreferrer">.NET SDK</a> (Version 6.0 or later)</li>
    <li><a href="https://nodejs.org/en/download/" target="_blank" rel="noopener noreferrer">Node.js</a> (Version 14.x or later)</li>
    <li><a href="https://angular.io/cli" target="_blank" rel="noopener noreferrer">Angular CLI</a> (Install with <code>npm install -g @angular/cli</code>)</li>
  </ul>
  <h2 style="animation-delay: 1.6s;">Step 1: Run the .NET Solution 🔥</h2>
  <ol style="animation-delay: 1.8s;">
    <li>Open your <code>.sln</code> file in Visual Studio or your preferred .NET IDE.</li>
    <li>Restore NuGet packages if prompted.</li>
    <li>Locate the <code>appsettings.json</code> file and update the connection string with your desired database name. 📝
      <pre><code>"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=YOUR_DATABASE_NAME;Trusted_Connection=True;MultipleActiveResultSets=true"
}</code></pre>
    </li>
    <li>Open the Package Manager Console in Visual Studio.</li>
    <li>Run the following command to create an initial migration:
      <pre><code>Add-Migration InitialCreate</code></pre>
    </li>
    <li>Once the migration is created, run the following command to update the database:
      <pre><code>Update-Database</code></pre>
      This will create the necessary tables in your database based on the models defined in your .NET project. 🏗️
    </li>
  </ol>
  <h2 style="animation-delay: 2s;">Step 2: Set Up the Angular Project ⚛️</h2>
  <ol style="animation-delay: 2.2s;">
    <li>Open a new terminal or command prompt.</li>
    <li>Navigate to the <code>ClientApp</code> directory within your .NET project.</li>
    <li
