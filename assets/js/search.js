var searchField = $("#search-field").ghostHunter({
    results     : "#results",
    rss         : "/rss",
    //Enable the "search as you type" by uncommenting the following line
    onKeyUp   : true
});
function clearResults() {
    searchField.clear();
}
