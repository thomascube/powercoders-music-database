# jQuery Exercise: The Powercoders Music Database

The purpose of this single-page application is to provide a search interface 
for music artists and displaying biography, discography as well as other artists 
similar to a selected one.

## Preparation

First: Get yourself familiar with the [jQuery API documentation](http://api.jquery.com/)
and the world of [JavaScript objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

Second: Fork this repository into your Github account and then clone your copy onto your computer using git bash.

## Implementation

We'll start out with building the listing of artists from a static mockup database. 
From the listing one can select an artist which will then display additional information 
as well as an album list on the right side of the screen.

The resulting view with example data and yet without any interactivity can be seen 
in the `examples/static.html` file.

### Contents of this repository

The `index.html` file contains the empty template where you shall now add contents using 
jQuery DOM operations. It already loads the jQuery library as well as Bootstrap for basic 
layout styling.

Application stylesheets go into `css/styles.css` and the actual application code 
is structured into different files inside the `js` folder:

* `objects.js`: Constructors and prototypes for object classes.
* `functions.js`: Rendering functions to read and display the data.
* `app.js`: The application startup code. Keep it short.

The static mockup database is located in `js/mock-data.js`.

### 1. Assignment: Object prototypes

Look at `index.html` and identify the DOM nodes where contents from the database is to be added. 
There are `<!-- comments -->` within the file indicating those places.

Look at the already existing functions in `js/functions.js` and identitfy the object prototypes
used there. Hint: look out for things like `artist.getName()` or `album.getImage()`.

Analyze the structure and contents of the mockup database in `mock-data.js`.

Now implement the object constructors in `objects.js` and try to add the necessary 
prototype functions used the by rendering functions.

Start with a base constructor `APIRecord` which takes a plain object as argument which
contains a record (e.g. for an artist or an album) from the database mockup.

In `functions.js` create instances using the `APIRecord` constructor with the data
retrieved from the mockup database. Pass these instances as argument to the rendering
functions `createArtistListItem()` and `createAlbumListItem()`.

#### Hints

* Search for `TODO:` in the JavaScript files to find all the places where there's something to be added.
* Open the page in the browser and check the error console to see what's missing.

### 2. Assignment: Class inheritance

Although artists and albums have several things in common (name, url, image) they're not
quite the same. We shall now use the power of class and prototype inheritance by defining
individual constructors for both `Artist` and `Album` which inherit common prototype functions
from `APIRecord` but add individual getter methods to the specialized prototypes. An example
how to achieve this can be found in the [MSDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Examples).

The `Artist` prototype should get methods for fetching the number of listeners and the artist's biography.

The `Album` prototype shares all its methods with the `APIRecord`.

Finally replace all constructor calls to `APIRecord` in the `functions.js` file with the
new specialized constructors.

### 3. Assignment: Show artist details on click

Now it's time to add some interactivity! As shown in the example, there are artist details
to be shown on the right side of the screen. The function to render these details is already there:
`showArtistDetails()` but yet needs to be called whenever one clicks an artist in the list.

In `app.js` register a delegate (!) click handler using jQuery which will do the following:

1. Remove the `active` class from the list item which currently has that class set.
2. Render the artist details by calling the appropriate function with the unique identifier of the clicked artist.
3. Set the `active` class to the clicked list item.

### 4. Assignment: Get the data from the last.fm API

TBD.

