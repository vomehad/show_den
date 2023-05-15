export default {
    state: {
        dialogVisible: false,
    },
    mutations: {
        showDialog(state) {
            state.dialogVisible = true;
        },
        hideDialog(state) {
            state.dialogVisible = false;
        },
    },
}