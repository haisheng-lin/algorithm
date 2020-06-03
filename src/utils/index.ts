/**
 * 数组交换元素
 */
export function swap<T>(items: T[], i: number, j: number) {
  const temp = items[i];
  items[i] = items[j];
  items[j] = temp;
}

/**
 * 大整数加法
 */
export function addLargeNumber(str1: string, str2: string) {
  let result = '';
  let carry = 0;
  let p1 = str1.length - 1;
  let p2 = str2.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    const c1 = p1 >= 0 ? Number(str1.charAt(p1)) : 0;
    const c2 = p2 >= 0 ? Number(str2.charAt(p2)) : 0;
    let sum = c1 + c2 + carry;
    result = (sum % 10).toString() + result;
    carry = sum >= 10 ? 1 : 0;
    if (p1 >= 0) {
      p1--;
    }
    if (p2 >= 0) {
      p2--;
    }
  }

  if (carry) {
    result = carry.toString() + result;
  }

  return result;
}
