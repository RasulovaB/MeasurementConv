//var x = myFunction(1, 0.5);
//document.getElementById("test").innerHTML = x;
//
//function myFunction(a, b) {
//  return a + b;
//}  
    
function calcG(y){
    //kilo to grams
    var x = y * 1000;
  //console.log(x);
}
calcG(1);

    
 
function calcK(){
    x=document.getElementById("kilo").value;
    y=document.getElementById("grams").value;
    document.getElementById("kilo").value=y / 1000;
}  

document.getElementById('lbsInput').addEventListener('input', function(e){//listen to input event & run function to pass event parameter
    //create variable to pass input
    let lbs=event.target.value;
    //first convert lbs to anything, & pass output by id
    document.getElementById('grmsOutput').innerHTML = (lbs/0.0022046).toFixed(2);
    document.getElementById('kgOutput').innerHTML = (lbs/2.2046).toFixed(2);
    document.getElementById('ozOutput').innerHTML = lbs*16;
    
});
    
//var initial = measure('1 cup');
//var final = initial.add('1 tbsp').format('d Mm');
//document.getElementById('date').innerHTML=final;
//  function measure(x){
//      return x;
//console.log(final); // "1.0625 Cup"
//}
//Measure.prototype.cups = function cups() {
//    var x = document.getElementById('date');
//  return this.totalByUnit('cups');
//};
//    Measure.prototype.totalByUnit = function (unit) {
//  var ratio = this.ml / Measure.volume[unit];
//  return Math.round((ratio + 0.00001) * 100) / 100;
//};
            
        
   
//    return {
//        test: function test() {
//            console.log("measure.js is initialized!" + a);
//            return myOBJ;
//        }
//    }
//})();


//var now = moment().format('LLL');
//var x = document.getElementById('date');
//x.innerHTML = now;

//(function() {
//    a = "aslkfjsldf";
//    var result = library.test().add();
//    console.log(result);
//})(); // Immediately Invoked Function (IIF)
