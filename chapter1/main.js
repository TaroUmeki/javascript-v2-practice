// ===== デバッグ練習用コード =====

// 1) 変数がどう変わるか見る
let score = 0;
score = score + 10;
score = score + 25;
score = score * 2;
console.log("最終スコア: " + score);

// 2) ループの中で変数が増えていく様子を見る
let total = 0;
for (let i = 1; i <= 5; i++) {
  total = total + i;
  console.log("i = " + i + " のとき total = " + total);
}

// 3) 関数の中に入って引数と戻り値を見る
function multiply(a, b) {
  const result = a * b;
  return result;
}

const answer = multiply(4, 7);
console.log("4 × 7 = " + answer);

// 4) 配列を1つずつ処理する様子を見る
const fruits = ["りんご", "ばなな", "みかん"];
for (let j = 0; j < fruits.length; j++) {
  const current = fruits[j];
  console.log(j + "番目: " + current);
}


// 4) 配列を1つずつ処理する様子を見る
const fruits = ["りんご", "ばなな", "みかん"];
for (let j = 0; j < fruits.length; j++) {
  const current = fruits[j];
  console.log(j + "番目: " + current);
}