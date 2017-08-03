console.log('foo bar');

let button = document.getElementsByClassName('cal');
let output = document.getElementById('output-area');
for (var i = 0; i < button.length; i++) {
  console.log(button[i]);
  button[i].addEventListener('click', function () {
    output.innerHTML = this.value;
  });
}
