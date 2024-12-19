const n = 4, m = 6;
const matrix = [
    [12 , 22, 5,  0,   20,  18],
    [0  , 2,  5,  25,  18,  17],
    [12 , 10, 5,  4,   2,    1],
    [3  , 8,  2,  20,  10,   8]
];

for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
        let leftDiag = j > 0 ? matrix[i - 1][j - 1] : 0;
        let up = matrix[i - 1][j]; 
        let rightDiag = j < m - 1 ? matrix[i - 1][j + 1] : 0; 
        
        matrix[i][j] += Math.max(leftDiag, up, rightDiag); 
    }
}

let result = matrix[n - 1][0];  
for (let j = 1; j < m; j++) {
    if (matrix[n - 1][j] > result) {
        result = matrix[n - 1][j];
    }
}

console.log(result); 
