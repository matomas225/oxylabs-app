import {
  noSorting,
  sortAscendingDistance,
  sortAscendingName,
  sortDescendingDistance,
  sortDescendingName,
} from './Sorting';

function ChangeSorting(option: string) {
  if (option === '') {
    return noSorting;
  }
  if (option === 'sortAscendingDistance') {
    return sortAscendingDistance;
  }
  if (option === 'sortDescendingDistance') {
    return sortDescendingDistance;
  }
  if (option === 'sortAscendingName') {
    return sortAscendingName;
  }
  if (option === 'sortDescendingName') {
    return sortDescendingName;
  }
}

export default ChangeSorting;
