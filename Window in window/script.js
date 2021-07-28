const videoElement = document.getElementById('video');
const buttonElement= document.getElementById('button');


async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata=()=>{
            videoElement.play();
        }
    } catch (error) {
        console.log("Error here..!",error);
    }
}
buttonElement.addEventListener('click',async ()=>{
    //Disable the button
    buttonElement.disabled = true;
    //start p in p
    await videoElement.requestPictureInPicture();
    buttonElement.disable = false; 
})
//on load
selectMediaStream();