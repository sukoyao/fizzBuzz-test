var should = chai.should()
describe('function fizzBuzz', function () {
  it('input is divisible by 3, expect output : Fizz', function () {
    let result = fizzBuzz(3)
    result.should.be.equal('Fizz')
  })
  it('input is divisible by 5, expect output : Buzz', function () {
    let result = fizzBuzz(25)
    result.should.be.equal('Buzz')
  })
  it('input is divisible by 3 and 5, expect output : FizzBuzz', function () {
    let result = fizzBuzz(30)
    result.should.be.equal('FizzBuzz')
  })
  it('input numbers cannot divisible by 3 and 5, return numbers', function () {
    let result = fizzBuzz(1)
    result.should.be.equal(1)
  })
})