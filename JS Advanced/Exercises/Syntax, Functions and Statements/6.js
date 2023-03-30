function solve(speed, zone) {

    let status = '';
    let difference = 0;
    let speedLimit = 0;

    let result;

    switch (zone) {
        case 'motorway':
            speedLimit = 130;

            if (speed <= speedLimit) {
                result = `Driving ${speed} km/h in a ${speedLimit} zone`;
            } else {
                difference = speed - speedLimit;

                if (difference <= 40 && difference > 20) {
                    status = 'excessive speeding';
                } else if (difference <= 20) {
                    status = 'speeding';
                } else {
                    status = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
            }
            break;

        case 'interstate':
            speedLimit = 90;

            if (speed <= speedLimit) {
                result = `Driving ${speed} km/h in a ${speedLimit} zone`;
            } else {
                difference = speed - speedLimit;

                if (difference <= 40 && difference > 20) {
                    status = 'excessive speeding';
                } else if (difference <= 20) {
                    status = 'speeding';
                } else {
                    status = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
            }
            break;

        case 'city':
            speedLimit = 50;

            if (speed <= speedLimit) {
                result = `Driving ${speed} km/h in a ${speedLimit} zone`;
            } else {
                difference = speed - speedLimit;

                if (difference <= 40 && difference > 20) {
                    status = 'excessive speeding';
                } else if (difference <= 20) {
                    status = 'speeding';
                } else {
                    status = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
            }
            break;

        case 'residential':
            speedLimit = 20;

            if (speed <= speedLimit) {
                result = `Driving ${speed} km/h in a ${speedLimit} zone`;
            } else {
                difference = speed - speedLimit;

                if (difference <= 40 && difference > 20) {
                    status = 'excessive speeding';
                } else if (difference <= 20) {
                    status = 'speeding';
                } else {
                    status = 'reckless driving';
                }
                result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
            }
            break;
    }

    console.log(result);
}
solve(21, 'residential');