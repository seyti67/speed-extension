let currentSpeed = 1;
function update() {
	const elements = Array.from(document.getElementsByTagName('video'));

	elements.forEach(element => {
		if (element.getAttribute('updated-speed') == currentSpeed) return;

		element.setAttribute('updated-speed', currentSpeed);
		element.playbackRate = currentSpeed;
	});
}

chrome.storage.local.get(['speed'], function(result) {
	console.log('Speed currently is ' + result.speed);
});

// Listen for storage changes
chrome.storage.onChanged.addListener(function (changes, namespace) {
	currentSpeed = changes.speed.newValue;
	console.log('Speed changed to ' + currentSpeed);
	update();
});

update();
setInterval(update, 1000);
