const glob = require('glob');
const path = require('path');

const indexFiles = glob.sync(
    path.join(__dirname, 'features') + '/**/*[i|I]ndex.js'
);

app.all('*', (req, res, next) => {
    return next();
});

indexFiles.forEach((file) => {
    require(file)(app);
});