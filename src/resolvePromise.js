/**
 * filename         ../src/resolvePromise.js
 * @fileoverview    TODO (to write)
 * notes/todos      implement promise as per lecture slides
 */

/** When promise changes, data and error are set to null, waiting for the promise to resolve or to reject
 *
 */
function resolvePromise(promiseToResolve, promiseState, notify) {
    promiseState.promise = promiseToResolve
    promiseState.data = null
    promiseState.error = null
    if (notify) {notify()}

    if (promiseToResolve === null) {
        return
    }

    // data is set when promise is fulfilled.
    function saveDataACB(result) {
        if (promiseState.promise !== promiseToResolve) {return} // race-condition check
        promiseState.data = result
        if (notify) {notify(promiseState.data)}
    }

    // error is set when data is rejected
    function saveErrorACB(err) {
        if (promiseState.promise !== promiseToResolve) {return}
        promiseState.error = err
        if (notify) {
            console.log(err)
            notify(err)}
    }

    return promiseToResolve.then(saveDataACB).catch(saveErrorACB)
}

export default resolvePromise;