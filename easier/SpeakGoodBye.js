(function (window) {
  
  var byeSpeaker = {};
  
  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";
  
  // STEP 8: Rewrite the 'speak' function such that it is attached to the
  // byeSpeaker object instead of being a standalone function.
  // See Lecture 52, part 2
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  
  // STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
  // 'byeSpeaker' on the global scope as well.
  window.byeSpeaker = byeSpeaker;
  
  })(window);