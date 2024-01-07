// async keyword use to create ther instances of asynchronous function and return them a promise
// await keyword use to wait for till the promise will not be resolved or rejected
// it is introduced in ES2017
function resolveHellow() {
    return new Promise((resolve) => setTimeout(() => {
        resolve("Hellow, ");
    }, 2000));
}

function resolveWorld() {
    return new Promise((resolve) => setTimeout(() => {
        resolve("World!");
    }, 1000));
}

async function sequentialStart() {
    const Hellow = await resolveHellow();
    const World = await resolveWorld();

    console.log(`sequential: ${Hellow}`)
    console.log(World)

}
sequentialStart()

async function concurrentStart() {
    const Hellow = resolveHellow();
    const World = resolveWorld();

    console.log(`concurrent: ${await Hellow}`)
    console.log(await World)
}
concurrentStart()


// in above code sequential will take 3 seconds to complete while concurrent will take 2 seconds to complete ==> by this way we can optimize our code.