function formatcurrency(priceCents){
    return (Math.round(priceCents)/100).toFixed(2);
    }

describe('Test Suite : Format Currency',()=>{
it('Converts Cents Into Dollars',()=>{
    expect(formatcurrency('2095')).toEqual('20.95')
})
it('Works With Zero',()=>{
    expect(formatcurrency('0')).toEqual('0.00')
})
it('Rounding to the Nearest Value',()=>{
    expect(formatcurrency('2000.5')).toEqual('20.01')
})
})