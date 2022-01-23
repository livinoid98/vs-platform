window.onload = function(){
    let button = document.querySelector('.locate button');
    let chart = document.querySelector('.active_chart');
    let black = document.querySelector('.black');
    
    button.onclick = function(){
        document.querySelector('.locate button').classList.toggle('none_active_click');
        document.querySelector('.locate button').classList.toggle('active_click');
        black.classList.toggle('display_block');
        chart.classList.toggle('display_block');
    }

}