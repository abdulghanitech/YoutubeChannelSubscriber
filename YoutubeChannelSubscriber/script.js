const allChannelsBox = document.querySelectorAll("#channel");
let totalUnsubscribedChannels = 0;
let count = 0;
let sleep = 0;
//for counting totalUnsubscribedChannels
allChannelsBox.forEach(function (channel, index) {
    if (channel.children[1].innerText === "SUBSCRIBE") {
        totalUnsubscribedChannels++;
    }
});
//for clicking all unsubscribed Channels
allChannelsBox.forEach(function (channel, index) {
    if (channel.children[1].innerText === "SUBSCRIBE") {
        setTimeout(function () {
            count++;
            console.log(
                "Current Channel ->" +
                    channel.children[0].children["title"].innerText
            );
            channel.children[1].children[0].children[0].click();
            console.log(
                "Subscribed! 😎" +
                    count +
                    "out of" +
                    totalUnsubscribedChannels +
                    "channels"
            );
        }, sleep);
        sleep += 30000;
    }
});
