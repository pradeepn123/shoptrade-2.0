export default () => {
    const bannerImage = document.querySelectorAll('[data-video-banner] img');
    const bannerVideo = document.querySelectorAll('[data-home-banner] video');

    bannerVideo.forEach((video) => {
        video.onloadeddata = function () {
            bannerImage.forEach((img) => {
                img.style.display = "none";
            
            });
        };
    });

    setTimeout( ()=>{
        bannerImage.forEach((img) => {
            img.style.display = "none";
        });
    },3000)
}