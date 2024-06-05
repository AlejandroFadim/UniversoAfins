var text = document.getElementById("desc");
var img = document.getElementById("img");
var iframe = document.getElementById("video");
var titulo = document.getElementById("title");
var main = document.getElementById("mainI");
var date = "2024-06-04";
var data = Date.now()
var atual = new date(data)
console.log(atual)
var date2 = "2024-05-29";
function req() {
    fetch(
        `https://api.nasa.gov/planetary/apod?api_key=mzrjcSTeBLANsC0bl1lxj2XkPHupxi7HtMl7qnp3&start_date=2024-05-29&end_date=2024-06-04`
    )
        .then((res) => res.json())
        .then((json) => {
            for (var i = 0; i < json.length; i++) {
                console.log(json.length);
                var jsonAtual = json[i];
                var url = jsonAtual.url;
                var texto = jsonAtual.explanation;
                var title = jsonAtual.title;
                var divInfo = document.createElement("section");
                main.appendChild(divInfo);

                if (jsonAtual.media_type == "video") {
                    var divIframe = document.createElement("iframe");
                    divIframe.className = "iframe";
                    divIframe.src = url;

                    divInfo.appendChild(divIframe);
                } else {
                    var divImg = document.createElement("img");
                    divImg.src = url;
                    divInfo.appendChild(divImg);
                }
                var h1Info = document.createElement("h2");
                var h1Section = document.createElement("section");
                h1Section.appendChild(h1Info);
                main.appendChild(h1Section);

                h1Info.innerHTML = title;
                var DescSection = document.createElement("section");
                var descInfo = document.createElement("p");
                descInfo.innerHTML = texto;
                DescSection.appendChild(descInfo);
                main.appendChild(DescSection);
            }
        });
}
req();
