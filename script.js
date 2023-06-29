//funcion progreso barra scroll
window.addEventListener ('load', () =>{
    const progress = document.getElementById('progress');
    requestAnimationFrame(Unpdate);
})

function Unpdate(){
    progress.style.width = `${((window.scrollY)/ (document.body.scrollHeight - window.innerHeight)*100)}%`;
    requestAnimationFrame(Unpdate);
}

let MenuVisible = false;

//Funcion que oculta o muestra el Menu
function MostrarOcultarMenu(){
    if(MenuVisible){
        document.getElementById("nav").classList="";
        MenuVisible = false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        MenuVisible = true;
    }
}

//Funcion para cuando se selecciona el menu, no se muestre
function seleccionar(){
    document.getElementById("nav").classList="";
    MenuVisible = false;
}



//Funcion para aplicar las animaciones de los Skills//
    function efectoHabilidades(){
        var skills = document.getElementById("skills");
        var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if(distancia_skills >= 300){
            let habilidades = document.getElementsByClassName("progreso");
            habilidades[0].classList.add("javascript");
            habilidades[1].classList.add("htmlcss");
            habilidades[2].classList.add("python");
            habilidades[3].classList.add("mongodb");
            habilidades[4].classList.add("angular");
            habilidades[5].classList.add("php");
            habilidades[6].classList.add("communication");
            habilidades[7].classList.add("teamwork");
            habilidades[8].classList.add("teamwork");
            habilidades[9].classList.add("creativity");
            habilidades[10].classList.add("dedication");
            habilidades[11].classList.add("leadership");
            habilidades[12].classList.add("discipline");
            habilidades[13].classList.add("responsibility");
    }
}

//Detecto el Scroll para aplicar la animacion en la barra//
window.onscroll = function(){
    efectoHabilidades();
}





// Create variables to store the data
let name = '';
let id = '';
let telephone = '';
let observations = '';

// Listen for keydown events on the input fields
document.getElementById('name').addEventListener('keydown', (event) => {
  name = event.target.value;
});
document.getElementById('id').addEventListener('keydown', (event) => {
  id = event.target.value;
});
document.getElementById('telephone').addEventListener('keydown', (event) => {
  telephone = event.target.value;
});
document.getElementById('observations').addEventListener('keydown', (event) => {
  observations = event.target.value;
});

// Create a function to save the data to the database
function saveData() {
  // Your code to save the data to the database goes here...
}

// Create a form to enter the data
const form = `
  <form>
    <label>Name:</label>
    <input type="text" id="name">
    <br>
    <label>ID:</label>
    <input type="text" id="id">
    <br>
    <label>Telephone:</label>
    <input type="text" id="telephone">
    <br>
    <label>Observations:</label>
    <textarea id="observations"></textarea>
    <br>
    <button type="button" onclick="saveData()">Save</button>
  </form>
`;

// Display the form on the page
document.getElementById('form-container').innerHTML = form;


