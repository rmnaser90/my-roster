const renderer = new Renderer
const apiManager = new APImanagerFront

const standby = function(obj) {
    console.log('error');
    $(obj).attr('src','default.png') 
    $(obj).css('width','50%')
}

// $('#playersContainer').on('error', '.headshot',  function() {
//     console.log('error loading img');
//     $(this).attr('src','default.png') 
// })


$('#getTeamPlayers').on('click', function () {
    const teamName = $('#inputTeamName').val().toLowerCase()
    $('#inputTeamName').val('')
    apiManager.getTeamPlayers(teamName, renderer.render)

})