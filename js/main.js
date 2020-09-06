var arrText = ["Create initial layout",
"Fixinging icon ",
"Create question project"];
var arrImg =["assets/foursquare-check-in.png","assets/circle.png"];
var arrTextBtn = ["Approved", "In Progress", "In Riview", "Waiting"];
var arrColors = ['#C9FDFB', '#D2EFFF', '#F5D2C2'];

function addItem(){
    var list = document.getElementById("div1");
    var checkllist = document.getElementById("div1");
    var button = document.getElementById("div1");
    var textList = document.getElementById("textList");
    var imgRand =  document.getElementById("imgRand");
    var random_color = arrColors[Math.floor(Math.random() * arrColors.length)];
    
    randomText = arrText[Math.floor(Math.random() * arrText.length)];
    randomImage = arrImg[Math.floor(Math.random() * arrImg.length)];
    randomBtnText = arrTextBtn[Math.floor(Math.random() * arrTextBtn.length)];

    var img = document.createElement("img");
    var listTask = document.createElement("p");
    
    var btn = document.createElement("button");
    btn.innerHTML = randomBtnText;
    
    listTask.setAttribute('id',textList.value = randomText);
    img.setAttribute("src", imgRand.value =randomImage);
    listTask.appendChild (document.createTextNode(textList.value));
    
    checkllist.appendChild(img);
    list.appendChild(listTask);
    button.appendChild(btn).style.backgroundColor=random_color;
}