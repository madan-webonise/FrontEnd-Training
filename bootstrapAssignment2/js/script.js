var showMap = document.getElementById("showMap");
var showList = document.getElementById("showList");
showMap.addEventListener("click",function(){
	searchOption.style.display="block";
	if(document.getElementById("searchOnMapId").style.display == "none") {
		searchOnMapId.style.display = "block";
		listingId.style.display = "none";
		homeMapId.style.display="none";  				
	}  
	else {
		searchOnMapId.style.display = "none";
		listingId.style.display = "none";
		homeMapId.style.display="block";
	}			
});
showList.addEventListener("click",function() {
	if(document.getElementById("listingId").style.display == "none") {
		listingId.style.display = "block";
		searchOnMapId.style.display = "none";
		homeMapId.style.display="none";
		searchOption.style.display="none";
	}  
	else {
		listingId.style.display = "none";
		homeMapId.style.display="block";
		searchOnMapId.style.display = "none";
	}	
});