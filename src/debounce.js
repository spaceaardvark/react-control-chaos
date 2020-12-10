export const debounce = (fn, ms) => {
  let handle;

  return (...args) => {
    let context, later;

    context = this;
    later = () => {
      handle = null;
      fn.apply(context, args);
    };

    window.clearTimeout(handle);
    handle = window.setTimeout(later, ms);
  };
}