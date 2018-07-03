function shout(string) {
<<<<<<< HEAD
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  var lowercase = string.toLowerCase()
  var uppercase = string.toUpperCase()

  if (string === lowercase) {
    return "I can't hear you!"
} else if (string === uppercase) {
    return "YES INDEED!"
} else if (string === "I love you, Grandma.") {
    return "I love you, too."
=======
  if (string.toLowerCase() === string) {
  return 'I can’t hear you!';
} if (string.toUpperCase() === string) {
  return 'YES INDEED!'
} if (string === 'I love you, Grandma.') {
  return 'I love you, too.'
>>>>>>> 29a05943ee9478566c5a865428bc42bb2180bc40
}
}
