new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("WZY && LJ")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第一个365...")
    .pause(3000)
    .go();

new TypeIt('#talkToLJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();