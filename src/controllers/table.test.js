const tableController = require('./table');
const sinon = require('sinon');

describe('table controller', () => {
  it('list', () => {
    const numbers = [];
    for(let i=1; i<=100; i++) {
      numbers.push(i);
    }
    let res = {      
      render: function(){}
    }

    let mock = sinon.mock(res);
    mock.expects('render').once().withArgs('table/list', {numbers} );
    tableController.list({}, res);
  })
})

describe('calculate the table', () => {
  it('table', () => {
    const numbers = [];
    const num = 10;
    const id = 10;
    
    for(let i=0; i<=100; i++) {
      numbers.push({
        num,
        i,
        result: num*i
      });
    }

    let res = {
      render: function(){}
    }
    let mock = sinon.mock(res);
    mock.expects('render').once().withArgs('table/calc', {
      num,
      numbers
    })
    tableController.table({ params: { id }}, res);
  })
})