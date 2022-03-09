import { createMock } from 'ts-auto-mock';
import { method, On } from 'ts-auto-mock/extension';
import UserInterface from '../src/domain/IUser';

describe('User', () => {
    let mockUserInterface : UserInterface;

    beforeEach(() => {
      mockUserInterface = createMock<UserInterface>();
    });

    it('Username should assign the value', async () => {
      expect(mockUserInterface.username).toEqual('')
    });

    it('Password should assign the value', async () => {
      expect(mockUserInterface.password).toEqual('')
    });

    it('getUsername should get the spy', () => {
      const mockMethod: jest.Mock = On(mockUserInterface).get(method(mock => mock.getUsername));
      mockMethod();
      expect(mockMethod).toHaveBeenCalled();
    });

    it('getPassword should get the spy', () => {
      const mockMethod: jest.Mock = On(mockUserInterface).get(method(mock => mock.getPassword));
      mockMethod();
      expect(mockMethod).toHaveBeenCalled();
    });
})