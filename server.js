// ...existing code...
// ...existing code...
// ...existing code...
const { HttpError } = require('./lib/utils/httpError');
// ...existing code...// ...existing code...// ...existing code...
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');


const logger = require('./lib/config/logger');
const usersRouter = require('./lib/routes/users');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => res.json({ message: 'layerX users API by Umair Hashmi — alive' }));
app.use('/api/users', usersRouter);


// 404
app.use((req, res, next) => {
next(new HttpError(404, 'Not Found'));
});


// error handler
app.use((err, req, res, next) => {
logger.error(err.status || 500, err.message);
res.status(err.status || 500).json({ success: false, message: err.message || 'Internal Error' });
});


app.listen(PORT, () => logger.info(`LayerX users app listening on http://localhost:${PORT}`));