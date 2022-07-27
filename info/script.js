window.addEventListener('load' , ()=>{
    let progressbars = document.querySelectorAll('.progress-bar');
    let values = [
        '80%' ,
        '60%' ,
        '30%' ,
        '70%' ,
        '60%' 
    ];
    progressbars.forEach((progress,index)=>{
        progress.style.width = values[index];
    });
});