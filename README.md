
```markdown
# Image Gallery Application

This project is a web-based **Image Gallery Application** built using **Node.js**, **Express.js**, **EJS** templating engine, and
the **Pixabay API**. The application allows users to search for images by keyword and view results dynamically rendered on a
web page.

## Features

- User-friendly input form for keyword-based image searches.
- Integration with the Pixabay API to fetch images based on user input.
- Dynamic rendering of image results using EJS templates.
- Responsive design for a clean and accessible user interface.
- Server-side validation for user inputs.
- Supports both **Fetch API** and **Axios** for external API calls.

---

## Project Structure

The project files are organized as follows:

```
project-root/
├── views/                    # EJS templates
│   ├── imageGallery2.html    # Initial HTML for form
│   ├── imageGallery3.ejs     # EJS template for displaying image results
├── public/                   # Static assets (if applicable)
├── server.js                 # Main server file
├── package.json              # Project dependencies and metadata
├── package-lock.json         # Dependency lock file
├── README.md                 # Project documentation
```

---

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (version 16 or later)
- **npm** (Node Package Manager)

---

## Installation

Follow these steps to set up the project on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/image-gallery.git
   cd image-gallery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

### 1. Start the Server
Run the following command to start the server:
```bash
node server.js
```

The server will start on `http://localhost:3000`.

### 2. Access the Application
- Open a browser and navigate to `http://localhost:3000`.
- Enter a **keyword** (e.g., "nature") and the **number of images** (minimum 2) in the form.

### 3. View Results
- Submit the form to view the dynamically rendered image gallery.
- Each result includes the image, tags, user name, and a direct URL to the image on Pixabay.

---

## Testing with [Postman](https://www.postman.com/)

### Endpoint: `/search`

1. **Method**: `POST`
2. **Headers**:
   ```
   Content-Type: application/x-www-form-urlencoded
   ```
3. **Body**:
   - `keyword`: Search keyword (e.g., "flowers").
   - `numImages`: Number of images (minimum 2).

---

## Technologies Used

- **Node.js**: Backend runtime for JavaScript.
- **Express.js**: Web framework for building the server.
- **EJS**: Templating engine for dynamic HTML rendering.
- **Pixabay API**: Source of image data.
- **Fetch API & Axios**: For making HTTP requests to external APIs.

---

## File Highlights

### `server.js`

This is the main server file, responsible for:

- Serving the static form (`imageGallery2.html`).
- Handling the `/search` endpoint.
- Validating user inputs.
- Fetching data from the Pixabay API using either Fetch API or Axios.
- Rendering dynamic results using `imageGallery3.ejs`.

---

## Known Issues and Improvements

- **Validation**: Further enhancement of user input validation could be added.
- **Styling**: Responsive design improvements for mobile screens.
- **Error Handling**: Provide user-friendly error messages for API failures or server-side issues.

---

## Credits

- **Pixabay API**: For providing free image data.
- **Node.js & Express.js**: For powering the backend.
- **EJS**: For dynamic HTML rendering.

---

## License
MIT License

Copyright (c) 2024 Nabeel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
