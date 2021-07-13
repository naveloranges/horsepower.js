class _H {

    constructor() {
        this.isFiveFifthPowerful = false;
        this.isFourFifthPowerful = false;
        this.isThreeFifthPowerful = false;
        this.isTwoFifthPowerful = false;
        this.isOneFifthPowerful = false;
        this.htmlTag = document.getElementsByTagName('html')[0];
        let start = Date.now()
        let bench = 0
        let benchTotal = 0
        for (let index = 0; index < 4; index++) {
            while (Date.now() - start <= 10) {
                bench += this.expensive(start, 5)
            }
            benchTotal += bench
            bench = 0
        }

        benchTotal /= 4
        benchTotal = Math.floor(20 * Math.pow(benchTotal, 1 / 3))

        if (benchTotal < 70) {
            this.htmlTag.classList.add('one-fifth-powerful')
            this.isOneFifthPowerful = true
        }
        else if (benchTotal < 80) {
            this.htmlTag.classList.add('two-fifth-powerful')
            this.isTwoFifthPowerful = true
        }
        else if (benchTotal < 90) {
            this.htmlTag.classList.add('three-fifth-powerful')
            this.isThreeFifthPowerful = true
        }
        else if (benchTotal < 100) {
            this.htmlTag.classList.add('four-fifth-powerful')
            this.isFourFifthPowerful = true
        }
        else {
            this.htmlTag.classList.add('five-fifth-powerful')
            this.isFiveFifthPowerful = true
        }
    }

    expensive(startTime, limit) {

        let direction = this.randomIn(0, 3);
        let badStr = "$%@"
        switch (direction) {

            case 0:

                for (let index = 0; index < 5; index++) {
                    if (Date.now() - startTime <= limit)
                        return 0
                    badStr += "" + index * Math.random()
                }
                return 1

            case 1:
                for (let index = 5; index > 0; index--) {
                    if (Date.now() - startTime <= limit)
                        return 0
                    badStr += "" + index * Math.random()
                }
                return 1

            case 2:
                for (let index = 10; index <= 50; index += 10) {
                    if (Date.now() - startTime <= limit)
                        return 0
                    badStr += "" + index * Math.random()
                }
                return 1

            case 3:

                for (let index = 100; index >= 50; index -= 10) {
                    if (Date.now() - startTime <= limit)
                        return 0
                    badStr += "" + index * Math.random()
                }
                return 1

            default:
                break;
        }
    }

    randomIn(start, end) {
        return Math.floor(Math.random() * (end - start + 1)) + start
    }

}

const hpower = new _H()

export default hpower
