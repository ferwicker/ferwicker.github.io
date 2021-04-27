const ProjectsInfo = [
{
    name: 'teamspark',
    title: 'TeamSpark⚡',
    deployed: 'https://ferwicker.com/team-spark/',
    repo: 'https://github.com/ferwicker/team-spark',
    screenshot: 'teamspark-screenshot.jpg',
    screenshot2: '',
    technologies: ['React', 'Javascript', 'Bootstrap'],
    intro: 'TeamSpark is an employee directory management app that helps organisations with a team spread accross multiple locations access their employees contact details easily.',
    description: <div><p>With workplaces changing rapidly and more people working from home or remotely than ever before, organisations need a way to easily access everyone's contact details to make day to day communication easier. TeamSpark⚡ aims to facilitate this with a central company directory that everyone in the organisation can access.</p>
        <p>This app displays the team list on a table with the main fields always visible, view each person's full details, search employees by first name, last name or city, filter the table by state and sort by either first or last name.</p>
        <p>Future updates for this application include user logins, adding your own database of employees and having more useful fields to search and filter from.</p>
        </div>,
    featured: true
},
{
    name: 'message-wall',
    title: 'Message Wall',
    deployed: 'https://infinite-eyrie-69847.herokuapp.com/',
    repo: 'https://github.com/ferwicker/message-wall',
    screenshot: 'message-wall-image.jpg',
    screenshot2: 'message-wall-mobile.png',
    technologies: ['Node.js', 'Express', 'MySQL', 'Javascript', 'Handlebars', 'Masonry'],
    intro: 'Taking inspiration from the ‘Before I Die’ global art project, this app provider digital “walls” for people to post their messages anonymously & read what others have written.',
    description: <div><p>Before I Die is a global art project that invites people to reflect on death and share their personal aspirations in public. Originally created by Candy Chang in New Orleans after the death of a loved one, there are now over 5,000 walls around the world. <a href='https://beforeidieproject.com/' target='_blank'>Learn more about Before I Die.</a></p>
    <p>The app has a remote server and a remote database using JawsDB to save messages. The users modify the database by adding new messages, and make call to retrieve them according to category by choosing a wall.</p>
    <p>This app is built using node.js, express, MySQL, with Handlebars as the templating language to render the database information, and front end javascript to link the functionality.</p>
    <p>Future developments will include the ability to like messages, real time loading, adding validation to restrict inappropriate content.</p>
    </div>,
    featured: false
},
{
    name:'eat-da-burger',
    title:'Eat-Da-Burger',
    deployed:'https://shrouded-brook-04183.herokuapp.com/',
    repo:'https://github.com/ferwicker/burger',
    screenshot: 'burger-image.jpg',
    screenshot2: 'burger-mobile.png',
    technologies: ['Node.js', 'Express', 'MySQL', 'Javascript', 'Handlebars'],
    intro: `Eat-Da-Burger is a web application that allows users to save burgers to the database, they can then 'devour' the burgers and move them to the other column. This all makes changes to the remote database in the back end.`,
    description: <div><p>Eat-Da-Burger is a full stack web application deployed on Heroku. The application allows users to add their dream burgers to the database, and to mark them off as 'Devoured'.</p>
    <p>The app has a remote server and a remote database using JawsDB to save burger items. The users modify the database by adding new burgers and modifying them from 'to devour' to 'devoured!'.</p>
    <p>This app is built using node.js, express, MySQL, with Handlebars as the templating language to render the database information, and front end javascript to link the functionality.</p>
    <p>Future developments will include the ability to delete burgers from the list and to move them back to the 'to devour' column.</p>
    </div>,
    featured: true
},
{
    name:'weather-dashboard',
    title:'Weather Dashboard',
    deployed:'http://ferwicker.com/weather-dashboard/',
    repo:'https://github.com/ferwicker/weather-dashboard',
    screenshot: 'weather-dashboard.jpg',
    screenshot2: 'weather-mobile.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'JQuery'],
    intro: `This simple but pretty weather dashboard lets you search cities and display their current weather and forecast. Mobile friendly design is ideal to search the weather on the go, it is also perfect to display at TV size in offices or travel agencies. Your search history is automatically saved so you're favourite cities are always just a click away.`,
    description: <div><p>This weather dashboard presents basic weather information for any city in the world in a visually pleasant format and is easy to use.</p>
    <p>This project uses the OpenWeatherMap API to retrieve and display real time weather information and a 5 day forecast when a city is searched. Other features include automatically saved search history, get a city's weather information when clicked from the history, delete individual cities from the list or clear the whole search history.</p>
    <p>It features a modern and minimalist design with gentle colours, and icons from fontawesome to replace the standard OpenWeatherMap icons.</p>
    </div>,
    featured: false
},
{
    name:'travlmate',
    title:'Travlmate',
    deployed:'https://ffakih5.github.io/Travelmate/',
    repo:'https://github.com/ffakih5/Travelmate/',
    screenshot: 'travlmate.jpg',
    screenshot2: 'travlmate-mobile.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'UI Kit', 'JQuery'],
    intro: `Travlmate is a website for travellers to aid in the planning of their trips, with a handy dashboard that displays useful information in one screen and a save function to access the information of your favourite countries in one place.`,
    description: <div><p>Travlmate was a collaboration project, built using HTML, CSS and Javascript with UI Kit as a CSS framework adn JQuery, and information from three different API's to gather the information that gets dynamically displayed.</p>
    <p>The features include searching countries, saving and unsaving searched, displaying neighbouring countries and their information. The information displayed includes the country's basic information, travel advice, drinking water, average weather per month, and a real time currency convertor between the 10 most common currencies and the searched country's currency.</p>
    <p>You can access your saved countries from the drop down nav and delete them with the trash button or by unchecking the bookmark icon from the country's information page.</p>
    </div>,
    featured: true
},
{
    name:'daily-planner',
    title:'Daily Planner',
    deployed:'http://ferwicker.com/day-planner/',
    repo:'https://github.com/ferwicker/day-planner',
    screenshot: 'DAILY-PLANNER.jpg',
    screenshot2: 'daily-planner-mobile.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'JQuery'],
    intro: `Our work days move FAST, and it is often hard to keep track of the day as a big picture. Paper journals are easy to jot on, and online calendars such as Google Calendar help us keep track of events with our coworkers, but neither of these options offers a super simplified view of our day and to do's that we can easily edit for our own use. This planner aims to provide a solution for this. With easily editable time blocks for notes and events, it offers the best of paper and online planners.`,
    description: <div><p>The design and layout of this application are created with usablity and ease on the eyes for long term and seamless use within your day. The colours are calm and pleasing, the layout presents your day as a whole, with a separate section for to do's that don't fit in any one hour of the day, so they are not forgotten.</p>
    <p>The features include a to-do list for items that do not fit neatly into time slots, real time clock updates, random quotes to motivate your day, expanding time slots to fit all your notes without needing to scroll and auto save of all your inputs.</p>
    <p>Although previous versions of this project used individual 'Save' buttons for each hour block to save events, I found during testing that this method was not very user friendly for daily use.</p>
    <p>The planner is thought mainly for desktop use at work, but also has a mobile friendly layout to use on the go.</p>
    </div>,
    featured: false
},
{
    name:'code-quiz',
    title:'Code Quiz',
    deployed:'http://ferwicker.com/code-quiz/',
    repo:'https://github.com/ferwicker/code-quiz',
    screenshot: 'code-quiz.jpg',
    screenshot2: 'quiz-mobile.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    intro: `This project presents a fun and easy to use quiz to gamify learning of HTML, CSS and Javascript. The High Scores function helps make this even more fun by allowing the user to compete with friends for the highest score!`,
    description: <div>
    <p>As with every project, the first step is doing some brainstorming about possible approaches and putting some ideas down on paper as rough (very rough!) sketches.</p>
    <p>The next step is the design, which as a graphic designer is so much fun! I mock up the application on Adobe XD. For this project, I used a mobile-first approach to ensure the best experience on all screen sizes.</p>
    <p>The main challenge during the development of this project was the questions displaying and being checked. Although the initial working application used a form with radio buttons and a 'Next' button, the final version uses dynamically modified HTML and event listeners on the answers themselved to check. This simplifies the user experience and allows for faster play.</p>
    <p>The quiz has a 60 second timer and score counter. When a user chooses the correct answer, the score goes up by one, when the answer is wrong, the time left decreases by 5 seconds. At the end of the quiz, the user inputs their name to save the score to local storage and the High Scores are displayed on the screen. The user can clear the scores or play again.</p>
    </div>,
    featured: false
},
];

export default ProjectsInfo;

/* add new projects
{
    name:'',
    title:'',
    deployed:'',
    repo:'',
    screenshot: '',
    screenshot2: '',
    technologies: [],
    intro: '',
    description: ``,
    featured: false
},
*/