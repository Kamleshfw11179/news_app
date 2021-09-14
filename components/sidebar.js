function sidebar(){
    var arr = ["business","entertainment","general","health","science","sports","technology"]
    for(var i=0;i<arr.length;i++){
        var btn = document.createElement("button");
        btn.innerText=arr[i];
        btn.addEventListener("click",hello);
        document.getElementById("sidebar").append(btn);
    }
}
function hello(e){
var a = e.target.innerText;
getData(a)
}
async function getData(a){
var data = await fetch(`https://newsapi.org/v2/top-headlines?category=${a}&apiKey=7db9281a78d44813a3a0d19b3d7b33bf`);
var data1 = await data.json();
var arr = data1.articles
append(arr)
}
function append(arr){
console.log(arr)
document.getElementById("data").innerHTML=null;
arr.forEach(element => {
   let {author,description,publishedAt,title,urlToImage} = element;
   let div0 = document.createElement("div");
   let div1 =document.createElement("div");
   let div2 = document.createElement("div");
   let div3 = document.createElement("div");
   let head = document.createElement("h2");
   head.innerText=title;
   let auth = document.createElement("h4");
   auth.innerText=author;
   let date = document.createElement("p");
   date.innerText=publishedAt
   div1.append(head,auth,date);
   div1.setAttribute("class","div1")
   div2.setAttribute("class","div2")
   div3.setAttribute("class","div3")
   let info = document.createElement("h3");
   info.innerText=description;
   div2.append(info);
   let img = document.createElement("img");
   img.src = urlToImage;
   div3.append(img);
   div0.append(div1,div2,div3);
   div0.setAttribute("class",`${title+author}`);
   div0.setAttribute("id","bigDiv")
   document.getElementById("data").append(div0)
});

};
export default sidebar;