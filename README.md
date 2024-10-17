Build a "User Management Dashboard" web app using React Router. The app will allow navigation between different views such as a Home Page, User List, User Details (using route parameters), and a Dashboard with nested routes for Profile and Settings.

You will also implement programmatic navigation based on certain actions.

1. Set Up Basic Routing:- Create a React app and set up React Router.- Define routes for the following pages: - Home (/) - User List (/users) - User Details (/users/:id)Bonus: - Add a 404 Not Found page for undefined routes.

2. Route Parameters: Dynamic User Details Page:- On the User List page, display a list of users with links to their individual detail pages.- When a user clicks on a user’s name, navigate to the User Details page (/users/:id) where the details of that specific user (based on id) will be displayed.Keep the data for the users in a JSON file and read from there.

3. Nested Routing: Dashboard with Profile and Settings- Create a Dashboard route (/dashboard) with two nested routes: - Profile (/dashboard/profile) - Settings (/dashboard/settings)- Display the Profile and Settings components inside the Dashboard layout using the Outlet component.

4. Programmatic Navigation:- Add a Login button to the Home page.- When the user clicks the Login button, simulate a successful login by programmatically navigating the user to the Dashboard page (/dashboard).

Please post a screenshot of your application along with code when submitting
