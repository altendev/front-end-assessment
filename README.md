# Front-end Assessment
Create a simple image gallery grid page with an on-click event for the images that opens an overlay pop-up with a short description (A paragraph of three to four lines) about the image clicked. 

### What do you need to do
- Divide the page into 4 columns with an unknown number of rows.
- Columns are equal in size with 10px spacing between them and the spacing between rows is always 10px.
- In every column 1 image is displayed with the title below.
- you can use placeholder images generated from placehold.it, images can be either portrait (150px X 200px) or landscape (200px X 150px), but you don’t know that upfront. A row can thus have only landscape, only portrait, or a mix of landscape and portrait images, thus, rows can have unequal height.
- images and titles are aligned in the center of the column, the title is 5px below the image.
- The maximum width of the overlay pop-up is 600px, this pop-up will appear when an image is clicked.
- You are free to add subtle transitions and/or animations.

### What NOT to use
1. CSS Front-end frameworks such as Bootstrap and Foundation.
2. Javascript libraries and plugins such as jquery.

### What we will look at
1. The validity semantics of the HTML5 created and how are accessibility, usability and SEO considered in the code.
2. The cross browser compatibility (ie 10 and higher).
3. Responsiveness of the page.
4. The structure of the CSS.
5. The structure and pattern used in the created JavaScript file/s.
6. The user interface and user experiance of the page
7. The structure of the project folders and files.

**Note: You can do the assessment using reactjs.**

### Presenting your solution
After completing the assessment please push your branch and let us know by a pull request, you can override this readme file with yours that may include information about your solution, file structure, etc.

### Installion
1. Make sure you install the latest version of node.
2. Open the terminal in the project directory and run 'npm install' to install libraries and dev dependencies.
3. In the terminal run 'npm run build' to build the project.
4. Browse the index.html located in the project directory.

### Notes
- Please Note that I am using sass webpack loader which compiles and bundles the sass in the bundled javascript file located in the dist folder