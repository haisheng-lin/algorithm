/**
 * 给一个 number[] 类型的数组，每个元素的值都是非负数
 * a1, a2, ...... an，每个数代表坐标中的一个点（i, ai）
 * 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别是（i, ai）（j, aj）
 * 找出其中两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水
 * 返回最大的容纳水的面积
 */
function containerWithMostWater(heights: number[]): number {
  let max = 0
  let start = 0,
    end = heights.length - 1
  while (start < end) {
    const area = (end - start) * Math.min(heights[start], heights[end])
    max = Math.max(max, area)
    if (heights[start] < heights[end]) {
      const height = heights[start]
      while (start < end && heights[start] <= height) start++
    } else {
      const height = heights[end]
      while (start < end && heights[end] <= height) end--
    }
  }
  return max
}

export default containerWithMostWater
