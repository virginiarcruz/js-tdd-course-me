describe('Main', function () {
  describe('Method A', function () {
    context('Case 1', function () {
      it.skip('should happen blabla', function () {
        // espera que aconteça
        // entrada de dados - metodo
        // espera retornar
        throw new Error('just on error');
      });
    });
    context('Case 2', function () {
      it('should happen Outroblabla', function () {
        throw new Error('just on error');
      });

      it('should happen Novoblabla', function () {

      });
    });
  });
  describe('Method B', function () {

  });
});
