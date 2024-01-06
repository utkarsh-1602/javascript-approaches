// Using Promise.all

// Question : https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript

var addTwoPromises = async function(promise1, promise2) {
    var v;
    await Promise.all([promise1, promise2]).then((values) => {
        v = values[0] + values[1]
    })
    return v
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */