const data = [
    {
        country:"India",
        capital:"New Delhi",
        states:[
            {
                name:"Maharashtra",
                capital:"Mumbai",
                cities:[
                    {
                        name:"Mumbai",
                        population: 20000000,
                        famousFor:['Gateway of India','Bollywood'],
                        AQI: 120,
                        liveinCost:56000
                    },
                    {
                        name:"Pune",
                        population: 5000000,
                        famousFor:['Osho Ashram','Education'],
                        AQI: 100,
                        liveinCost:40000
                    }
                ]
            },
            {
                name:"Guajarat",
                capital:"Gandhinagar",
                cities:[
                    {
                        name:"Ahmedabad",
                        population: 18000000,
                        famousFor:['Gandhi Ashram','Textile Industry'],
                        AQI: 150,
                        liveinCost:50000
                    },
                    {
                        name:"Surat",
                        population: 4000000,
                        famousFor:['Diamond Industry','Textile Industry'],
                        AQI: 110,
                        liveinCost:45000
                    }
                ]
            },
            
        ]
    },
    {
        country:"USA",
        capital:"Washington DC",
        states:[
            {
                name:"New York",
                capital:"Albany",
                cities:[
                    {
                        name:"New York",
                        population: 200000,
                        famousFor:['Statue of Liberty','Times Square'],
                        AQI: 120,
                        liveinCost:76000
                    },
                    {
                        name:"Buffalo",
                        population: 500000,
                        famousFor:['Niagra Falls','Chicken Wings'],
                        AQI: 100,
                        liveinCost:40000
                    }
                ]
            },
            {
                name:"California",
                capital:"Sacramento",
                cities:[
                    {
                        name:"Los Angeles",
                        population: 1800000,
                        famousFor:['Hollywood','Beaches'],
                        AQI: 150,
                        liveinCost:80000
                    },
                    {
                        name:"San Francisco",
                        population: 400000,
                        famousFor:['Golden Gate Bridge','Silicon Valley'],
                        AQI: 110,
                        liveinCost:95000
                    }
                ]

            }
        ]
    }
]

//1)find all the cities in India
//2)find all cities in India which have AQI less than 120
//3)find all cities in India which have liveinCost less than 50000
//4)find all cities in India which have liveinCost less than 50000 and population greater than 10000000
//5)find all cities in India which are famous for 'Textile Industry'
//6)find all cities in India which are famous for 'Textile Industry' and 'Diamond Industry'
//7)find all cities in India which are famous for 'Textile Industry' or 'Diamond Industry'
//8)find all cities in India which are famous for 'Textile Industry' or 'Diamond Industry' and liveinCost less than 50000

//9)find india's population
//10)find india's population and USA's population


//12) find average livind cost of usa