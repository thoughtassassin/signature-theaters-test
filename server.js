const express = require ('express');
const next = require ('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next ({dev});
const handle = app.getRequestHandler ();
const axios = require ('axios');

app
  .prepare ()
  .then (() => {
    const server = express ();

    server.use (express.json());

    server.get('/api', (req, res) => {
      res.send ({obj: 'I am the api.'});
    });

    server.post ('/validate', (req, res) => {
      const secret = '6Lcdd4EUAAAAALqy8qZxS2IC7snG26921sHbOvZM';
      const key = req.body.token;
      const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${key}`;
      axios
        .get (url)
        .then (response => {
          if (response.statusText == 'OK') {
            res.send(response.data).end()
         }
        })
        .catch (error => {
          console.error (error);
        });
      ;
    });

    server.get ('*', (req, res) => {
      return handle (req, res);
    });

    server.listen (process.env.PORT || 3000, err => {
      if (err) throw err;
      console.log ('> Ready on http://localhost:3000');
    });
  })
  .catch (ex => {
    console.error (ex.stack);
    process.exit (1);
  });
