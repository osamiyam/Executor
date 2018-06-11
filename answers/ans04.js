
// 第４回課題解答例 //


function determinant(A){
    var N = A.length;
    if (N == 1) return A[0];
    var n = Math.sqrt(N);
    function minor(A, ii, jj, n){
        var i, j, res = [];
        for (i = 0; i < n; i++){
            for (j = 0; j < n; j++)
                if (ii != i && jj != j)
                    res.push(A[i * n + j]);
        }
        return res;
    }
    var s = 0, i, j, sign = 1;
    for (i = 0; i < n; i++){
        s += sign * determinant(minor(A, i, 0, n)) * A[i * n + 0];
        sign = -sign;
    }
    return s;
}

function test(){
    var A = [1, 5, 6,
             2, 3, 2,
             3, 7, 4
    ];
    var A4 = [1, 5, 6, 9,
              2, 3, 2, 2,
              3, 7, 4, 1,
              2, 6, 1, 2
    ];
    puts("det(A) = " + determinant(A));
    puts("det(A4) = " + determinant(A4));
}

test();