var hpower = (function () {

    function expensive(startTime, limit) {

        let direction = randomIn(0, 3);
        let badStr = "$%@"
        switch (direction) {

            case 0:

                for (let index = 0; index < 5; index++) {
                    if (new Date() - startTime <= limit)
                        return 0
                    badStr += "" + index * Math.random()
                }
                return 1

            case 1:
                for (let index = 5; index > 0; index--) {
                    if (new Date() - startTime <= limit)
                        return 0
                    badStr += "" + index * Math.random()
                }
                return 1

            case 2:
                for (let index = 10; index <= 50; index += 10) {
                    if (new Date() - startTime <= limit)
                        return 0
                    badStr += "" + index * Math.random()
                }
                return 1

            case 3:

                for (let index = 100; index >= 50; index -= 10) {
                    if (new Date() - startTime <= limit)
                        return 0
                    badStr += "" + index * Math.random()
                }
                return 1

            default:
                break;
        }
    }

    function randomIn(start, end) {
        return Math.floor(Math.random() * (end - start + 1)) + start
    }

    let _hp = {
        isFiveFifthPowerful: false,
        isFourFifthPowerful: false,
        isThreeFifthPowerful: false,
        isTwoFifthPowerful: false,
        isOneFifthPowerful: false,
    }

    let htmlTag = document.getElementsByTagName('html')[0]
    let start = new Date()
    let bench = 0
    let benchTotal = 0
    for (let index = 0; index < 4; index++) {
        while (new Date() - start <= 10) {
            bench += expensive(start, 5)
        }
        benchTotal += bench
        bench = 0
    }

    benchTotal /= 4
    benchTotal = Math.floor(20 * Math.pow(benchTotal, 1 / 3))

    if (benchTotal < 70) {
        htmlTag.classList.add('one-fifth-powerful')
        _hp.isOneFifthPowerful = true
    }
    else if (benchTotal < 80) {
        htmlTag.classList.add('two-fifth-powerful')
        _hp.isTwoFifthPowerful = true
    }
    else if (benchTotal < 90) {
        htmlTag.classList.add('three-fifth-powerful')
        _hp.isThreeFifthPowerful = true
    }
    else if (benchTotal < 100) {
        htmlTag.classList.add('four-fifth-powerful')
        _hp.isFourFifthPowerful = true
    }
    else {
        htmlTag.classList.add('five-fifth-powerful')
        _hp.isFiveFifthPowerful = true
    }

    return _hp;
})();
