const movieHolder = document.querySelector('#box');

$('#submit').on('click', function(e){
    e.preventDefault();
    let newDiv=document.createElement('div');
    let newTitle=document.querySelector('#title').value;
    let newRating=document.querySelector('#rate').value;
    newDiv.innerText=newTitle + ": " + newRating;
    movieHolder.append(newDiv);
});

$('#clear').on('click', function(){
    movieHolder.empty();
})