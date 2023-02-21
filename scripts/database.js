const database = {
    fish: [
        {
            species: "clownfish",
            name: "Bart",
            food: "invertebrates",
            size: 3,
            harvest: "Australia"
        },
        {
            species: "spotted eagle ray",
            name: "Donny",
            food: "clams, oysters, shrimp, octopus, squid and sea urchins",
            size: 7,
            harvest: "South Africa"
        },
        {
            species: "clownfish",
            name: "Danny",
            food: "invertebrates",
            size: 1,
            harvest: "Australia"
        },
        {
            species: "royal gramma",
            name: "Dinny",
            food: "crustaceans",
            size: 2,
            harvest: "Australia"
        },
        {
            species: "clownfish",
            name: "Xero",
            food: "invertebrates",
            size: 1,
            harvest: "Australia"
        },
        {
            species: "clownfish",
            name: "Nemo",
            food: "invertebrates",
            size: 3,
            harvest: "Australia"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}