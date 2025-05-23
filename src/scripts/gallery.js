import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

for (const gallery of document.querySelectorAll(".gallery")) {
    lightGallery(gallery, {
        selector: '.gallery__link',
        plugins: [lgZoom, lgThumbnail]
    });
}