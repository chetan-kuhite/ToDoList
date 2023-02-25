let store = [];
let comp = [];
let i = 0;

function save() {
    let title = document.getElementById("tt").value;
    let desc = document.getElementById("dd").value;
    store.push([title,desc]);
    document.getElementById("tt").value = "";
    document.getElementById("dd").value = "";
    // console.log(store);
    printp();
}
function savec() {
    let title = document.getElementById("tt").value;
    let desc = document.getElementById("dd").value;
    comp.push([title,desc]);
    document.getElementById("tt").value = "";
    document.getElementById("dd").value = "";
    // console.log(store);
    printc();
    document.getElementById("save").outerHTML = "<button type='submit' onclick='save()' id='save'>Save</button>"
}
function delc(de) {
    console.log(de);
    let newb = [];
    for(let j=0;j<comp.length;j++)
    {
        if(j!=de)
            newb.push(comp[j]);
    }
    comp = newb;
    console.log(comp);
    printc();

}

function delp(de) {
    console.log(de);
    let newa = [];
    for(let j=0;j<store.length;j++)
    {
        if(j!=de)
            newa.push(store[j]);
    }
    store = newa;
    console.log(store);
    printp();
}


function com(cp){
    for(let j=0;j<store.length;j++)
    {
        if(j==cp)
            comp.push(store[j]);
    }
    delp(cp);
    printc();
}
function printc()
{
    let contentadd = "";
    // let test = 0;
    for(let j=0;j<comp.length;j++)
    {
        let innerarray = comp[j];
        let title = innerarray[0];
        let desc = innerarray[1];
        contentadd += "<div class='details pend' id='display'><div class='div_title'>"+title+"</div><div class='des'>"+desc+"</div><div class='flex-center'><div class='edit'><button class='ed' id='edata' value='"+j+"' onclick='editc("+j+")'><img src='edit.webp' height='30px'></button></div><div class='com'><button class='bcom' id='cdata' value='"+j+"' onclick='com("+j+")'><img src='write.jpg' height='45px' style='margin-top: -8px;'></button></div><div class='delete'><button class='bdel' id='ddata' value='"+j+"' onclick='delc("+j+")'><img src='cross.png' alt=' srcset=' height='30px'></button></div></div></div>";
        // console.log(test);
        // test++;
    }
    console.log(comp);
    document.getElementById("comp").innerHTML = contentadd;
    // console.log(test);

    contentadd = "";
}
function printp()
{
    let contentadd = "";
    // let test = 0;
    for(let j=0;j<store.length;j++)
    {
        let innerarray = store[j];
        let title = innerarray[0];
        let desc = innerarray[1];
        contentadd += "<div class='details pend' id='display'><div class='div_title'>"+title+"</div><div class='des'>"+desc+"</div><div class='flex-center'><div class='edit'><button class='ed' id='edata' value='"+j+"' onclick='editp("+j+")'><img src='edit.webp' height='30px'></button></div><div class='com'><button class='bcom' id='cdata' value='"+j+"' onclick='com("+j+")'><img src='write.jpg' height='45px' style='margin-top: -8px;'></button></div><div class='delete'><button class='bdel' id='ddata' value='"+j+"' onclick='delp("+j+")'><img src='cross.png' alt=' srcset=' height='30px'></button></div></div></div>";
        // console.log(test);
        // test++;
    }
    console.log(store);
    document.getElementById("pend").innerHTML = contentadd;
    // console.log(test);

    contentadd = "";
}

function editp(ed)
{
    let t = "";
    let d = "";
    for(let j=0;j<store.length;j++)
    {
        if(j==ed)
        {
            let demo = store[j];
            t=demo[0];
            d=demo[1];
        }
    }
    document.getElementById("tt").value = t;
    document.getElementById("dd").value = d;
    delp(ed);
}
function editc(ed)
{
    let t = "";
    let d = "";
    for(let j=0;j<comp.length;j++)
    {
        if(j==ed)
        {
            let demo = comp[j];
            t=demo[0];
            d=demo[1];
        }
    }
    document.getElementById("tt").value = t;
    document.getElementById("dd").value = d;
    delc(ed);
    document.getElementById("save").outerHTML = "<button type='submit' onclick='savec()' id='save'>Save</button>"
}