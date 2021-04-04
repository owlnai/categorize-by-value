# categorize-by-value

Small utility written in JavaScript to ease the task of generating arrays of objects based on a value of said object.

## Why
- This script is very small (<1KB) and has no dependencies. 
- You could write it yourself in your script given its small size. However, dealing with arrays and object keys from scratch can turn into a headache.
- Offers fallback and transformer arguments to cover most scenarios

## Useful scenarios and examples

### Getting a list of planets and moons
Let's say you have just scrapped a list from space website API containing your favorite planetary systems. You want to have an array of planets and another array of moons:
```JavaScript
const data = [{
        type: "planets",
        name: "earth",
        otherFancyData: "toAddSomeNoise",
    },
    {
        type: "moons",
        name: "europa",
        otherFancyData: "toAddSomeNoise",
    },

    {
        type: "planets",
        name: "mars",
        otherFancyData: "toAddSomeNoise"
    },
];

console.log(
    categorizeByValue({
        obj: data,
        key: "type",
        transformer: function () {
            return this.name
        }
    })
);

// { planets: [ 'earth', 'mars' ], moons: [ 'europa' ] }
```
### Discord bots
Another scenario (which originated this module) might be having a list of registered commands in the bot cache and you want to create an structured view of them based on their category (e.g admin commands).

## Contributing
Pull requests are very welcome. If you have an idea or you want to fix a bug, please do so!