var arrText = ["Create initial layout",
"Fixinging icon ",
"Create question project"];
var arrImg =["assets/foursquare-check-in.png","assets/circle.png"];
var arrTextBtn = ["Approved", "In Progress", "In Riview", "Waiting"];
var arrColors = ['#C9FDFB', '#D2EFFF', '#F5D2C2'];

function addItem(){
    var list = document.getElementById("text-list");
    var checkllist = document.getElementById("checkllist");
    var button = document.getElementById("button");
    var textList = document.getElementById("textList");
    var imgRand =  document.getElementById("imgRand");
    var random_color = arrColors[Math.floor(Math.random() * arrColors.length)];
    
    randomText = arrText[Math.floor(Math.random() * arrText.length)];
    randomImage = arrImg[Math.floor(Math.random() * arrImg.length)];
    randomBtnText = arrTextBtn[Math.floor(Math.random() * arrTextBtn.length)];

    var listTask = document.createElement("div");
    var img = document.createElement("img");
    
    var btn = document.createElement("button");
    btn.innerHTML = randomBtnText;
    
    listTask.setAttribute('id',textList.value = randomText);
    img.setAttribute("src", imgRand.value =randomImage);
    listTask.appendChild (document.createTextNode(textList.value));
    list.appendChild(listTask);
    checkllist.appendChild(img);
    button.appendChild(btn).style.backgroundColor=random_color;
}