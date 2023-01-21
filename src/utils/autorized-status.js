export let isAuthorized = true;

export function setAuthStatus(status) {
    isAuthorized = status;
}

export function getAuthStatus() {
    return isAuthorized;

}
