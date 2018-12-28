export const hasElementsInInterval = function(arr, func, lowerBound, upperBound) {
    // in: arr, an array sorted in increasing order of func
    //     func, a function that takes an element of sorted_list and returns a number
    //     lowerBound and upperBound: define a half-open interval [lowerBound, upperBound)
    // out: boolean, true iff there are any elements whose image under func is in [lowerBound, upperBound)
    let lowerCounter = 0;
    let upperCounter = arr.length;
    let middle, middle_val;

    while (true) {

        if (lowerCounter >= upperCounter) {
            return false;
        }

        middle = Math.floor((lowerCounter + upperCounter) / 2)
        middle_val = func(arr[middle]);

        if (middle_val >= upperBound) {
            upperCounter = middle;
        } else if (middle_val < lowerBound) {
            lowerCounter = middle + 1;
        } else {
            // otherwise, the middle value is inside the interval,
            // so there's at least one value inside the interval
            return true;
        }
    }
};


// PrecomputedComparator is similar to the OncoPrintJs implementation with
// three notable changes: rewritten with Flow/ES next and as a class, the input
// data structure is different, and no direction.
export default class PrecomputedComparator {

    constructor(data, comparator) {
        this.comparator = comparator;
        this.data = data;

        this.sort();
    }

    sort() {
        this.sortedData = this.data.sort(this.comparator);

        this.changePoints = [];
        for (let i = 0; i < this.sortedData.length; i += 1) {
            if (i === this.sortedData.length - 1) {
                break;
            }

            if (this.comparator(this.sortedData[i], this.sortedData[i + 1]) !== 0) {
                this.changePoints.push(i);
            }
        }

        this.samplesToIndex = {};
        for (let i = 0; i < this.sortedData.length; i += 1) {
            this.samplesToIndex[this.sortedData[i]] = i;
        }
    }

    compare(s1, s2) {
        let i1 = this.samplesToIndex[s1];
        let i2 = this.samplesToIndex[s2];

        if (typeof i1 === 'undefined' && typeof i2 === 'undefined') {
            return 0;
        } else if (typeof i1 === 'undefined') {
            return 1;
        } else if (typeof i2 === 'undefined') {
            return -1;
        }

        let shouldNegateResult = false;

        if (i1 === i2) {
            return 0;
        } else if (i1 > i2) {
            const tmp = i1;
            i1 = i2;
            i2 = tmp;
            shouldNegateResult = true;
        }

        let res = 0;
        if (hasElementsInInterval(this.changePoints, (x) => x, i1, i2)) {
            res = -1;
        }

        if (shouldNegateResult) {
            res *= -1;
        }

        return res;
    }
}
