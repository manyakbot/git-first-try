function phoneticLookup (val) {
    let result = "";

    const lookup = {
        alpha: "Adams",
        bravo: "Boston",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank",
    }

    result = lookup[val];
    
    
    return result;
}
console.log(phoneticLookup('alpha'));


