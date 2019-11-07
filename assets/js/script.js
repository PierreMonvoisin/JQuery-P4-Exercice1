$(function() {
  $('img').css({'width' : '150px','display' : 'none'});
  $('a').mouseover(function(){$(this).css('cursor', 'pointer')});
  var choice = '';
  var iaChoice = '';
  var result = '';

  // Affiche votre choix Pierre / Feuille / Ciseaux
  $('a').click(function(){
    choice = $(this).attr('id');
    if ($('.person img').css('display', 'block')){
      $('.person img').css('display', "none")
    };
    $('.robot img').css('display', "none")
    $('.'+choice).css('display', 'block');
    $('label h1').text("Let's battle ! Appuyez sur la barre d'espace").css('color','green');
    console.log(choice);
  });
  // Lance le choix de l'IA
  $(document).keydown(function(e){
    if (e.keyCode == 32 ){
      if ($('.person img').is(':visible')){
        IAchoice();
        Results();
      } else {
        $('label h1').text('Faites votre choix :').css('color','red');
      };
    };

  });

  //Genère un nombre aléatoire et l'associe à Pierre / Feuille / Ciseaux et affiche le résultat
  function IAchoice(){
    iaChoice = Math.floor(Math.random() * 3) + 1;
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
    console.log(iaChoice);
  };

  //Vérification du gagnant
  function Results(){
    if (('IA' + choice) == iaChoice){
      result="Egalité";
      $('label h1').text(result).css('color','blue');
    } else if (choice == "rock" && iaChoice == "IAscissors"){
      result="Gagné !";
      $('label h1').text(result).css('color','green');
    } else if (choice == "paper" && iaChoice == "IArock"){
      result="Gagné !";
      $('label h1').text(result).css('color','green');
    } else if (choice == "scissors" && iaChoice == "IApaper"){
      result="Gagné !";
      $('label h1').text(result).css('color','green');
    } else if (iaChoice == "IArock" && choice == "scissors"){
      result="Perdu !";
      $('label h1').text(result).css('color','red');
    } else if (iaChoice == "IApaper" && choice == "rock"){
      result="Perdu !";
      $('label h1').text(result).css('color','red');
    } else if (iaChoice == "IAscissors" && choice == "paper"){
      result="Perdu !";
      $('label h1').text(result).css('color','red');
    }
    console.log(result);
  };
});
