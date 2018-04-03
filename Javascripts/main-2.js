var btn = document.querySelector('button');
var checklist = document.querySelector('ol');
var Tasks = document.querySelectorAll('ol li');

btn.addEventListener('click',AddToDoTask)

for (i = 0;i < Tasks.length;i++)

{
    
    Tasks [i].addEventListener('click',MarkItDone);

}


function AddToDoTask ()

{
    var task = prompt("Напиши задание:");
    if (!task)

    {

    }

    else

    {
        var listItem = document.createElement('li');
        listItem.textContent = task;
        checklist.appendChild(listItem);

        var Tasks = document.querySelectorAll('ol li');
        for (i = 0;i < Tasks.length;i++)

        {
    
            Tasks [i].addEventListener('click',MarkItDone);

        }
    }
}


function MarkItDone ()

{
    this.classList.toggle('done');
}