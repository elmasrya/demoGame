$(document).ready(function() {


$('.welcome button').on('click', function (event){
    event.preventDefault();

    var char_type= $(this).attr('name'),
        char_name= $(this).text(),
        bguy = '';

        switch(char_type) {
          case "1":
            bguy='nuclearTruck';
            break;

          case "2":
            bguy='agentSmith';
            break;
        }

        var url = 'game.html?player=' + char_name + '&bguy='+ bguy;

        window.open(url,'','_self');
        //$('.ggName').prepend(player.name).find('.ggHealth').text(player.health).css("color","green");
        // $('.bgName').prepend(monster.name).find('.bgHealth').text(monster.health).css("color","green");
      }
);

});
