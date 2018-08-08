class Movie {
    constructor(){

    }


    static findAll(){
        return Movie.data;
    }

}
Movie.data = [
    {
        id : 1,
        name : "Atharintiki Daredi",
        info : "sentimental,comedy",
        images : "AD",
        Watched : true,
        isRecommended : true
    },
    {
        id : 2,
        name : "DJ",
        info : "Thriller,comedy",
        images : "DJ",
        Watched : true,
        isRecommended : false
    }

]

module.exports = {
    Movie
}