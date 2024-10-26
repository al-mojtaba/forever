const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const forever = async () => {

    let times = 0

    while (true) {
        await delay(10000);
        times += 1
        fetch(
          "https://discord.com/api/webhooks/1299133400161980427/AEKsEVSJ3C5OgDzLHQrEb3uuuvY0ujF6s5HV8Xy-8NTwOggIjmlY9VDKOOltHCZZ3EFF",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              content: `${times} https://tenor.com/view/t%C3%BCrk%C3%A7ay-%C3%A7oks%C4%B1cak-turkishtea-gif-22213553`,
            }),
          }
        );
      }
}

forever()
