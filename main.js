// Import the speed keeping logic
const {start, guard} = require('./speedkeeper.js');

// Import only the necessary things from Electron to make a tray application
const {app, Menu, Tray} = require('electron');
const path = require('path');
const assets = path.join(__dirname, '/assets');

// The icon instance
let icon = null;

// Create the asynchronous routine for starting
const routine = async () => {
	// Wait for the application to be ready
	await app.whenReady();

	// Hide it from the dock
	app.dock.hide();

	// Find the icon that the application will show
	icon = new Tray(path.join(assets, 'logo@3x.png'));

	// Set the tooltip
	icon.setToolTip('speedkeeper');
	icon.setToolTip('speedkeeper by Astrihale');

	// Create the context menu that will appear when you click the button
	const contextMenu = Menu.buildFromTemplate([
		{
			label: 'Exit', type: 'normal', checked: true,
			click(_item, _browserWindow) {
				app.exit(0);
			}
		},
		{type: 'separator'},
		{label: 'Speedkeeper by Astrihale', type: 'normal'}
	]);
	start();

	// Show the context menu on tray
	icon.setContextMenu(contextMenu);

	// Set the listener for on and off
	contextMenu.items[2].enabled = false;
};

// Start the asynchronous routine
guard(routine);
