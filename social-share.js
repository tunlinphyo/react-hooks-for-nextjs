export default function useSocialShareWindow() {
  const windowWidth = 640
  const windowHeight = 450
  const top = 200

  function openShareWindow(shareUrl) {
    const left = (window.innerWidth - windowWidth) / 2
    const windowConfig = `width=${windowWidth},height=${windowHeight},left=${left},top=${top},`;
    window.open(
      shareUrl,
      `sharer`,
      `${windowConfig}toolbar=no,menubar=no,scrollbars=no`
    )
  }
  return openShareWindow
}
