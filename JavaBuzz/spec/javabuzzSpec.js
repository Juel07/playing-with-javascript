describe('JavaBuzz', function () {
    let javaBuzz;

    beforeEach(function () {
        javaBuzz = new JavaBuzz();
    });

    describe('knows when a number is', function () {

        it('divisible by 3', function () {
            expect(javaBuzz.isDivisibleByThree(3)).toEqual(true);
        });
        it('divisible by 5', function () {
            expect(javaBuzz.isDivisibleByFive(5)).toEqual(true);
        });
        it('divisible by 15', function () {
            expect(javaBuzz.isDivisibleByFifteen(15)).toEqual(true);
        });

    });
    describe('knows when a number is not', function () {

        it('divisible by 3', function () {
            expect(javaBuzz.isDivisibleByThree(1)).toEqual(false);
        });
        it('divisible by 5', function () {
            expect(javaBuzz.isDivisibleByFive(9)).toEqual(false);
        });
        it('divisible by 15', function () {
            expect(javaBuzz.isDivisibleByFifteen(21)).toEqual(false);
        });

    });

});
