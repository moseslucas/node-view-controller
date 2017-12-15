module.exports = {
  index (req, res) {
    const dogs = [
      {name: 'momo', lahi: 'shitzu'},
      {name: 'roger', lahi: 'jack-russel'},
      {name: 'asqual', lahi: 'askal'},
      {name: 'John Cena', lahi: 'WWWE Champion'}
    ]
    const framework = 'pupJS'
    res.render('dogs/index', {dogs, framework})
  }
}
