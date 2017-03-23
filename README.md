# jQuery Exercise: The Powercoders Music Database

The purpose of this single-page application is to provide a search interface 
for music artists and displaying biography, discography as well as other artists 
similar to a selected one.

## Preparation

First: Get yourself familiar with the [jQuery API documentation](http://api.jquery.com/).

Second: Clone this repository onto your computer using git bash.

```
git clone https://github.com/thomascube/powercoders-music-database.git
cd powercoders-music-database
```

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
is to be added to `js/app.js`.

The static mockup database is located in `js/mock-data.js`.

### 1. Assignment

Look at `index.html` and identify the DOM nodes where contents from the database is to be added. 
There are `<!-- comments -->` within the file indicating those places.

Then load the mockup database into the document and analyze its structure.

1. When the page loads, start with building the artist listing from the database data. 
Identify which properties to use and loop over all artists in the database. For each artist, 
add a list item showing the name and an image as shown in the example.
2. Register a `click` event handler to those list elements which will update the artist details 
on the right side with information from the mockup database matching the clicked artist.
3. Add the necessary event handlers and actions to make the tabs "Biography", "Albums" and "Similar Artists" 
work as you'd expect it.

Please organize your code into different functions like `createArtistList()` or `showArtistDetails()`.
Define the appropriate arguments those functions shall receive and avoid the use of global variables.
Always remember the best practices ;-)

#### Hints

The HTML template as well as the application stylesheet is only a suggestion and you can and 
should alter it in order to work best for the manipulations with jQuery. This may include changing or 
adding `class` or `id` attributes on the elements that will be updated by your code.

Be creative and look around, maybe Bootstrap or jQuery provide some functions that could save you 
from coding all by yourself.

