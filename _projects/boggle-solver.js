---
title: boggle
description: Eventually will be a fully functional game of boggle. Right now, it simply highlights a word if it exists in the board.
repo: https://github.com/abernet2/boggle-solver
---

function createScript(url){
    var imported = document.createElement("script");
    imported.src = url;
    imported.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(imported);
}

var links = [
    "https://rawgit.com/abernet2/boggle-solver/master/web/build/react.js",
    "https://rawgit.com/abernet2/boggle-solver/master/web/build/react-dom.js",
    "https://rawgit.com/abernet2/boggle-solver/master/web/build/jquery-2.2.1.min.js",
    'https://rawgit.com/abernet2/boggle-solver/master/web/bundle.js'
]

links.forEach(createScript);

var div = document.createElement("div");
div.id = 'example';
document.getElementById('boggle').appendChild(div);