import { EnterpriseCustomer, IndividualCustomer } from './customer';

afterEach(() => {
  jest.clearAllMocks();
});

describe('Individual Costumer', () => {
  const sut = new IndividualCustomer('Emanuel', 'Andrade', '123123');
  it('Should have all propertys', () => {
    expect(sut).toHaveProperty('firstName', 'Emanuel');
    expect(sut).toHaveProperty('lastName', 'Andrade');
    expect(sut).toHaveProperty('cpf', '123123');
  });
  it('Should return "firstname lastName"  ', () => {
    expect(sut.getName()).toBe(sut.firstName + ' ' + sut.lastName);
  });
  it('Should return identification number  ', () => {
    expect(sut.getIDN()).toBe(sut.cpf);
  });
});

describe('Enterprise Costumer', () => {
  const sut = new EnterpriseCustomer('Intellibrand', '123123');
  it('Should have all propertys', () => {
    expect(sut).toHaveProperty('name', 'Intellibrand');
    expect(sut).toHaveProperty('cnpj', '123123');
  });
  it('Should return "name"  ', () => {
    expect(sut.getName()).toBe(sut.name);
  });
  it('Should return identification number  ', () => {
    expect(sut.getIDN()).toBe(sut.cnpj);
  });
});
