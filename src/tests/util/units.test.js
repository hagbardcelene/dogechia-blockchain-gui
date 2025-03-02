const units = require('../../util/units');

describe('units', () => {
  describe('#getUnit', () => {
    it('gets unit of dogechia', () => {
      const result = units.getUnit('dogechia');

      expect(result).toBe(1);
    });
    it('gets unit of mojo', () => {
      const result = units.getUnit('mojo');

      expect(result).toBe(1e-12);
    });
    it('gets unit of coloured coin', () => {
      const result = units.getUnit('colouredcoin');

      expect(result).toBe(1e-9);
    });
    it('supports uppercase characters', () => {
      const result = units.getUnit('DOGECHIA');

      expect(result).toBe(1);
    });
    it('gets unit of chia using alias', () => {
      const result = units.getUnit('dg');

      expect(result).toBe(1);
    });
    it('gets unit of mojo using alias', () => {
      const result = units.getUnit('mj');

      expect(result).toBe(1e-12);
    });
    it('gets unit of coloured coin using alias', () => {
      const result = units.getUnit('cc');

      expect(result).toBe(1e-9);
    });
    it('throws an error if unit is not supported', () => {
      try {
        units.getUnit('bitcoin');
      } catch (err) {
        expect(err).toEqual(new Error("Unit 'bitcoin' is not supported"));
      }
    });
  });
  describe('#getDisplay', () => {
    it('gets display of dogechia', () => {
      const result = units.getDisplay('dogechia');

      expect(result).toEqual({
        format: '{amount} DG',
        fractionDigits: 12,
      });
    });
    it('gets display of mojo', () => {
      const result = units.getDisplay('mojo');

      expect(result).toEqual({
        format: '{amount} MJ',
        fractionDigits: 0,
      });
    });
    it('gets display of coloured coin', () => {
      const result = units.getDisplay('colouredcoin');

      expect(result).toEqual({
        format: '{amount} CC',
        fractionDigits: 3,
      });
    });
    it('throws an error if unit is not supported', () => {
      try {
        units.getDisplay('bitcoin');
      } catch (err) {
        expect(err).toEqual(new Error("Unit 'bitcoin' is not supported"));
      }
    });
  });
  describe('#setUnit', () => {
    it('adds a new unit', () => {
      units.setUnit('bitcoin', 1);

      const result = units.getUnit('bitcoin');

      expect(result).toEqual(1);
    });
    it('modifies an existing unit', () => {
      units.setUnit('dogechia', 9);

      const result = units.getUnit('dogechia');

      expect(result).toEqual(9);

      units.setUnit('dogechia', 1);
    });
  });
  describe('#setDisplay', () => {
    it('sets a new display', () => {
      units.setDisplay('bitcoin', {
        format: '{amount} BTC',
        fractionDigits: 0,
      });

      const result = units.getDisplay('bitcoin');

      expect(result).toEqual({
        format: '{amount} BTC',
        fractionDigits: 0,
      });
    });
    it('updates an existing display', () => {
      units.setDisplay('dogechia', {
        format: '{amount} TXDG',
        fractionDigits: 0,
      });

      const result = units.getDisplay('dogechia');

      expect(result).toEqual({
        format: '{amount} TXDG',
        fractionDigits: 0,
      });
    });
  });
});
