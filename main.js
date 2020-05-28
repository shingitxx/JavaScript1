'use strict';
//厳密モード

const num = 50;
// 定数宣言 
const winner = Math.floor(Math.random() * num);
// 定数宣言 Math.random 0以上1未満のランダム整数を生成する
// そこにnumをかけているから0以上5未満を出力する
// ただ0以上4未満がいいので小数点をきるMath.floorを追加する
for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    // 定数宣言 createElementでdivを作成
    div.classList.add('box');
    // divにclassList.addでboxのクラスを追加
    // div.textContent = i;
    // // divの中身のテキストをiにする
    div.addEventListener('click', () => {
        if (i === winner) {
            // iとwinnerが同じ= for文と重なる
            div.textContent = 'Winnnnnnnn';
            // trueだった場合の出力結果
            div.classList.add('win');
            //trueだった場合divにclass要素を追加する
        } else {
            // iとwinnerが同じ= for文と重なる
            div.textContent = 'Loseeeeeeee';
            // falseだった場合の出力結果
            div.classList.add('Lose');
            //falseだった場合divにclass要素を追加する
        }
        // divにaddEventListenerでイベント追加
        // div.classList.toggle('circle');
        // divにclassList.toggleでcircleのclassを追加
    });
    
    document.body.appendChild(div);
    // 親要素のbodyを指定してappendChildでdivを出力

}

