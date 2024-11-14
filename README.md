# Getting Started with Create React App

npx create-react-app anabort

cd anabort

# Folder structure
```
anabort/
├── public/
│   ├── index.html                  # Root HTML file
│   └── assets/                     # Folder for static assets (images and videos)
│       ├── images/
│       │   ├── image1.jpg
│       │   └── image2.jpg
│       └── videos/
│           └── video1.mp4
├── src/
│   ├── components/                 # Shared components, like Navbar
│   │   ├── Navbar.js
│   │   └── Navbar.css
│   ├── pages/                      # Pages for each section of the site
│   │   ├── About.js                # About page component
│   │   ├── About.css               # About page CSS
│   │   ├── Gallery.js              # Gallery page component
│   │   ├── Gallery.css             # Gallery page CSS
│   │   ├── Videos.js               # Videos page component
│   │   ├── Videos.css              # Videos page CSS
│   │   ├── Donate.js               # Donate page component
│   │   └── Donate.css              # Donate page CSS
│   ├── App.js                      # Main application component
│   ├── index.js                    # Entry point for the React app
│   └── styles/
│       └── main.css                # Global styles for the entire application
└── package.json                    # Project dependencies and scripts
```

## If you haven’t already, install React Router:

npm install react-router-dom

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Adding Images

Place any images you want to use in the public/assets/images directory. These images can be referenced in various pages such as the Gallery or About page.

## Adding Videos

Place video files in the public/assets/videos directory. You can customize the Videos page to include any new video files you add here.

## Note
Feel free to update, replace, or expand the content with additional images and videos as needed. This allows you to customize the site’s content to better suit your audience and project requirements.

