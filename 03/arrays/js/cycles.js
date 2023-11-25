// const libraryCollection = {
//     1: {
//         title: "Flame",
//         writer: "Jon",
//         series: [1999, 'Autumn']
//     },
//     2: {
//         writer: "Amanda",
//         series: []
//     },
//     3: {
//         title: "Wind",
//     }
// }

// const updateLibrary = (library, id, property, value) => {
//     if(value === "") {
//         delete library[id][property];
//     }else if(property !== "series") {
//         library[id][property] = value;
//     }else if(property == "series"){
//         if(!library[id].hasOwnProperty("series")){
//             library[id]["series"] = [];
//         }
//         library[id]["series"].push(value);
//     }
    
    
//     return library;
// }

// console.log(updateLibrary(libraryCollection, 3, 'writer', 'ABBA'));

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(value === ""){
        delete records[id][prop];
    }else if(prop !== "tracks"){
        records[id][prop] = value;
    }else if(prop === "tracks"){
        if(!records[id].hasOwnProperty("tracks")){
            records[id]["tracks"] = [];
        }
        records[id]["tracks"].push(value);
    }
    return records;
  }
  
  console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));