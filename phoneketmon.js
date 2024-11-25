function solution(nums) {
    const maxLen = nums.length / 2
    const numsSize = new Set(nums).size
    return numsSize > maxLen ? maxLen : numsSize
}
