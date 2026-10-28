function FindProxyForURL(url, host) {
  if (
    shExpMatch(host, "*.pubg.com") ||
    shExpMatch(host, "*.pubgmobile.com") ||
    shExpMatch(host, "*.igamecj.com") ||
    shExpMatch(host, "*tencent*") ||
    shExpMatch(host, "*proximabeta*")
  ) {
    return "PROXY 51.159.27.101:8080";
  }
  return "DIRECT";
}
