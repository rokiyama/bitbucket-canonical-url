export function extractPath(path: string) {
  const matchHasBranchName = path.match(/pull-requests\/(\d+)\/[^#]+(#?.*)/);
  if (matchHasBranchName) {
    return matchHasBranchName[1] + matchHasBranchName[2];
  }
  const match = path.match(/pull-requests\/(\d+#?.*)/);
  if (match) {
    return match[1];
  }
  return;
}
