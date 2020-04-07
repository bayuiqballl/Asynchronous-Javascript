function waitNumber() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(5);
        }, 2000);
    });
}
async function msg() {
    const msg = await waitNumber();
    console.log("Message:", msg);
}
msg(); // after