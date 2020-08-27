//FUNCION RECURSIVA FIBONACCI

//La sucesión de números empieza por 0, 1 y el resto son la suma de sus dos anteriores
//Es decir, la sucesión es 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, etc
//A la función le mandaríamos el número del que queremos saber el valor Fibonacci y nos 
//devolvería dicho valor. Así si pasamos el número 10, devolvería 55.
//Es mucho más fácil la solución recursiva, pero sería muy interesante hacer también la solución 
//no recursiva.

//RECURSIVIDAD: 
//1) BUSCA UN CASO BASE (PUEDE HABER VARIOS)
//2) TEN CLARO DEL VALOR DEL CUAL PARTIMOS (N=20, N=5...) Y CUYO VALOR (F(N) QUEREMOS AVERIGUAR
//3) BUSCA ALGUNA FÓRMULA MATEMÁTICA QUE TE AYUDE Y APLÍCALA EN LA FÓRMULA RECURSIVA.

function fibonacciRec(n) {
    //FIBONACCI:
    //1) F(0)==0, F(1)==1;
    //2) N=10
    //3) F(N)=F(N-1) + F(N-2)

    if (n == 0) return 0; //Primer caso base
    else if (n == 1) return 1; //segundo caso base
    else {
        return (fibonacciRec(n - 1) + fibonacciRec(n - 2));
    }
}

function fibonacciIter(n) {

    let x = 0; //partimos de estos dos valores iniciales. en la sucesión fibonacci el primer valor es 0 y el segundo 1
    let y = 1;
    //let z = 1; //ESTO ES DEL TÍO
    let z = 0; //resultado de la suma de x e y (x+y=z) o (n-2)+(n-1)=n //ESTO ES MIO
    console.log("Estamos trabajando con el número " + n);

    if (n == 0) return 0;
    else if (n == 1) return 1;
    else {
        for (let i = 2; i <= n; ++i) {
            //ASÍ FUNCIONA, LA SOLUCIÓN DEL TÍO ES GENIAL. PARTE DE QUE YA CONOCEMO EL VALOR EN EL CASO i=1 (0+1=1).

            z = x + y;
            console.log("x = " + x + ", y = " + y + ", z = " + z);
            [x, y] = [y, z];
            y = z;
            /*console.log("antes de la fórmula: x = " + x + ", y = " + y + ", z = " + z);
            [y, x] = [y, z]; //LO HACE HACIA ATRÁS
            z = x + y;
            console.log("después de la fórmula: x = " + x + ", y = " + y + ", z = " + z);*/

        }
        return z;
    }
}