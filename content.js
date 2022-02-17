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
	currentSpeed = result.speed;
	update();
});

// Listen for storage changes
chrome.storage.onChanged.addListener(function (changes, namespace) {
	currentSpeed = changes.speed.newValue;
	console.log('Speed changed to ' + currentSpeed);
	update();
});

setInterval(update, 1000);
