class Movie {
    constructor(params){
        this.id = params.id;
        this.name = params.name;
        this.info  = params.info;
        this.watched = false;
        this.isRecommended = false;
    }

    save(body){
        if(body.watched == true && (body.isRecommended == true || body.isRecommended == false)){
            this.watched = body.watched;
            this.isRecommended = body.isRecommended;
            Movie.data.push(this)
        } else {
            Movie.data.push(this)
        }
   
        
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

    static findWatched(){
        let movie = Movie.data.filter((movie) => {
            return movie.watched == true;
        })
        if(movie.length > 0){
            return movie;
        }
    }
    static findToWatch(){
        let movie = Movie.data.filter((movie) => {
            return movie.watched == true;
        })
        if(movie.length > 0){
            return movie;
        }
    }

    static findMyRecomm(){
        let movie = Movie.data.filter((movie) => {
            return movie.isRecommended == true;
        })
        if(movie.length > 0){
            return movie;
        }
    }
}
Movie.data = [
    {
        id : 1,
        name : "Atharintiki Daredi",
        info : "sentimental,comedy",
        images : "AD",
        watched : true,
        isRecommended : true
    },
    {
        id : 2,
        name : "DJ",
        info : "Thriller,comedy",
        images : "DJ",
        watched : true,
        isRecommended : false
    }

]

module.exports = {
    Movie
}