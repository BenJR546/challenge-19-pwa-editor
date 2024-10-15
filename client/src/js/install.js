// client/src/js/install.js
const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Event handler for `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    // Stash the event so it can be triggered later
    window.deferredPrompt = event;
    // Remove the 'hidden' class from the install button
    butInstall.classList.toggle("hidden", false);
});

// Click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        // The deferred prompt isn't available
        return;
    }
    // Show the install prompt
    promptEvent.prompt();
    // Reset the deferred prompt variable, since it can only be used once
    window.deferredPrompt = null;
    // Hide the install button
    butInstall.classList.toggle("hidden", true);
});

// Handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
    // Clear the deferredPrompt so it can be garbage collected
    window.deferredPrompt = null;
    console.log("👍", "appinstalled", event);
});
