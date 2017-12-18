var showDropDown =document.getElementsByClassName("dropDownIcon");

showDropDown.onclick = function() {
	alert("Click Event");
	var recommendationHideShow = document.getElementsByClassName("recommendations");
	var getStatus = recommendationHideShow.style.display;
		if (getStatus == "block") {
			recommendationHideShow.style.display = "none";
		}
		else {
			recommendationHideShow.style.display = "block";
		}
}