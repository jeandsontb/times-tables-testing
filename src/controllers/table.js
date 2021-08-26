const list = (req, res) => {
  const numbers = [];
  for(let i=1; i<=100; i++) {
    numbers.push(i);
  }
  res.render('table/list', {numbers});
}

const table = (req, res) => {
  const numbers = [];
  const num = req.params.id;
  
  for(let i=0; i<=100; i++) {
    numbers.push({
      num,
      i,
      result: num*i
    });
  }
  res.render('table/calc', {
    num: req.params.id,
    numbers
  });
}

module.exports = {
  list,
  table
}