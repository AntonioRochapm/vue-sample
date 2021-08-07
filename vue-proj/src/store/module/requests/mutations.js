export default {
    addRequest(state, payload){
        console.log('request payulora', payload);
        state.requests.push(payload);
    },
    setRequests(state, payload){
        state.requests = payload;
    }
}