function sleepSort(arr) {
  return new Promise((resolve) => {
    let sorted = [];

    arr.forEach(num => {
      setTimeout(() => {
        sorted.push(num);
        if(sorted.length === arr.length) resolve(sorted);
      }, num);
    });
  });
}

module.exports = {sleepSort}