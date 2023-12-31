const myCanvas = document.getElementById("myCanvas");
const painter = myCanvas.getContext("2d");

function drawStuff() {
  // Empty rectangle
  painter.beginPath();
  painter.strokeStyle = "blue";
  painter.strokeRect(10, 10, 100, 100); // x, y, width, height

  // Empty circle
  painter.beginPath();
  painter.strokeStyle = "red";
  painter.arc(300, 300, 100, 0, 2 * Math.PI); // x , y, radius, start angle, end angle
  //   painter.arc(300, 300, 100, 0, 2 * Math.PI - 0.1); // x , y, radius, start angle, end angle
  painter.stroke();

  // Empty text:
  painter.beginPath();
  painter.strokeStyle = "green";
  painter.font = "40px Arial";
  painter.strokeText("Hello World", 20, 400); // text, x, y

  // Line
  painter.beginPath();
  painter.strokeStyle = "gray";
  painter.moveTo(500, 400); // place the painter in this location (start here)
  painter.lineTo(640, 480); // paint a line to this location (finish here)
  painter.stroke();

  // Full Rectangle
  painter.beginPath();
  painter.fillStyle = "yellow";
  painter.fillRect(10, 210, 100, 100); // x, y, width, height

  //   // Full circle
  //   painter.fillStyle = "red";
  //   painter.beginPath();
  //   painter.arc(300, 100, 100, 0, 2 * Math.PI); // x , y, radius, start angle, end angle
  //   painter.fill();

  // full text
  painter.beginPath();
  painter.fillStyle = "green";
  painter.font = "50px David";
  painter.fillText("Full World", 20, 200); // text, x, y

  // Full circle
  painter.fillStyle = "red";
  painter.beginPath();
  painter.arc(300, 100, 100, 0, 2 * Math.PI); // x , y, radius, start angle, end angle
  painter.fill();
}

function mouseDraw(event) {
  /*
        event.buttons
        0 - none pressed
        1 - left click pressed
        2 - right click pressed
        3 - both pressed
        4 - wheel pressed

    */

  /*
        == vs ===
        if ("1" == 1) {
            console.log('AQUI');
        }

        if ("1" === 1) {
            // false!
        }

        if (1 === 1) {
            // true!
        }

    */
  //   console.log(event);
  //   painter.lineTo(event.clientX, event.clientY);
  if (event.buttons === 1) {
    painter.lineTo(event.offsetX, event.offsetY);
    painter.stroke();
  }
}

function newPosition(event) {
  console.log("AQUI");
  painter.moveTo(event.offsetX, event.offsetY);
}

function setColor(color) {
  painter.beginPath();
  painter.strokeStyle = color;
}
