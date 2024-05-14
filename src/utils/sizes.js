export const makeSizes = (size) => {
  const res = size.split(",");
  return res;
};

export const modifyLink = () => {
  var str = `<iframe width="560" height="315" src="https://www.youtube.com/embed/HzQIbfGgvek?si=jUaO4xg0GhfYYSy-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

  var mapObj = {
    frameborder: "frameBorder",
    referrerpolicy: "referrerPolicy",
    allowfullscreen: "allowFullScreen",
  };
  str = str.replace(
    /frameborder|referrerpolicy|allowfullscreen/gi,
    function (matched) {
      return mapObj[matched];
    }
  );
  console.log(str);
};
