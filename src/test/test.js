const request = require('supertest');
const app = require('../app');

describe('Get project by id', () => {
  test('testing', () => {
    expect(1 + 1).toBe(2);
  });

  test('Route / return status (302) ', (done) => {
    request(app)
      .get('/')
      .expect(302)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  test('Route /home return status (200) ', (done) => {
    request(app)
      .get('/home')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  test('Route /api/v1/search/javascript return status (200) ', (done) => {
    request(app)
      .get('/api/v1/search/javascript')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(typeof res.body).toBe('object');
        done();
      });
  });

  test('Route /api/v1/jj return status (404) ', (done) => {
    request(app)
      .get('/api/v1/jj')
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual({
          StatusCode: '404',
          data: {
            message: 'page not found 404',
          },
        });
        done();
      });
  });

  test('Route /ggg return status (302) ', (done) => {
    request(app)
      .get('/ggg')
      .expect(302)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});
