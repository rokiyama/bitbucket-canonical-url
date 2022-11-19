chrome.runtime.onMessage.addListener(
  ({ name, path }: { name?: string; path?: string }) => {
    if (name !== "canonizeBitbucketUrl") {
      console.error("unknown message", name);
      return;
    }
    if (!path) {
      console.error("path is required");
      return;
    }
    const pullRequestAnchor = document.querySelector(
      "nav[aria-label='Breadcrumbs'] > ol > li:last-child > a"
    ) as HTMLAnchorElement;
    if (!pullRequestAnchor) {
      console.error("could not get the pull request anchor element");
      return;
    }
    const canonical = pullRequestAnchor.href + "/" + path;
    window.history.replaceState({}, "", canonical);
  }
);
