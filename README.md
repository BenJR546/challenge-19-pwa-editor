# Just Another Text Editor (J.A.T.E)

## Description

J.A.T.E is a Progressive Web Application (PWA) that provides a robust text editing experience directly in the browser. The application is designed to work both online and offline, leveraging service workers and IndexedDB for data persistence and offline functionality. J.A.T.E is a single page application that meets all of the PWA criteria and offers features like syntax highlighting with CodeMirror, data saving in IndexedDB, and installation capability as a desktop application.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Features](#features)
-   [Technologies](#technologies)
-   [Deployment](#deployment)
-   [License](#license)
-   [Contributing](#contributing)
-   [Questions](#questions)

## Installation

To set up the application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/BenJR546/challenge-19-pwa-editor
```

2. Navigate to the project root directory:

```bash
cd challenge-19-pwa-editor
```

3. Install the project dependencies:

-   From root:

```bash
npm install
```

4. Build the client:

```bash
npm run build
```

5. Start the server:

```bash
node server/server.js
```

## Usage

1. Open the application

Open your browser and navigate to `http://localhost:3000`.

2. Use the editor

-   Type any text or code into the editor
-   The application supports syntax highlighting for JavaScript

3. Data persistence

-   The content you enter is automatically saved to IndexedDB.
-   If you refresh the page or close and reopen the browser, your content will persist.

4. Install the PWA

-   Click the "Install!" button in the navigation bar.
-   Follow the prompts to install the application on your desktop.
-   Once installed, you can run it as a standalone application.

5. Offline Functionality

-   The application is fully functional offline.
-   Service worksers cache assets and pages, allowing usage without an internet connection.

## Features

-   **Progressive Web Application:** Installable and provides offline functionality
-   **IndexedDB Integration:** Saves and retrieves content locally for data persistence
-   **Service Workers:** Caches assets for offfline use
-   **Webpack Bundling:** Efficient asset bundling and optimization.
-   **Babel Transpiling:** Uses next-gen JS while ensuring browser compatibility.
-   **CodeMirror Integration:** Provides a rich text editor interface with syntax highlighting

## Technologies

-   **Frontend:**
    -   HTML
    -   CSS
    -   JavaScript (ES6+)
    -   CodeMirror
    -   Webpack
    -   Babel
-   **Backend:**
    -   Node.js
    -   Express.js
-   **PWA Tools:**
    -   Workbox (for service workers)
    -   WebpackPwaManifest Plugin
-   **Data Storage:**
    -   IndexedDB (via `idb` library)

## Deployment

This application is currently deployed on Render. You can find it [here](https://challenge-19-pwa-editor-1.onrender.com/).

## License

This project is unlicensed and is not intended for commercial use.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## Questions

If you have any questions or need further assistance, please Contact:

-   Benjamin Rice
-   **Email:** [benjrice546@gmail.com](mailto:benjrice546@gmail.com)
-   **GitHub:** [My GitHub Profile](https://github.com/BenJR546)
