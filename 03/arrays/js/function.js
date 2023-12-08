const school = [
  {
    name: "Middle School 9",
    addres: "Mira 14B",
    images: ["https://mektep.online.kz", "https://instagram/mektep.kz"],
    class: [
      {
        title: "1B",
        studentsCount: 30,
        rank: 1
      },
      {
        title: "2A",
        studentsCount: 26,
        rank: null
      },
      {
        title: "4G",
        studentsCount: 29,
      },
    ],
  },
];

const beginnerClass = school[0].class[0].title;
const countStudensOfClass = school[0]['class'][0]['studentsCount'];


const schoolRank = school[0].class;

for(let i = 0; i < schoolRank.length; i++) {
    if(!(schoolRank[i].hasOwnProperty('rank'))){
      schoolRank[i]['rank'] = 4;
    }else if(schoolRank[i]['rank'] === null) {
      schoolRank[i]['rank'] = 6;
    }
}

console.log(schoolRank);