function setImage(local, tipo){
    for (var i=1; i<=10; i++) {
        document.getElementById(local + i).innerHTML = "<img class='box-filme' src='img/" + tipo + i + ".jpg' alt=''>";
    };
};

function setImageAll(tipo){
    setImage('novidade', tipo + 'n');
    setImage('continuar', tipo + 'c');
};