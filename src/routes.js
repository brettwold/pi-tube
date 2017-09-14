import { Router } from 'express';
import StreamService from './services/stream';

const routes = Router();
const stream = new StreamService();

routes.get('/', (req, res) => {
  res.render('index', { title: 'Pi-Tube', streams: stream.getStreams() });
});

routes.post('/addstream', (req, res) => {
  if(req.body.id && req.body.name) {
    stream.addStream(req.body.id, req.body.name);
    res.redirect('/');
    return;
  }
  res.status(500).send('Invalid parameters');
});

routes.get('/removestream/:streamId', (req, res) => {
  stream.removeStream(req.params['streamId']);
  res.redirect('/');
});

routes.get('/stream/:streamId', (req, res, next) => {
  stream.startStream(req.params['streamId']);
  res.redirect('/');
});

routes.get('/streamstop', (req, res, next) => {
  stream.stopStreams();
  res.redirect('/');
});

export default routes;
