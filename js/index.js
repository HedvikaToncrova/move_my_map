
async function setup() {
    const imageElement = document.getElementById('cat');
    const imageScaleFactor = 0.5;
    const outputStride = 16;
    const flipHorizontal = false;

    const model = await posenet.load();
    const pose = await model.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride);
    console.log(pose)
}