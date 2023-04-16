let titleInterval;
let title = ["_", "c", "co", "conn", "conn#", "conn#6", "conn#63", "conn#634", "conn#6347",];

let iter = 0;
setInterval(() => {
    document.title = title[iter++ % title.length]
    if (iter >= title.length + 1) { iter = 0; }
}, 350)