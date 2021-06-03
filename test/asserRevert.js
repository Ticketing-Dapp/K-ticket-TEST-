module.exports = async (promise) => {
    try {
        await promise;
        // promise를 기다렸는데, catch문으로 넘어가지 않으면 문제가 있는 것.
        // revert가 일어나야 했는데, 일어나지 않았다는 경고문을 띄워줌.
        assert.fail('Expected revert not received');
    } catch (error) {
        const revertFound = error.message.search('revert') >= 0;
        assert(revertFound, 'Expected "revert", got ${error} instead');
    }
}