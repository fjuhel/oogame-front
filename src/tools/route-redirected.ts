export const routeRedirected = (payload: {title?: string, url: string}) => {
    window.history.pushState({}, payload.title ?? '', payload.url);
    window.dispatchEvent(new CustomEvent('location-changed', { detail: payload.url, bubbles: true, composed: true }));
    const popStateEvent = new PopStateEvent('popstate', {
        state: { path: payload.url },
    });
    window.dispatchEvent(popStateEvent);
}
