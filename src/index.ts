export function deepCopy(obj: any) {
  if (typeof obj !== "object") {
    return obj;
  }

  if (!Array.isArray(obj)) {
    return deepCopyDictionary(obj);
  }

  let copy = [];

  obj.forEach((val) => {
    if (typeof val !== "object") {
      copy.push(val);
    } else if (!Array.isArray(val)) {
      copy.push(deepCopyDictionary(val));
    } else {
      copy.push(deepCopy(val));
    }
  });

  return copy;
}

function deepCopyDictionary(obj: any) {
  let copy = {};

  for (let [key, val] of Object.entries(obj)) {
    if (typeof val !== "object") {
      copy[key] = val;
    } else if (!Array.isArray(val)) {
      copy[key] = deepCopyDictionary(val);
    } else {
      copy[key] = deepCopy(val);
    }
  }

  return copy;
}
