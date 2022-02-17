const speedInput = document.getElementById('speed-input');

chrome.storage.local.get(['speed'], function(result) {
	speedInput.value = result.speed;
});

speedInput.addEventListener('input', function() {
	const speed = parseFloat(speedInput.value);
	chrome.storage.local.set({speed}, () => {});
});