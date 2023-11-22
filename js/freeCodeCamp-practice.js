const checkObj = (obj, checkProp) => {
    if(obj.hasOwnProperty(checkProp)){
        return obj[checkProp];
      }else {
        return "Not found"
      }
}
const object = {name: 'Oleg'};
const currentObject = checkObj(object, 'name');
console.log(currentObject);