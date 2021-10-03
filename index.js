const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");
const dragstart = (ev) => {
  ev.target.classList.add("hold");

  setTimeout(() => ev.target.classList.add("hide"), 0);
};

const dragend = (ev) => {
  ev.target.classList.remove("hold");
  ev.target.classList.remove("hide");
};

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragDrop);
}

function dragover(ev) {
  ev.preventDefault();
}
function dragenter(ev) {
  ev.target.classList.add("hovered");
}
function dragleave(ev) {
  ev.target.classList.remove("hovered");
}
function dragDrop(ev) {
  ev.target.append(item);
  ev.target.classList.remove("hovered");
}

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);
