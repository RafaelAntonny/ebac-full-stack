$(document).ready( () => {
    $('form').on('submit', ev => {
        const taskName = $('#task-name').val();

        $('.task-list').append(`<li>${taskName}</li>`)

        ev.preventDefault();
    })

    $('.task-list').on('click', 'li', function() {
        $(this).toggleClass('completed-task');
    })
})
