const { app, Menu, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow,
    copyWindow;

console.log('Mesage: Application is alreading launching...');

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        title: 'Electron Application'
    });

    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);

    mainWindow.maximize();

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, `views/index.html`),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.on('closed', () => {
        app.quit();
        console.log(' Mesage: Application finished');
    });

    console.log(' Mesage: Application started');
});

function appQuit() {
    app.quit();
}

const menu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Exit',
                accelerator: process.platform == 'darwin' ? 'command+q' : 'ctrl+q',
                click() {
                    appQuit();
                }
            }
        ]
    }
]