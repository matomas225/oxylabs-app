interface Data {
  [x: string]: string;
}

export function sortAscendingDistance(data1: Data, data2: Data) {
  if (data1.distance > data2.distance) {
    return 1;
  }
  if (data1.distance < data2.distance) {
    return -1;
  }
  return 0;
}

export function sortDescendingDistance(data1: Data, data2: Data) {
  if (data1.distance < data2.distance) {
    return 1;
  }
  if (data1.distance > data2.distance) {
    return -1;
  }
  return 0;
}

export function sortAscendingName(data1: Data, data2: Data) {
  if (data1.name > data2.name) {
    return 1;
  }
  if (data1.name < data2.name) {
    return -1;
  }
  return 0;
}

export function sortDescendingName(data1: Data, data2: Data) {
  if (data1.name < data2.name) {
    return 1;
  }
  if (data1.name > data2.name) {
    return -1;
  }
  return 0;
}
export function noSorting() {
  return 0;
}
