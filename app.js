/** @format */

// Define varibales fot html eles
let orgName = $("#orgName");
let busninessType = $("#busninessType");
let desc = $("#desc");
let orgLocation = $("#location");
let issueDate = $("#issueDate");
let expiryDate = $("#expiryDate");
let staus = $("#status");
let comercialid;
let myKey = config.MY_KEY;

// when send button clicked the data will be collected from the API
$("#sendButton").on("click", (e) => {
	e.preventDefault();
	comercialid = $("#CommercialNumInput").val();
	fetch(`https://api.wathq.sa/v4/commercialregistration/info/${comercialid}`, {
		headers: {
			Accept: "application/json",
			Apikey: myKey,
		},
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data);

			// orgnaization name
			orgName.css("background", "#fff");
			orgName.val(data.crName);

			//Business Type
			busninessType.css("background", "#fff");
			busninessType.val(data.businessType.name);

			// Organization Description
			desc.css("background", "#fff");
			desc.val(data.activities.description);

			// Organiztion Location
			orgLocation.css("background", "#fff");
			orgLocation.val(data.location.name);

			// Organiztion comercial issue date
			issueDate.css("background", "#fff");
			issueDate.val(data.issueDate);

			//Expiry date
			expiryDate.css("background", "#fff");
			expiryDate.val(data.expiryDate);

			// Organiztion commerical status
			if (data.status.id === "active") {
				staus.addClass("btn-success");
			} else if (data.status.id === "canceled") {
				staus.addClass("btn-danger");
			}
			staus.val(data.status.name);
			$("#emailInput");
			$("#emailInput").val("heuh");
		})
		.catch((error) => {
			console.log("error: ", error);
		});
});
