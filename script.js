//alert("loading")
function addNewWEField(){
    //console.log("aadding new field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Experience's");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    //console.log("aadding new field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Qualification's");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewSKField(){
    //console.log("aadding new field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Skill's");

    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById("skAddButton");

    skOb.insertBefore(newNode, skAddButtonOb);
}



function generateCV(){
    //console.log("Generating CV");

    let nameField=document.getElementById("nameField").value;

    let nameT1=document.getElementById("nameT1");

    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;

    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("emT").innerHTML=document.getElementById("emailField").value;

    document.getElementById("ghT").innerHTML=document.getElementById("githubField").value;

    document.getElementById("hrT").innerHTML=document.getElementById("hakerrankField").value;

    document.getElementById("LinkedT").innerHTML=document.getElementById("LinkedField").value;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    let wes=document.getElementsByClassName("form-control weField");

    let str = "";

    for(let e of wes){
        str=str+'<li>'+ e.value +'</li>';
    }

    document.getElementById("weT").innerHTML=str;

    let aqs=document.getElementsByClassName("form-control aqField");

    let str1 = "";

    for(let e of aqs){
        str1+='<li>'+ e.value +'</li>';
    }

    document.getElementById("aqT").innerHTML = str1;

    let sks=document.getElementsByClassName("form-control skField");

    let str2 = "";

    for(let e of sks){
        str2+='<li>'+ e.value +'</li>';
    }

    document.getElementById("skT").innerHTML = str2;

    document.getElementById("cv-form").style.display="none";

    document.getElementById("cv-template").style.display="block";

}

function printCV(){
    window.print();
}