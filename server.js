const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//middlaware, para ejcutar antes de llegar a controlador
//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.use(express.static(__dirname + '/public')); //servir información publica




app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'danilo'
    });

})

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Danilo'
    });
})

app.listen(port, () => {
    console.log(`Escuchando peticiones puerto ${port}`);
});

//nodemon server-e js,css,hbs => nodemon detecte cambios de statics file

//helper: funcion cuando template requiere