// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const CategoryAPI = {
    Category: [
        {number: "Action"},
        {number: "Drama"},
        {number: "Comedy"},
        {number: "Crime"},
        {number: "Sci-fi"},
        {number: "Noir"},
        {number: "Western"},
        {number: "Fantasy"},
        {number: "Adventure"},
        {number: "Biography"},

    ],
    all: function () {
        return this.Category
    },
    get: function (id) {
        const isCate = p => p.number === id;
        return this.Category.find(isCate)
    }
}

export default CategoryAPI
