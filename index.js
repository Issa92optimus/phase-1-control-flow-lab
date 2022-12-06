function scuberGreetingForFeet(someFeet){

  if (someFeet<=400) {
  print = 'This one is on me!';
  }else if(someFeet >= 2000 && someFeet <= 2500){
  print = 'I will gladly take your thirty bucks.';
  }else if(someFeet > 2500){
  print = 'No can do.'
  }
  console.log(someFeet)
  return print
}

function ternaryCheckCity(someCity){
  return someCity === 'NYC'? 'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(passengerTip){
  switch (passengerTip){
    case 'generous':
      return 'Thank you so much.'

      case 'not as generous':
      return 'Thank you.'

      case 'thanks for everything':
        return 'Bye.'
      }
    }