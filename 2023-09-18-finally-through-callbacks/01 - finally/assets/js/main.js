function divide() {
  const num = +prompt("how many PI digits?");
  try {
    // connect to database
    // const database = connectToDatabase();
    const pi = Math.PI.toFixed(num);
    console.log(pi);
    return "SUCCESS";
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
    return "FAILURE";
    // const pi120 = Math.PI.toFixed(120);
    // alert(`there was an error: ${err}`);
  } finally {
    // this code will trigger regardless if the try or catch worked
    console.log("in finally");
    // database.close();
  }

  console.log("done...");
}

divide();
