//document.write("Eae seu pau no cu");    


/*

----------------//-----------//------------//---------------------------


const f = {
    name: 'Angular'
}

f.name = 'React';


PS -> ESSA PROXIMA ATRIBUICAO CAUSA ERRO
f  = {
    name: "Vue.js"
}

console.log(f.name);


----------------//-----------//------------//---------------------------

*/

/*
let movie = 'Lord of the Rings';

function star_wars_fan()
{
    const movie = "Stars Wars";
    return movie;
}
function marvel_fan()
{
    movie = "The Avengers";
    return movie;
}
function blizzard_fan()
{
    const is_fan = "true";
    let phrase = "Warcraft";
    console.log("Before if:" +  phrase);
    
    if(is_fan) 
    {
        let phrase = "initial text";
        phrase = "for the Hord!";
        console.log("Inside if:" +  phrase);
    }
    phrase = "For the Alliancce!";
    console.log("After if:" + phrase);

}


console.log(movie); 
console.log(star_wars_fan()); 
console.log(marvel_fan()); 
console.log(movie);
blizzard_fan();


----------------//-----------//------------//---------------------------
*/

/*
DESCONSTRUÇAO

let [x,y] = ["a", "b"];
console.log([x, y]);

[x,y] = [y,x];

console.log([x,y]);



let obj = {x,y};

console.log(obj);



----------------//-----------//------------//---------------------------
*/

//HERANÇA


/*
class Book {
    constructor(title, pages, isbn) 
    { 
        this.title = title;
        this.pages = pages; 
        this.isbn = isbn; 
    } 
    printIsbn() 
    { 
        console.log(this.isbn);
    }
}

let guia = new Book("Guia loiane", 275, 132154987);
console.log(guia);


class My_Book extends Book{ 
    constructor(title, pages, isbn, technology){
        super(title, pages, isbn);
        this.technology = technology;
    }
    print_tech()
    {
        console.log(this.technology);
    }
}

guia = new My_Book("guia loiane", 408, 151353146581, "JavaScript");

console.log(guia);
 
*/

