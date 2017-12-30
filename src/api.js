// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const PlayerAPI = {
    players: [
        {
            number: 1,
            name: "Fight Club ",
            date:"1999",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            shortDes: "Drama ",
            rating:"8.8",
            url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
        },
        {
            number: 2,
            name: "Nemo",
            date:"2003",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            shortDes: "Action",
            rating:"8.1",
            url: "https://i1.wp.com/www.stunningmesh.com/wp-content/uploads/2011/05/stunningmesh-3d-movie-poster-64.jpg?w=618"
        },

        {
            number: 3,
            name: "E.T",
            date:"1982",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            shortDes: "Sci-fi",
            rating:"7.9",
            url: "https://i.pinimg.com/736x/05/94/c9/0594c9f0ee9bd01dec087f548e03db58--best-movie-posters-classic-movie-posters.jpg"
        },

        {
            number: 4,
            name: "This Gun For Hire",
            date:"1942",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            shortDes: " Crime, Drama, Film-Noir ",
            rating:"7.5",
            url: "https://upload.wikimedia.org/wikipedia/en/4/4d/This_Gun_For_Hire_movie_poster.jpg"
        },
        {
            number: 5,
            name: "Dead Pool",
            date:"2016",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            shortDes: "Action",
            rating:"8.0",
            url: "https://i.pinimg.com/originals/cf/d0/1d/cfd01d0893b8f9d881e885aed283c795.jpg"
        },
        {
            number: 6,
            name: "The Mask",
            position: "F",
            date:"1999",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            shortDes: "Comedy",
            rating:"6.9",
            url: "https://i.ytimg.com/vi/TgVb69WykQk/movieposter.jpg"
        },   {
            number: 7,
            name: "The Godfather",
            position: "F",
            date:"1972",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            shortDes: " Crime, Drama",
            rating:"9.2",
            url: "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,700,1000_AL_.jpg"
        },   {
            number: 8,
            name: "The Dark Knight",
            date:"2008",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            shortDes: "Action, Crime, Drama ",
            rating:"9.0",
            url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
        },  {
            number: 9,
            name: "Schindler's List ",
            date:"1993",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            shortDes: " Biography, Drama, History  ",
            rating:"8.9",
            url: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
        },  {
            number: 10,
            name: "Pulp Fiction",
            date:"1994",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            shortDes: " Crime, Drama ",
            rating:"8.9",
            url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg"
        },  {
            number: 11,
            name: "The Lord of the Rings: The Return of the King",
            date:"2003",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            shortDes: "Adventure, Drama, Fantasy ",
            rating:"8.9",
            url: "https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SY1000_SX668_AL_.jpg"
        },  {
            number: 12,
            name: "The Good, the Bad and the Ugly ",
            date:"1966",
            des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            shortDes: " Western ",
            rating:"8.9",
            url: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SY1000_CR0,0,656,1000_AL_.jpg"
        }
    ],
    all: function () {
        return this.players
    },
    small:function () {
        return this.players.slice(0 , 8);
    },
    get: function (id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}

export default PlayerAPI
