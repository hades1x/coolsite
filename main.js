let titleInterval;
let title = ["_", "e", "ee", "eep", "eepy", "eepy.", "eepy.lo", "eepy.lol",];

let iter = 0;
setInterval(() => {
    document.title = title[iter++ % title.length]
    if (iter >= title.length + 1) { iter = 0; }
}, 350)