var buttons = document.querySelectorAll( 'button' );

function open () {

    var orderform = document.querySelector('.overlay');
    orderform.style.display = 'block';

}



for (var i =0; i<buttons.length; i++)
{

    buttons [i].addEventListener('click', open);
}


//кнопка в модальном окне



var closebtn = document.querySelector('.overlay button')

function OrderFormDisappear ()

{
    var orderform = document.querySelector('.overlay');
    orderform.style.display = 'none';
}


closebtn.addEventListener ('click', OrderFormDisappear);