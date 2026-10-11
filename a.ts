const vetor: number[] = [1,2,3,4,5,6,7,8,9,10]

function algoritimo(v: number[], target: number): void {
    let l = 0;
    let r = v.length;
    while( l < r){
        let mid = (l + r) / 2
        if (v[mid] === target) return mid;
        if (v[mid] < target) l = mid + 1;
        else r = mid;
        console.log(target, v[mid]);
    }
}
algoritimo(vetor, 2);



const vetor1: number[] = [8, 3, 5, 1, 9, 2, 4,6,7];

function ordenar(v: number[]): number[] {
    // Implemente o Selection Sort aqui.
   for(let i = 0; i < v.length; i++){
        let indiceMenor = i;
        for(let j = i + 1; j < v.length; j++){
            if(v[indiceMenor] > v[j]) indiceMenor = j;
        }
        [v[i], v[indiceMenor]] = [v[indiceMenor], v[i]];
   }
   return v;
}

console.log(ordenar(vetor1));
