/* Utility functions to build the GUI elements */

/**
 * Create a list item (<li>) element for an artist dataset
 * using jQuery functions
 * 
 * This is the snippet of HTML we gotta build for every item:
 * <li class="media active">
 *  <div class="media-left">
 *    <img class="media-image" src="https://lastfm-img2.akamaized.net/i/u/64s/f2bd37e1c324dc99dfbfc1a1d862a925.png" alt="Cher">
 *  </div>
 *  <div class="media-body">
 *    <h4>Artist Name</h4>
 *  </div>
 * </li>
 *
 * @param {Artist} artist
 * @return {JQuery}
 */
function createArtistListItem(artist) {
  // create list item
  var $item = $('<li>').addClass('media');

  // create <div>s for image an text
  var $image = $('<div>')
    .addClass('media-left')
    .append(
      $('<img>').addClass('media-image').attr('src', artist.getImage('medium'))
    );
  var $body = $('<div>')
    .addClass('media-body')
    .append(
      $('<h4>').text(artist.getName())
    );

  // now add image and body elements to the list item and set the mbid as data
  $item.append($image, $body).data('mbid', artist.getId());

  return $item;
}


/**
 * Create an album list item using a string template
 *
 * @param {Album} albumData
 * @return {JQuery}
 */
function createAlbumListItem(album) {
  var template = '<div class="album-top">' +
      '<a href="%URL%" target="lastfm"><img class="album-image" src="%IMAGE%" alt="%NAME%"></a>' +
    '</div>' +
    '<div class="album-body">' +
      '<a href="%URL%" target="lastfm">%NAME%</a>' +
    '</div>';

  // set inner HTML of the <li> element from the template string by replacing %XXX% placeholders
  var $item = $('<li>').addClass('album-grid-item').html(
    template
      .replace(/%URL%/g, album.getUrl())
      .replace(/%NAME%/g, album.getName())
      .replace(/%IMAGE%/g, album.getImage('large'))
  );

  return $item;
}


/**
 * Builds the artist listing from the database records
 */
function createArtistList() {
  var $list = $('#artist-listing');
  var artistCount = 0;

  // for each artist in the database, create a list item and append it to our list
  $.each(musicDatabase.artistmatches.artist, function(i, artistData) {
    // TODO: var artist = ?
    $list.append(createArtistListItem(artist));
    artistCount++;
  });

  // write the number of artist into the count badge
  $('#artist-count').text(artistCount);
}


/**
 * Show artist details, biography and released albums on the right-side panel
 *
 * @param {String} mbid
 */
function showArtistDetails(mbid) {
  var $details = $('#artist-details');
  var artist;

  // find the artist data matching the given mbid
  $.each(musicDatabase.artistmatches.artist, function(j, artistData) {
    if (artistData.mbid === mbid) {
      // TODO: artist = ?
      return false;  // break the loop
    }
  });

  // artist not found :-)
  if (!artist) {
    $details.hide();
    return;
  }

  // fill artist details into the according DOM elements
  $details.find('.name').text(artist.getName());
  $details.find('.info').text(artist.getListeners() + ' Listeners');
  $details.find('.link > a').attr('href', artist.getUrl());

  // TODO: $('#artist-bio p').text(artist.getBiography());

  // list artist albums
  listArtistAlbums(mbid);

  $details.show();
}

/**
 * Fetch an list top albums for the given artist
 *
 * @param {String} mbid
 */
function listArtistAlbums(mbid) {
  // clear list of albums first
  var $listing = $('#album-listing').empty();

  // grab all albums from the database with the mbid matching the artist
  $.each(musicDatabase.topalbums.album, function(i, albumData) {
    if (albumData.artist.mbid === mbid) {
      // TODO: var album = ?
      $listing.append(createAlbumListItem(album));
    }
  });
}
