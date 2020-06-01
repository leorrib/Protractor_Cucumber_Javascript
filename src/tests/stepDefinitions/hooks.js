const { Before, After, Status } = require('cucumber')

Before({tags: "@form"}, async () => {
    await console.log("I execute before test")
});

After(async function (scenario) {
    if(scenario.result.status === Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png")
    }
});