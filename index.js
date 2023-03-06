const row = document.getElementById("grid-row");
const col = document.getElementById("grid-col");
const cgrid = document.getElementById("creategrid-btn");
const con1 = document.querySelector("container");

function Creategrid()
{
    let count=0;
    // con1.innerHTML=" ";
    console.log("row");
    for(let i=0; i<= row.value;i++)
    {
        count += 2;
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j=0; j<= col.value;j++)
        {
            count += 2;
            let col = document.createElement("div");
            col.classList.add("col");
        }
    }

}