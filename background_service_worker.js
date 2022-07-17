function startRecording() {
    chrome.tabs.getSelected(null, function(tab) {
      var constraints = {
        audio: false,
        video: true,
        videoConstraints: {
          mandatory: {
            chromeMediaSource: 'tab',
            maxWidth: 1280,
            maxHeight: 720,
            maxFrameRate: 15,
            minAspectRatio: 1.77,
            googLeakyBucket: true,
            googTemporalLayeredScreencast: true
          }
        }
      };
      chrome.tabCapture.capture(constraints, handleCapture);
    });
  }

function handleCapture(MediaStream) {}


chrome.tabs.onActivated.addListener(function(tab){
    coneole.log(tab.tabId);
  });
