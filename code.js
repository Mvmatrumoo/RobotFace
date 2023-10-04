var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var eyeSize = randomNumber (25,75);
var pupilSize = 10;
var eyeYcoordinate = 137.5;
var toothSize = 37.5;
var shiftofMouth = randomNumber(-45,45);
var lowerJawYCoordinate = 305;
var upperJawYCoordinate = 270;
var antanneShape= randomNumber(0,20);
fill("grey");
rect(50, 50, 300, 300);
fill("white");
rect(75, 100, 250, 75);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(125, eyeYcoordinate, eyeSize, eyeSize);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(200, eyeYcoordinate, eyeSize, eyeSize);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(275, eyeYcoordinate, eyeSize, eyeSize);
fill("black");
ellipse(275, eyeYcoordinate, pupilSize, pupilSize);
ellipse(125, eyeYcoordinate, pupilSize, pupilSize);
ellipse(200, eyeYcoordinate, pupilSize, pupilSize);
fill("white");
rect(100+shiftofMouth, 250, 200, 75);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(200+shiftofMouth, lowerJawYCoordinate, toothSize, toothSize);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(237.5+shiftofMouth, lowerJawYCoordinate, toothSize, toothSize);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(275+shiftofMouth, lowerJawYCoordinate, toothSize, toothSize);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(162.5+shiftofMouth, lowerJawYCoordinate, toothSize, toothSize);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(125+shiftofMouth, lowerJawYCoordinate, toothSize, toothSize);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(200+shiftofMouth, upperJawYCoordinate, toothSize, toothSize);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(237.5+shiftofMouth, upperJawYCoordinate, toothSize, toothSize);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(275+shiftofMouth, upperJawYCoordinate, toothSize, toothSize);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(162.5+shiftofMouth, upperJawYCoordinate, toothSize, toothSize);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
ellipse(125+shiftofMouth, upperJawYCoordinate, toothSize, toothSize);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
regularPolygon(200,210, randomNumber(3,20), 30);
fill(rgb(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255)));
regularPolygon(125,25, antanneShape, 30);
regularPolygon(275,25, antanneShape, 30);
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
