$(function() {
  $('img').css({'width' : '150px','display' : 'none'});
  $('a').mouseover(function(){$(this).css('cursor', 'pointer')});

  // Affiche votre choix Pierre / Feuille / Ciseaux
  $('a').click(function(){
    var choice = $(this).attr('id');
    if ($('.person img').css('display', 'block')){
      $('.person img').css('display', "none")
    };
    $('.'+choice).css('display', 'block');
  });

  // Lance le choix de l'IA
  $(document).keydown(function(e){
    if (e.keyCode == 32 ){
      if ($('.person img').is(':visible')){
        $('label h1').text("Let's battle !").css('color','green');
        IAchoice();
        // Results();
      } else {
        $('label h1').text('Faites votre choix :').css('color','red');
      };
    };
  });

  //Genère un nombre aléatoire et l'associe à Pierre / Feuille / Ciseaux et affiche le résultat
  function IAchoice(){
    var iaChoice = Math.floor(Math.random() * 3) + 1;
    if (iaChoice == 1){
      iaChoice = "IArock";
    } else if (iaChoice == 2){
      iaChoice = "IApaper";
    } else {
      iaChoice = "IAscissors";
    }
    if ($('.robot img').css('display', 'block')){
      $('.robot img').css('display', "none")
    };
    $('.'+iaChoice).css('display', 'block');
    console.log(iaChoice)
  };
});
