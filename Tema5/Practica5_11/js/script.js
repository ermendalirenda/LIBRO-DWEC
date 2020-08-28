function dibujaMapa() {
    //Dibujamos la web
    document.write("<p><table style='text-align:center;margin:auto;border:2px'>");
    for (const fila of mapa) {
        document.write("<tr>");
        for (const celda of fila) {
            document.write(`<td>${celda}</td>`);
        }
        document.write("</tr>");
    }
    document.write(`</table></p>`);
}

function pruebaMinas(fila, columna) {
    //Una función de prueba que dada una fila y una columna devolverá las minas que hay alrededor
    return minasAlrededor(fila, columna);
}

function minasAlrededor(f, c) {
    //Esta función nos devuelve el número de minas alrededor de una posición x,y del mapa
    //Primero examinamos las casillas superiores y los lados
    //segundo las casillas inferiores
    let nMinas = 0;
    let fila = parseInt(f); //Enviamos texto, para +-1 hay que pasarlo antes a entero
    let columna = parseInt(c);

    if (fila < mapa.length - 1) { //Si no estamos en la última fila
        if (mapa[fila + 1][columna] == "Mina") ++nMinas; //Abajo
        if (columna > 0)
            if ((mapa[fila + 1][columna - 1]) == "Mina") ++nMinas; //Esquina inferior izquierda
        if (columna < mapa[0].length - 1) //Si no es la última columna
            if ((mapa[fila + 1][columna + 1]) == "Mina") ++nMinas; //Esquina inferior derecha
    }

    if (fila > 0) { //Si no es la fila 0. Miramos las tres casillas superiores y las 2 d los lados
        if ((mapa[fila - 1][columna]) == "Mina") ++nMinas; //Arriba
        if (columna > 0) {
            if ((mapa[fila - 1][columna - 1]) == "Mina") ++nMinas; //Esquina superior izquierda
            if ((mapa[fila][columna - 1]) == "Mina") ++nMinas; //izquierda
        }
        if (columna < mapa[0].length - 1) { //Si no es la última columna
            if ((mapa[fila - 1][columna + 1]) == "Mina") ++nMinas; //Esquina superior derecha
            if ((mapa[fila][columna + 1]) == "Mina") ++nMinas; //Derecha
        }
    }

    return nMinas;
}

function numeraCasillas() {
    //Esta función escribe el número de minas alrededor de cada casilla no "minada"
    //Haremos llamadas a minasAlrededor()

    for (const fila in mapa) {
        for (const col in mapa[fila]) {
            if (mapa[fila][col] != "Mina") mapa[fila][col] = minasAlrededor(fila, col);
        }
    }
}

function colocaMinas(Minas) {
    //Esta función coloca minas aleatoriamente por el mapa
    let posFila, posColumna;

    for (let m = 1; m <= Minas; ++m) {
        posFila = parseInt(Math.random() * mapa.length);
        posColumna = parseInt(Math.random() * mapa[0].length); //Cualquier posición (0) nos vale para conocer el número de columnas

        if (mapa[posFila][posColumna] == "0")
            mapa[posFila][posColumna] = "Mina";

        else --m; //Si esa posición no vale probamos otra vez
    }
}

function introDims() {
    //Entrada de datos. Si los campos de filas o columnas está vacío se pondrá 10 por defecto.
    //Las minas que elige el usuario no pueden superar el tamaño del array (nfilasxncolumnas)
    //Si lo deja vacío, por defecto pondrá la mitad del tamaño del array.
    //Devuelve null si el usuario pulsa cancelar
    let nFilas, nColumnas, nMinas;
    let totalCasillas;
    let salir = false;

    do {
        nFilas = prompt("Elige un número de filas entre 1 y 20. Dejar campo vacío para 10 filas");
        if (nFilas == "") nFilas = 10;
        if (nFilas == null) salir = true;

    } while ((nFilas != null && isNaN(nFilas)) || (parseInt(nFilas) <= 0 || parseInt(nFilas) > 20)); //el || es porque isNan() se contradice con nFilas<=0

    if (nFilas == null) return null; //Cancelar
    else {
        do {
            nColumnas = prompt("Elige un número de columnas entre 1 y 20. Dejar campo vacío para 10 columnas");
            if (nColumnas == "") nColumnas = 10;

        } while ((nColumnas != null && isNaN(nColumnas)) || (parseInt(nColumnas) <= 0 || parseInt(nColumnas) > 20));

        if (nColumnas == null) return null; //Cancelar
        else {
            do {
                totalCasillas = parseInt(nFilas * nColumnas);
                nMinas = prompt(`Total de casillas: ${totalCasillas}. Introduce un número de minas entre 1 y ${totalCasillas}.` +
                    `Deja el campo vacío para colocar ${parseInt(totalCasillas/2)} minas`);
                if (parseInt(nMinas) >= totalCasillas)
                    alert("Demasiadas minas, escoge otro número");
                else if (parseInt(nMinas) <= 0)
                    alert("Muy pocas minas, escoge otro número");
                else if (nMinas == "")
                    nMinas = parseInt(totalCasillas / 2);

            } while ((nMinas != null && isNaN(nMinas)) || (parseInt(nMinas) <= 0) || (parseInt(nMinas) >= totalCasillas));

            if (nMinas == null) return null;
            else
                return [nFilas, nColumnas, nMinas];
        }
    }
}

function initMapa(filas, columnas) {
    //Devuelve el mapa (array bidimensional) con los valores 0 introducidos
    //Recuerda que para crear un array no se usan cosas como for..in o for..of
    mapa = new Array(filas); //mapa es una variable global.

    for (let i = 0; i < filas; ++i) {
        mapa[i] = new Array(columnas);
        for (let j = 0; j < columnas; ++j) {
            mapa[i][j] = '0';
        }
    }
}