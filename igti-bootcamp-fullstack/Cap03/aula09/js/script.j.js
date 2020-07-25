window.addEventListener("load", start);

var globalNames = ["Um", "Dois", "Tres", "Quatro"];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start() {
  console.log("start");
  inputName = document.querySelector("#inputName");
  preventFormSubmit();
  activatedInput();
  render();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmit);
}

function activatedInput() {
  function updateName(newName) {
    globalNames[currentIndex] = newName;
    render();
  }

  function handleTyping(evento) {
    var hasText = !!evento.target.value && evento.target.value.trim() !== "";
    if (!hasText) {
      co;
      return;
    }
    if (event.key === "Enter") {
      if (isEditing) {
        updateName(evento.target.value);
      } else {
        globalNames.push(event.target.value);
        render();
        inputName.textContent = "";
      }
      isEditing = false;
      clearInput();
    }
  }

  inputName.focus();
  inputName.addEventListener("keyup", handleTyping);
}

function render() {
  function deleteButton(index) {
    function deleteName(id) {
      globalNames.splice(id, 1);
      render();
    }
    var button = document.createElement("button");
    button.classList.add("deleteButton");
    button.textContent = "X";
    button.addEventListener("click", deleteName);

    return button;
  }

  function createSpan(name, i) {
    function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = i;
    }

    var span = document.createElement("span");
    span.classList.add("clickable");
    span.textContent = name;
    span.addEventListener("click", editItem);
    return span;
  }
  var divNames = document.querySelector("#names");
  divNames.innerHTML = "";
  var ul = document.createElement("ul");

  for (let i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    var li = document.createElement("li");

    var button = deleteButton();

    var span = createSpan(currentName, i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
  clearInput();
}

function clearInput() {
  inputName.value = "";
  inputName.focus();
}
