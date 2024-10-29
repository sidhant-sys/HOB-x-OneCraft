export const navigateTo = (
  routeName = '',
  openInNewTab = false
) => {
  if (openInNewTab) {
    window.open(routeName, '_blank');
  } else window.location.href = routeName;
};
