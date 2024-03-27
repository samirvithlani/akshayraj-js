var sales =[
    {
        weekDay: 'Monday',
        movies:[
            {
                name:"Salar",
                tickets: 1000,
                duration: 2.5,
                rating: 4.5,
                genre: 'Action',
                cast:['Prabhas','Shruti Hassan','Kajal Agarwal']
            },
            {
                name:"RRR",
                tickets: 2000,  
                duration: 3.5,
                rating: 4.8,
                genre: 'Drama',
                cast:['Ram Charan','Jr NTR','Alia Bhatt','Prabhas']
            }
        ]
    },
    {   
        weekDay: 'Sunday',
        movies:[
            {
                name:"Top Gun",
                tickets: 500,
                duration: 1.5,
                rating: 5.0,
                genre: 'Action',
                cast:['Tom Cruise','Kelly McGillis']
            },
            {
                name:"The Godfather",
                tickets: 1000,
                duration: 3.5,
                rating: 4.9,
                genre: 'Drama',
                cast:['Marlon Brando','Al Pacino','James Caan']
            }
        ]
    },
    {
        weekDay: 'Saturday',
        movies:[
            {
                name:"Top Gun",
                tickets: 500,
                duration: 1.5,
                rating: 5.0,
                genre: 'Action',
                cast:['Tom Cruise','Kelly McGillis']
            },
            {
                name:"The Godfather",
                tickets: 1000,
                duration: 3.5,
                rating: 4.9,
                genre: 'Drama',
                cast:['Marlon Brando','Al Pacino','James Caan']
            },  
            {
                name:"Titanic",
                tickets: 1500,
                duration: 3.0,
                rating: 4.7,
                genre: 'Romance',
                cast:['Leonardo DiCaprio','Kate Winslet']

            }   
        ]
    },
    
]
//1)find all the movies which are of genre 'Action'
//2)find all movies acted by 'Prabhas'
//3)find all movies which are of genre 'Action' and rating is greater than 4.5
//4)find all movies which are of genre 'Action' and rating is greater than 4.5 and duration is greater than 2.5
//5) find romatic movies
//6)find all movies having duration greater than or equal to 3 hours


// var action = sales.map((sale)=>{
//     return sale.movies.filter((movie)=>{
//         return movie.genre === 'Action'
//     })
// })

var action = sales.flatMap((sale)=>{
    return sale.movies.filter((movie)=>{
        return movie.genre === 'Action'
    })
})

console.log(action)


var prabhasMovies = sales.flatMap((sale)=>{
    return sale.movies.filter((movie)=>{

        return movie.cast.includes('Prabhas')

    })
})
console.log(prabhasMovies)





