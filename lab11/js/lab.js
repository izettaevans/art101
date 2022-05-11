/**
* Author: Maxton Lenox and Izetta Evans
* Created: 5.11.2022
* Assignment: Lab 6
*
**/

$('#challengediv').append(
  $(document.createElement('button')).prop({
    id: 'challengebutton',
    type:'button',
    innerHTML: 'Press me',
  })
)

$('#problemsdiv').append(
  $(document.createElement('button')).prop({
    id: 'problemsbutton'
    type: 'button',
    innerHTML: 'Press Me',
  })
)

$('#resultsdiv').append(
  $(document.createElement('button')).prop({
    id: 'resultsbutton'
    type: 'button',
    innerHTML: 'Press me',
  })
)


// Add jQuery Even Listener for each button
$('#challengebutton').click(function() {
  $('#challengediv'.toggleClass('special sections');
})

$('#problemsbutton').click(function() {
  $('#problemsdiv').toggleClass('special sections');
})

$('#resultsbutton').click(function() {
  $('#resultsdiv').toggleClass('special sections');
})
