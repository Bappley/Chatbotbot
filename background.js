chrome.action.onClicked.addListener((tab) => {

	var newURL = "https://healthlab.urmc.rochester.edu/UniversityHealthScreen";
	chrome.tabs.create({ url: newURL });	
})

//Copyright 2021, Andrew Liu, All rights reserved.