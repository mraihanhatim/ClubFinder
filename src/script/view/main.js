import '../component/club-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

var main = function () {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = () => {
        DataSource.searchClub(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };
    
    var renderResult = function (results) {
        clubListElement.clubs = results;
    };

    var fallbackResult = function (message) {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};


export default main;