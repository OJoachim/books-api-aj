const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  
  //Test 1
  it('should return an error if "content" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(20)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });
  
  it('should return an error if arg is empty', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if arg contains one or more than two words', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe Smith')).to.equal('Error');
  });
  
  it('should format correctly fullName', () => {
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('jOHN dOE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
  });
});
