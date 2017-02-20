var api = {};

var fotos = [
  {_id: 1, titulo: 'Leão 1', url: 'http://www.fundosanimais.com/Minis/leoes.jpg'},
  {_id: 2, titulo: 'Leão 2', url: 'http://www.fundosanimais.com/Minis/leoes.jpg'}
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

module.exports = api;
