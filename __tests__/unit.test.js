// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('Test Functions', () => {
  describe('isPhoneNumber', () => {
    test('correct number', () => {
      expect(isPhoneNumber('858-428-4324')).toBe(true);  
    });
    test('correct number', () => {
      expect(isPhoneNumber('123-456-7438')).toBe(true);  
    });
    test('wrong number', () => {
      expect(isPhoneNumber('------')).toBe(false);  
    });
    test('wrong number', () => {
      expect(isPhoneNumber('eee-333-4301')).toBe(false);  
    });
  });

  describe('isEmail', () => {
    test('correct email', () => {
      expect(isEmail('atiku@ucsd.edu')).toBe(true);  
    });
    test('correct email', () => {
      expect(isEmail('atiku9032@ucsd.edu')).toBe(true);  
    });
    test('wrong email', () => {
      expect(isEmail('aarav@ucsd')).toBe(false);  
    });
    test('wrong email', () => {
      expect(isEmail('aaravtiku.ucsd.edu')).toBe(false);  
    });
  });

  describe('isStrongPassword', () => {
    test('strong password', () => {
      expect(isStrongPassword('JesusChrist00122003!')).toBe(true);  
    });
    test('strong password', () => {
      expect(isStrongPassword('Aarav0112')).toBe(true);  
    });
    test('weak password', () => {
      expect(isStrongPassword('aarav')).toBe(false);  
    });
    test('weak password', () => {
      expect(isStrongPassword('123')).toBe(false);  
    });
  });

  describe('isDate', () => {
    test('correct date', () => {
      expect(isDate('11/30/2024')).toBe(true);  
    });
    test('correct date', () => {
      expect(isDate('5/5/2023')).toBe(true);  
    });
    test('wrong date', () => {
      expect(isDate('2023-1-12')).toBe(false);  
    });
    test('wrong date', () => {
      expect(isDate('24/24/2024')).toBe(false);  
    });
  });

  describe('isHexColor', () => {
    test('is hex color', () => {
      expect(isHexColor('#10AA50')).toBe(true);  
    });
    test('is hex color', () => {
      expect(isHexColor('#10AB20')).toBe(true);  
    });
    test('is not hex color', () => {
      expect(isHexColor('#GFH22H')).toBe(false);  
    });
    test('is not hex color', () => {
      expect(isHexColor('#GFG10H')).toBe(false);  
    });
  });
});
