const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph")
    return cats 
}
cats; 
 
cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function destructivelyPrependCat() {
    cats.unshift("Bob")
    return cats 
} 
cats; 

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveLastCat() { 
    cats.pop("Garfield") 
    return cats 
} 
cats; 

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function destructivelyRemoveFirstCat() {
    cats.shift("Milo")
    return cats
}
cats; 

cats.length = 0;
cats.push("Milo", "Otis", "Garfield");

function appendCat() {
    appendCat = cats.concat("Broom")
    return appendCat
}
appendCat;

function prependCat() {
    const prependCat= ["Arnold",...cats]
    return prependCat
   }
   prependCat;

   function removeLastCat() {
       const removeLastCat = cats.slice(0,2)
       return removeLastCat
   }
   removeLastCat;

   function removeFirstCat() {
        const removeFirstCat = cats.slice(1,)
        return removeFirstCat
   }
   removeFirstCat;
   

   



 







    

 
    







  
