// For:pour
// do...while:faire tant que

let n = prompt("Enter a number");
for (let i = 1; i <= 10; i++) {
  //   alert(n + '' + ' X ' + '' + i + ' = '+ n*i);
  //   console.log(n + "" + " X " + "" + i + " = " + n * i);
  let a = `${n} x ${i} = ${n * i}`;
  document.querySelector("#table").innerHTML += `${a}` + `</br>`;

  //   document.write(`${n} x ${i} = ${a}` + `</br>`);
}
