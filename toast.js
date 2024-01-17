function jsToast(args) {

    let count = 0;

    if (document.querySelectorAll('.jsToast') != null) {
        count = document.querySelectorAll('.jsToast').length;
    }


    let container = '';

    if (document.querySelector('#toastContainer') == null) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.style.height = '100dvh';
        container.style.width = '100%';
        container.style.position = 'absolute';
        container.style.top = '0px';
        container.style.zIndex = '-10';
        container.style.display = 'flex';
        container.style.flexDirection = 'column-reverse';
    } else {
        container = document.getElementById('toastContainer');
    }


    const jsToast = document.createElement('div');
    jsToast.classList.add('jsToast');
    jsToast.style.height = 'auto';
    jsToast.style.width = '200px';
    jsToast.innerText = args.message || 'Default Toast Message';
    jsToast.style.marginBottom = (40 + (70 * count)) + 'px';
    jsToast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    jsToast.style.padding = '15px';
    jsToast.style.color = 'white';
    jsToast.style.marginLeft = '10px';
    jsToast.style.position = 'absolute';
    jsToast.style.bottom = '0px';


    container.appendChild(jsToast);

    document.body.append(container);

    removeJsToast(jsToast);

}

function removeJsToast(toast) {

    setTimeout(() => {
        toast.remove();
    }, 3000);

}