function* aa(list, num) {
  let idx = 0;
  while (idx < list.length) {
    const max = list.length;
    const end = idx + num;
    yield list.slice(idx, end > max ? max : end);
    idx += num;
  }
}

const it = aa([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);
let finished = false;
while (!finished) {
  const a = it.next();
  console.log(a.value);
  finished = a.done;
}
