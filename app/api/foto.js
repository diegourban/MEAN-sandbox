var api = {};

var CONTADOR = 2;

var fotos = [
  {_id: 1, titulo: 'Leão', url: 'http://www.fundosanimais.com/Minis/leoes.jpg'},
  {_id: 2, titulo: 'Lobo', url: 'http://www.fundosanimais.com/Minis/lobo.jpg'}
];

api.lista = function(req, res) {
  res.json(fotos);
};

api.buscaPorId = function(req, res) {
  var fotoEncontrada = fotos.find(function(foto) {
    return foto._id == req.params.id;
  });

  res.json(fotoEncontrada);
};

api.removePorId = function(req, res) {
  fotos = fotos.filter(function(foto) {
    return foto._id != req.params.id;
  });

  res.sendStatus(204);
};

api.adiciona = function(req, res) {
  var foto = req.body;
  foto._id = ++CONTADOR;
  fotos.push(foto);

  res.json(foto);
};

api.atualiza = function(req, res) {
  var id = req.params.id;
  var foto = req.body;

  var indice = fotos.findIndex(function(foto) {
    return foto._id == id;
  });

  fotos[indice] = foto;

  res.sendStatus(200);
}

module.exports = api;
