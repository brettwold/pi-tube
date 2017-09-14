import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
  it('should render properly', async () => {
    await request(app).get('/').expect(200);
  });
});

describe('POST /addstream', () => {
  it('should redirect to home', (done) => {
    request(app)
      .post('/addstream')
      .send({id: '256567', name: 'thename'})
      .expect(302)
      .expect('Location', '/')
      .end(function(err, res) {
        done();
      });
  });

  it('should error without a valid parameter', async () => {
    await request(app)
      .post('/addstream')
      .expect(500);
  });
});

describe('GET /removestream/:streamid', () => {
  it('should redirect to home', (done) => {
    request(app)
      .get('/removestream/256567')
      .expect(302)
      .expect('Location', '/')
      .end(function(err, res) {
        done();
      });
  });
});

describe('GET /stream/:streamid', () => {
  it('should redirect to home', (done) => {
    request(app)
      .get('/stream/256567')
      .expect(302)
      .expect('Location', '/')
      .end(function(err, res) {
        done();
      });
  });
});

describe('GET /streamstop', () => {
  it('should redirect to home', (done) => {
    request(app)
      .get('/streamstop')
      .expect(302)
      .expect('Location', '/')
      .end(function(err, res) {
        done();
      });
  });
});

describe('GET /404', () => {
  it('should return 404 for non-existent URLs', async () => {
    await request(app).get('/404').expect(404);
    await request(app).get('/notfound').expect(404);
  });
});
