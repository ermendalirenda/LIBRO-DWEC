/*function tribonacci(n) {
    //Caso recursivo
    //Con fibonacci suponíamos como ciertos los valores 0 y 1 al principio, en este caso será 0,1,1

    //Primero vemos los casos base
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else if (n == 2) return 1;

    else { //Para la parte recursiva tenemos que pensar en una fórmula que funcione, 
        //en nuestro caso tenemos que n=(n-1) + (n-2) + (n-3)

        return (tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1));
    }
}*/

function tribonacci(n) {
    //Caso iterativo
    //Suponemos como casos base los siguientes;

    let x0 = 0;
    let x1 = 1;
    let x2 = 1;
    let tri;

    if (n == 0) return 0;
    else if (n == 1) return 1;
    else if (n == 2) return 1;
    else {
        for (let i = 3; i <= n; ++i) {
            if (i > 3) //De ser =3 no ejecutaría la siguiente línea y se iría diréctamente a la suma
                [x0, x1, x2] = [x1, x2, tri];

            tri = x0 + x1 + x2; //El primer valor lo calculamos del tirón    else{
            //console.log("antes del calculo jevi, x0=" + x0 + ", x1=" + x1 + ", x2=" + x2);

        }
    }
    return tri;

}