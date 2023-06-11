# Random User Display Website

This is a website that displays random user data obtained from the Randomuser.me API. Users can click on a button to fetch and display a new random user's information. When refreshing this site users data will be changed.

## Technologies Used

- React Js 
- TailwindCSS
- Axios
- Randomuser.me API

## Installation

1. Clone the repository: `git clone https://github.com/your-username/random-user-display-website.git`
2. Navigate to the project directory: `cd random-user-display-website`
3. Open the `index.html` file in your preferred web browser.

## Usage

1. Listing the users on UI.
2. Click on the user and display random user's information on top.
3. Easy to use on mobile phones cause its responsive.

## API Integration

This website integrates with the Randomuser.me API to fetch random user data. The API returns a JSON response containing various user details, such as name, email, phone, picture, etc. The JavaScript code in the project makes an axios request to the API endpoint and extracts the relevant data to display on the webpage.

## Example Code Snippet

```javascript
// Fetch a random user from the Randomuser.me API
 useEffect(()=>{
    axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20').then(response=>{
      console.log(response.data.results);
      setUsers(response.data.results);
    }).catch(function(err){
      console.log(err)
    })
  }, [])
