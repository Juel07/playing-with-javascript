class JavaBuzz {

    play(num) {
        if (this.isDivisibleByFifteen(num)) {
            return "JavaBuzz";
        }
        if (this.isDivisibleByThree(num)) {
            return "Java";
        }
        if (this.isDivisibleByFive(num)) {
            return "Buzz";
        }
        return num;
    }

    isDivisibleByFifteen(num) {
        return num % 15 === 0
    }

    isDivisibleByFive(num) {
        return num % 5 === 0
    }

    isDivisibleByThree(num) {
        return num % 3 === 0
    }
}
