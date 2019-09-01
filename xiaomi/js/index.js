function selects(name) {
    let palte=document.getElementsByClassName("palte")[0]
    let baibaobox=document.getElementsByClassName("baibaobox")[0]
    let palte_ul=document.getElementsByClassName("tab-content")[0].children[0].style
    let baibaobox_ul=document.getElementsByClassName("tab-content")[0].children[1].style
    
    let palte_true=palte.classList.contains('actives')
    let baibaobox_true=baibaobox.classList.contains('actives')




    if (name==='palte'){
        palte_ul.display='block';
        if(baibaobox_true){
            baibaobox.classList.remove('actives');
        }
        palte.classList.add('actives');
        baibaobox_ul.display='none';
        console.log(palte_ul.display)
        console.log("baibaobox_ul:"+baibaobox_ul.display)
    }else{
        baibaobox_ul.display='block';
        if(palte_true){
            palte.classList.remove('actives');
        }
        baibaobox.classList.add('actives');
        palte_ul.display='none';
        console.log(palte_ul.display)
        console.log("baibaobox_ul:"+baibaobox_ul.display)
    }
}


function show(name) {
    if (name==='qr'){
        let qr=document.getElementsByClassName("qr")[0];
        qr.style.display='block';
    }else if(name==='more'){
        let more=document.getElementsByClassName("header-more-list")[0];
        more.style.display="block";
    }else{
        let sign=document.getElementsByClassName("sign-photo")[0];
        sign.style.display="block";
    }
    
}

function hiddend(name) {
    if (name==='qr'){
        let qr=document.getElementsByClassName("qr")[0];
        qr.style.display='none';
    }else if(name==='more'){
        let more=document.getElementsByClassName("header-more-list")[0];
        more.style.display="none";
    }else{
        let sign=document.getElementsByClassName("sign-photo")[0];
        sign.style.display="none";
    }
}