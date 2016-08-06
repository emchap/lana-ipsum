var words = [
	"Coca Cola",
	"rock and roll",
	"dreams",
	"ocean",
	"America",
	"mustang",
	"fuck-me",
	"pumps",
	"cherry red",
	"beach",
	"night",
	"flowers in hair",
	"milkshake",
	"old dude",
	"drugs",
	"sun",
	"california",
	"orchestra",
	"dead inside",
	"radio",
	"staring at the sea",
	"cigarettes",
	"Ray Bans",
	"the beach at night",
	"sun stroke",
	"vodka rocks",
	"palm beach",
	"late capitalism",
	"toxic masculinity",
	"coconut oil",
	"cigarettes",
	"tanning",
	"corvette",
	"blue jeans",
	"rock and roll",
	"kiss",
	"codependency",
	"bikini",
	"fuzzy mules",
	"silk robe",
	"hot rollers",
	"dress",
	"lashes",
	"desperation",
	"silk robe",
	"California heat",
	"mascara",
	"ocean waves",
	"hot asphalt",
	"memories",
	"good old days",
	"bad old days",
	"bad old nights",
	"good girl"
	]

function capitalize(word) {
  return word[0].toUpperCase() + word.substr(1)
 }

function chooseWord() {
  var index = Math.floor(Math.random() * words.length)
  return words[index]
}


document.getElementById("button").addEventListener("click", function(e){
    var loremLength = parseInt(document.getElementById("userlength").value)
    var sentenceLength = parseInt(document.getElementById("sentencelength").value)
    
    var loremText = ""
    var wordsSoFar = 0
    
    for(var i = 0; i<loremLength; i+=1) {
      if (i == 0) {
        loremText += "<p>" + capitalize(chooseWord())
        wordsSoFar = 1
      }
      else if (Math.random() > .8 && wordsSoFar >= sentenceLength)  {
        if (Math.random() < .8) {
          loremText += ". " + capitalize(chooseWord())
        }
        else {
          loremText += ". </p><p>" + capitalize(chooseWord())
        }
        wordsSoFar = 1
      }
      else {
        loremText += " " + chooseWord()
        wordsSoFar += 1
      }
    }
    loremText += ".</p>"
    document.getElementById("textbox").innerHTML = loremText
  })

