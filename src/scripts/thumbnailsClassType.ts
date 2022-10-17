export const thumbnailsClassType = (type: string) => {
  switch (type) {
    case 'icon':
      return 'el_thumbnails__icon';
    case 'noImg':
      return 'el_thumbnails__noImg';
    default:
      break;
  }
};
