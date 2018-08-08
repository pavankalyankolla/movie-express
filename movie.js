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

    static findOneAndUpdate(id,params){
        let movie = Movie.data.find((movie) => {
            return movie.id == id;
        })
        if(movie) {
            movie.name = typeof params.name == 'undefined' ? movie.name : params.name;
        }
        return movie;
    }

    static findOneAndRemove(id){
        let index = Movie.data.findIndex((movie) => {
            return movie.id == id;
        })

        if(index >= 0){
            Movie.data.splice(index,1);
        }
        return index;
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