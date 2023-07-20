function printValue() {
    const result1 = document.querySelector("#result1");
    const customer = document.querySelector("#customer");
    const product = document.querySelector("#product");
    const price = document.querySelector("#price");

    result1.innerHTML = `${customer.value}님의 구매 상품은 ${product.value}, 구매 가격은 ${price.value}원 입니다.`;
}

function stringLength() {
    const result2 = document.querySelector("#result2");
    const text1 = document.querySelector("#text1");
    result2.innerHTML = `문자열의 길이 : ${text1.value.length}`;
}

function stringSplit() {
    const result3 = document.querySelector("#result3");
    const la1 = document.querySelector("#la1");
    const arr = la1.innerHTML.split(",");

    for(let value of arr) {
        result3.innerHTML += `<p>${value}</p>`;
    }
}

function arrayTest() {
    const stringla4 = document.querySelector("#stringla4");
    const remove = document.querySelector("#remove");
    const add = document.querySelector("#add");
    const result4 = document.querySelector("#result4");
    
    const arr = stringla4.innerHTML.split(" ");
    const removeIdx = arr.indexOf(remove.value);

    if(remove.value !== ""){
        arr.splice(removeIdx, 1);
    }
    if(add.value !== ""){
        arr.push(add.value);
    }

    result4.innerHTML = arr.join(" ");
}

function Student(name, age, addr){
    this.name = name;
    this.age = age;
    this.addr = addr;
}

function addStudent() {
    // let objArr = [];
    let nameList = document.querySelectorAll(".name");
    let ageList = document.querySelectorAll(".age");
    let addrList = document.querySelectorAll(".addr");
   
    // 객체와 배열을 사용해보는 방법
    // for(let i = 0; i < nameList.length; i++) {
    //     let name = prompt("이름 입력");
    //     let age = prompt("나이 입력");
    //     let addr = prompt("주소 입력");
    //     let student = new Student(name, age, addr);
    //     objArr.push(student);
    // }

    // for(let i = 0; i < objArr.length; i++){
    //     nameList[i].innerHTML = objArr[i].name;
    //     ageList[i].innerHTML = objArr[i].age;
    //     addrList[i].innerHTML = objArr[i].addr;
    // }

    // 심플
    for(let i = 0; i < nameList.length; i++) {
        nameList[i].innerHTML = prompt("이름 입력");
        ageList[i].innerHTML = prompt("나이 입력");
        addrList[i].innerHTML = prompt("주소 입력");
    }
}