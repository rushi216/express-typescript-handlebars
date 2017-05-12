import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as hbs from 'express-handlebars';

import index from './routes/index';

const app: express.Express = express();

app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/', index);

//handle 404
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

export default app;