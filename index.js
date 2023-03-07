let gridrow = document.getElementById("grid-row");
let gridcol = document.getElementById("grid-col");
let creategridbtn = document.getElementById("creategrid-btn");
let container = document.querySelector(".container");
let table = document.getElementById("table");
let hide = document.getElementById("hide");
let show = document.getElementById("show");
let reset = document.getElementById("reset");
let color = document.getElementById("color");

function Creategrid()
{
    Hide();
    container.innerHTML=" ";
    for(let i = 0;i < gridrow.value; i ++)
    {
        let tr = table.insertRow(i);

        for(j = 0; j < gridcol.value; j++ )
        {
            let td = tr.insertCell(j);
            td.classList.add("tablecell");
        }
        container.appendChild(table);
    }
    
}

function Show()
{
    show.style.display = "block";
    reset.style.display = "block";
    color.style.display = "block";
}
function Hide()
{
    if(gridrow.value == "")
    {
        alert("Please Enter size if row");
    }
    else if(gridcol.value == "")
    {
        alert("Please Enter size if column");
    } 
    else
    {
        hide.style.display = "none";
        Show();
    }
}