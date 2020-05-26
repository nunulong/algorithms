class Solution:
  def two_sum(self, nums, target):
    result = []
    for index in range(0, len(nums), 1):
      sec = target - nums[index]
      if sec in nums:
        result.append(index)
        result.append(nums.index(sec))
        return result

