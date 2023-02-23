const database = {
    fish: [
        {
            image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            species: "clownfish",
            name: "Bart",
            food: "invertebrates",
            length: "3 inches",
            location: "Australia"
        },
        {
            image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            species: "spotted eagle ray",
            name: "Donny",
            food: "clams",
            length: "7 inches",
            location: "South Africa"
        },
        {
            image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            species: "clownfish",
            name: "Danny",
            food: "invertebrates",
            length: "1 inch",
            location: "Australia"
        },
        {
            image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            species: "royal gramma",
            name: "Dinny",
            food: "crustaceans",
            length: "2 inches",
            location: "Australia"
        },
        {
            image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            species: "clownfish",
            name: "Xero",
            food: "invertebrates",
            length: "1 inch",
            locatiom: "Australia"
        },
        {
            image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            species: "clownfish",
            name: "Nemo",
            food: "invertebrates",
            length: "3 inches",
            location: "Australia"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}