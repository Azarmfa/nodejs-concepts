function add(x,y){
    return Number(x)+Number(y);
}
function subtract(x,y){
    return x-y;
}

// module.exports.add = add;
// module.exports.subtract = subtract;
module.exports = {add, subtract};