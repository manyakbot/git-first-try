const dogs = {
    Fido: 'Mutt',
    Hunter: 'Doberman',
    Snoopie: 'Beagle'
};

const myDog = 'Hunter';
const myBreed = dogs[myDog];
console.log(myBreed);

const myFriends = {
    FriendOne: 'Dima',
    FriendTwo: 'Stas',
    FriendThree: 'Kot4',
}

const friend = 'FriendTwo';
const newFriend = myFriends[friend];
console.log(typeof newFriend);
console.log(typeof myFriends.FriendTwo);