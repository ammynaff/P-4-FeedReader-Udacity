/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This loops through each feed in the allFeeds and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('allFeeds have a URL defined and that the URL is not empty string', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeTruthy();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* This loops through each feed in the allFeeds and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all feeds have a url defined and the url is not empty', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.name.length).not.toBe(0);

            });
        });
    });


    /* New test suite named "The menu" */

    describe('The menu', function() {

        /* This test ensures the menu element is
         * hidden by default on page load.
         */
        it('menu element is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });


        /* This test if the menu visibile when the menu icon is clicked 
         * and if it hides when clicked again.
         */
        it('menu changes visibility when clicked', function() {
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(false);

            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        })
    });

    /* New test suite named "Initial Entries" */

    describe('Intial Entries', function() {

        /* This test ensures that the loadFeed
         * function is called and the HTML contains at least a feed with entry.
         */

        beforeEach(done => {
            loadFeed(0, done);
        });

        it('least a single entry within the feed container', function() {
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });

    /* TODO: New test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {


        /* This test ensures a new feed is loaded
         * by the loadFeed function and the content actually changes.
         */

        let feedOne,
            feedTwo;

        beforeEach(function(done) {
            // load first feed
            loadFeed(0, function() {
                feedOne = $('.feed').html();

                // Load second feed
                loadFeed(1, function() {
                    feedTwo = $('.feed').html();
                    done();
                });
            });

        });

        it('when a new feed is loaded by the content actually changes', function() {
            expect(feedOne === feedTwo).toBe(false);
        });
    });

}());