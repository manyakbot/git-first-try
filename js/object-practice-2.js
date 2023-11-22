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
    'FriendTwo': 'Stas',
    FriendThree: 'Kot4',
}

const friend = 'FriendTwo';
const newFriend = myFriends[friend];
console.log(typeof newFriend);
console.log(typeof myFriends.FriendTwo);

myFriends.FriendThree = 'Kost9n';
myFriends['FriendTwo'] = 'Stasik';

console.log(myFriends['FriendTwo'], myFriends.FriendThree);

const newObject = {
    name: 'Musia',
    color: 'White-black',
    tails: 1,
    legs: 4,
}

newObject.owner = 'Olzhabay'; // я добавил новое свойство уже к существующему объекту!
console.log(newObject['color'], newObject.name)
console.log(newObject);

