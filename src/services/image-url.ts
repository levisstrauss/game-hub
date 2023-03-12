import noImage  from '../assets/no-image-placeholder.webp';

// Best way of getting the url and reducing the size
export const getCroppedImageUrl = (url: string) => {

    if (!url) return noImage;

    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}
