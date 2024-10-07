export function imagen() {
    const img = document.createElement('img');
    img.src = './LogoAltair-1.png';
    img.alt = 'Logo del centro educativo Altair';
    return img;
}

export function parrafo() {
    let p = document.createElement('p');
    p.innerText = "Texto de elementos de prueba de ejercicion del manejo del DOM.";
    return p;
}

export function tabla() {
    let tabla = document.createElement('table');
    let tRowH = document.createElement('tr');
    tRowH.innerHTML = "<tr><th>Nombre</th><th>Curso</th><th>Edad</th></tr>";
    tabla.appendChild(tRowH);
    let arrayContents = [
        {Alumno: 'David Melendez Nuñez', Curso: 'CSI2', Edad: '20'},
        {Alumno: 'Carlos Haro', Curso: 'CSI2', Edad: '20'},
        {Alumno: 'Rueben hernandez', Curso: 'CSI2', Edad: '19'}
    ];
    arrayContents.forEach((alumno) => {
        let tRowD = document.createElement('tr');
        tRowD.innerHTML = `<tr><td>${Alumno.Alumno}</td><td>${Alumno.Curso}</td><td>${Alumno.Edad}</td></tr>`;
        tabla.appendChild(tRowD);
    }  )    
    return tabla;
}

export function lista(arrayItems) {
    let ul = document.createElement('ul');
    arrayItems.forEach( (item) => {
        let li = document.createElement('li');
        li.innerHTML = item;
        li.className = "list-group-item";
        ul.appendChild(li);
    } );
    return ul;
}