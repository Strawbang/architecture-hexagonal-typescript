import { createMock } from 'ts-auto-mock';
import { method, On } from 'ts-auto-mock/extension';
import { IUserRepo } from '../src/infrastructure/IUserRepo';

describe('User', () => {
    let mockIUserRepo : IUserRepo;

    beforeEach(() => {
      mockIUserRepo = createMock<IUserRepo>();
    });

    it('Get user', async () => {
      const mockMethod : jest.Mock = On(mockIUserRepo).get(method(mock => mock.getUsers));
      mockMethod();
      expect(mockMethod).toHaveBeenCalled();
    })
    // it('Username should assign the value', async () => {
    //   expect(mockIUserRepo.username).toEqual('')
    // });

    // it('Password should assign the value', async () => {
    //   expect(mockIUserRepo.password).toEqual('')
    // });

    // it('getUsername should get the spy', () => {
    //   const mockMethod: jest.Mock = On(mockIUserRepo).get(method(mock => mock.getUsername));
    //   mockMethod();
    //   expect(mockMethod).toHaveBeenCalled();
    // });

    // it('getPassword should get the spy', () => {
    //   const mockMethod: jest.Mock = On(mockIUserRepo).get(method(mock => mock.getPassword));
    //   mockMethod();
    //   expect(mockMethod).toHaveBeenCalled();
    // });
})