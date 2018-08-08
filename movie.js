class Movie {
    constructor(params){
        this.id = params.id;
        this.name = params.name;
        this.info  = params.info;
        this.Watched = params.Watched;
        this.isRecommended = params.isRecommended;
    }

    save(){
        Movie.data.push(this)
    }


    static findAll(){
        return Movie.data;
    }

    static findOne(id){
        return Movie.data.find((movie) => {
            return movie.id == id
        });
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