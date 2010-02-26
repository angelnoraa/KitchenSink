var win = Ti.UI.currentWindow;

var tv = Ti.UI.createTableView({
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
});

function setData()
{
	var data = [];
	for (var i=0;i<30;i++)	
	{
		var row = Ti.UI.createTableViewRow({heigth:50});
		var l1 = Ti.UI.createLabel({text:'Label ' +  i, font:{fontSize:14}, color:'#888', left:5});
		row.add(l1);
		var image1 = Ti.UI.createImageView({url:'../images/chat.png', right:5});
		row.add(image1);
		data.push(row)
	}
	tv.setData(data);
}

var refresh = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REFRESH,
});
refresh.addEventListener('click', function()
{
	tv.setData([]);
	setTimeout(function()
	{
		setData();
	},1000)
});

win.rightNavButton = refresh;
win.add(tv);
setData();