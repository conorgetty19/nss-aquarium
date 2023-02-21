const database = {
    fish: [
        {
            image:
            species: "clownfish",
            name: "Bart",
            food: "invertebrates",
            length: "3 inches",
            location: "Australia"
        },
        {
            image:
            species: "spotted eagle ray",
            name: "Donny",
            food: "clams, oysters, shrimp, octopus, squid and sea urchins",
            length: "7 inches",
            location: "South Africa"
        },
        {
            iamge:
            species: "clownfish",
            name: "Danny",
            food: "invertebrates",
            length: "1 inch",
            location: "Australia"
        },
        {
            image:
            species: "royal gramma",
            name: "Dinny",
            food: "crustaceans",
            length: "2 inches",
            location: "Australia"
        },
        {
            image:
            species: "clownfish",
            name: "Xero",
            food: "invertebrates",
            length: "1 inch",
            locatiom: "Australia"
        },
        {
            image:
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