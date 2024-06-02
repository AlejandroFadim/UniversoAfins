var text = document.getElementById("desc");
var img = document.getElementById("img");
var iframe = document.getElementById("video");
var titulo = document.getElementById("title");
var main = document.getElementById("mainI");
var date = "2021-02-01";
var date2 = "2021-02-07";
function req() {
    fetch(
        `https://api.nasa.gov/planetary/apod?api_key=mzrjcSTeBLANsC0bl1lxj2XkPHupxi7HtMl7qnp3&start_date=2021-02-01&end_date=2021-02-09`
    )
        .then((res) => res.json())
        .then((json) => {
            for (var i = 0; i < json.length; i++) {
                console.log(json.length);
                var jsonAtual = json[i];
                var url = jsonAtual.url;
                var texto = jsonAtual.explanation;
                var title = jsonAtual.title;
                var divInfo = document.createElement("div");
                main.appendChild(divInfo);

                var h1Info = document.createElement("h1");
                divInfo.appendChild(h1Info);
                h1Info.innerHTML = title;

                if (jsonAtual.media_type == "video") {
                    var divIframe = document.createElement("iframe");
                    divIframe.src = url;

                    divInfo.appendChild(divIframe);
                } else {
                    var divImg = document.createElement("img");
                    divImg.src = url;
                    divInfo.appendChild(divImg);
                }
                var descInfo = document.createElement("div");
                descInfo.innerHTML = texto;
                divInfo.appendChild(descInfo);
            }
        });
}
req();
