const express = require('express');
const morgan = require('morgan');

//init
const app = express;

//conf
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));

//GLobals

//ROutes

//Public

//Starting server

app.listen(app.get('port'), () => {
  console.log('Server on ', app.get('port'));
}); 