/** 
 * const letの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";


// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = { 
//     name: "じゃけぇ", age: 28 
// };
// val4.name = "jak";
// val4.address = "Hiroshima";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//     return str;
// }
// const func1 = function(str) {
//     return str;
// }
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) =>  str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) =>  num1 + num2;
// console.log(func3(10, 20));


/**
 * 分割代入
 */
// const myProfile = {
//     name: "じゃけぇ",
//     age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['じゃけぇ', 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// console.log(sayHello("勇斗"));

/**
 * スプレッド構文 ...
 */
//  配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) =>  console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);


// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "じゃけぇ"];
// for(let index = 0; index < nameArr.length; index++){
//     console.log(nameArr[index]);
// }
// const nameArr2 = nameArr.map((name) => {
//     return name;
// })                  
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) =>{
//     return num % 2 === 1;
// });
// console.log(newNumArr);


// import './css/style.css';
// Todo アプリ制作部分
const onClickAdd = () => {
    const inputText = document.getElementById('add-text').value;
    document.getElementById("add-text").value = "";

    createIncompleteList(inputText);
}

// 未完了リストから指定の要素を削除
const deleteFromImCompleteList = (target) => {
    document.getElementById('incomplete-list').removeChild(target);
}

// 未完了リストに追加する処理
const createIncompleteList = (text) => {

    //li生成
    const li = document.createElement("li");

    //div生成
    const div = document.createElement("div");
    div.className = 'list-row';
    
    // p生成
    const p = document.createElement("p");
    p.innerText = text;

    // button（完了）タグ生成
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "完了";
    completeBtn.addEventListener("click", () => {
        deleteFromImCompleteList(completeBtn.parentNode.parentNode);

        // 完了リストに追加する要素（li）
        const addTarget = completeBtn.parentNode.parentNode;
        // TODO内容テキストを取得
        const text = addTarget.firstElementChild.firstElementChild.innerText;
        //li以下を初期化
        div.textContent = null;
        addTarget.textContent = null;
        p.innerText = text;

        // button（戻す）タグ生成
        const backBtn = document.createElement("button");
        backBtn.innerText = "戻す";
        backBtn.addEventListener('click', () => {
            // おされた戻すボタンの親タグ(li)を完了リストから削除
            const deleteTarget = backBtn.parentNode.parentNode;
            document.getElementById('complete-list').removeChild(deleteTarget);

            const text = backBtn.parentNode.firstElementChild.innerText;
            createIncompleteList(text);
        });

        // liタグの子要素にdivを設定
        addTarget.appendChild(div);

        // divタグの子要素に各要素を設定
        div.appendChild(p);
        div.appendChild(backBtn);
        
        // 完了リストにli以下を追加
        document.getElementById('complete-list').appendChild(li);
    });

    // button（削除）タグ生成
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "削除";
    deleteBtn.addEventListener('click', () => {
        // 押された削除ボタンの親タグ(li)を未完了リストから削除
        deleteFromImCompleteList(deleteBtn.parentNode.parentNode);
    });

    // divタグの子要素に各要素を格納
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completeBtn);
    div.appendChild(deleteBtn);

    // 未完了リストに追加
    document.getElementById('incomplete-list').appendChild(li);
}

const btn = document.getElementById('add-button');
btn.addEventListener('click', () => {
    onClickAdd();
});