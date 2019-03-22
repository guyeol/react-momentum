/**
 * preload images
 * @param {string[]} srcs Array of image srouces
 * @param {*} callback Callback when images are loaded
 */
const prealoadImg = function preload(srcs, callback) {
  let loaded = 0;
  srcs.forEach((s) => {
    const img = new Image();
    img.src = s;
    img.onload = () => {
      loaded += 1;
      if (loaded >= srcs.length && typeof callback === 'function') {
        callback();
      }
    };
  });
};

export default prealoadImg;
