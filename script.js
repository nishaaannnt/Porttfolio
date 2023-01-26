var sideMenu =document.getElementById("sidemenu");

function openmenu(){
    sideMenu.style.right='0';
}

function closemenu(){
    sideMenu.style.right='-200px';
}

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements =document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));