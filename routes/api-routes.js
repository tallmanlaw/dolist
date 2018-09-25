const list = require('../data/list.js');



module.exports = function(app) {

  app.get('/list', function(req, res) {
    res.json(list);
  });
  
  app.post('/list', function(req, res) {
    
  for(let key in req.body) {
    if(!sampleList.hasOwnProperty(key)) {
      return res.json({ success: false });
    }
  }

  for(let key in req.body) {
    if(!req.body.hasOwnProperty(key)) {
      return res.json({ success: false });
    }
  }
  
  const confirmation = { success: true };
  req.body.completed = req.body.completed === 'true';

  list.push(req.body);

  res.json(confirmation);
});

  app.delete('/list', function(req, res) {
    // const chosen = req.params.list;
    list.splice(req.params.index, 1);
    
    res.json({ success: true });
  });
}
