/* Objects and prototypes definitions */

/**
 * Constructor for a basic last.fm API data object class
 *
 * @param {Object} data Plain object with API data
 */
function APIRecord(data) {
  // TODO: implement this constructor
  
}

// define prototype functions common to all APIRecord objects
APIRecord.prototype = {
  /**
   * Getter for the `name` property
   *
   * @return {String}
   */
  getName: function() {
    return this.data.name;
  },

  // TODO: add more getter functions for
  // - the unique identifier (id)
  // - the url property
  // - an artist/album image (add size as argument)
};

// TODO: for assigmnet 2, define two more constructors `Artist` and `Album`
