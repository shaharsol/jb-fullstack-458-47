function divide() {
  const num = +prompt("how many PI digits?");
  try {
    const pi = Math.PI.toFixed(num);
    alert(pi);
  } catch (err) {
    // console.log(err.name);
    // console.log(err.message);
    // alert(`there was an error: ${err}`);
  }

  alert("done...");
}

divide();
