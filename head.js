//function which returns the first item in an array
const head = function(arrayList) {
  if (!arrayList) {
    return Error;
  }
  return arrayList[0];
};

module.exports = head;