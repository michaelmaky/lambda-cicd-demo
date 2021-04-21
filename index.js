exports.handler = async function (event, context) {
    const now = new Date().toISOString();
    const response = {
        statusCode: 200,
        body: 'Function Executed Successfully! Time:' + now
    };
    return response;
}