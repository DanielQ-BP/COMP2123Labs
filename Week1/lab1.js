// Exercise 1
function capitalizeWords(str){
return str.replace(/\b\w/g, char => char.toUpperCase());
}
console.log(capitalizeWords());

// Exercise 2
function LargestInt(a, b, c) {
    return Math.max(a,b,c);
}
console.log(LargestInt(12,45,76));

// Exercise 3
function moveLastThree(str){
    if (str.length < 3){
        return "String much be at least 3 characters";}
    return str.slice(-3) + str.slice(0, -3);
}
console.log(moveLastThree("Javascript"));

//Exercise 4
function angleType(angle){
    if (angle  < 90){
        return "Acute angle";}
    if (angle == 90){
        return "Right Angle";}    
    if (angle < 180){
        return "Obtuse Angle";}
    if (angle == 180){
        return "Straight Angle";}
         else {
        return "Invalid Angle";}
}
console.log(angleType(54));
console.log(angleType(90));
console.log(angleType(148));
console.log(angleType(180));