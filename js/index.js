
async function setup() {
    const imageElement = document.getElementById('cat');
    const imageScaleFactor = 0.5;
    const outputStride = 16;
    const flipHorizontal = false;

    const x = await posenet.load();
    const pose = await x.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride);
    console.log(pose)
}