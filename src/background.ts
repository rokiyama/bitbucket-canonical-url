import { extractPath } from "./bitbucket";

chrome.action.onClicked.addListener((tab) => {
  const { id, url } = tab;
  if (!url || !id) {
    console.error("tab.url or tab.id is null");
    return;
  }
  if (!url.match(/^https:\/\/bitbucket.org/)) {
    console.error("not bitbucket page");
    return;
  }
  const path = extractPath(url);
  if (!path) {
    console.error("could not extract path");
    return;
  }
  chrome.tabs.sendMessage(id, { name: "canonizeBitbucketUrl", path });
});
