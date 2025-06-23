
const button = document.getElementById("new_note");
const column_1 = document.getElementById("column_1")


button.addEventListener("click",function()
{
const note = document.createElement("div");
note.className = "inner";
note.textContent = "testtest";
column_1.append(note);
})