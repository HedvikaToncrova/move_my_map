
function setup() {
    const imageElement = document.getElementById('cat');
    const imageScaleFactor = 0.5;
    const outputStride = 16;
    const flipHorizontal = false;

    posenet.load().then(function(net){
        return net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride)
    }).then(function(pose){
        console.log(pose);
    })
}