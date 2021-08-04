class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        record = {}
        # first record the value and index in the dictionary
        # it's ok to overwrite the value since only one solution
        for index, each in enumerate(nums):
            record[each] = index
        
        for index, each in enumerate(nums):
            find = target - each
            if record.get(find) and index != record.get(find):
                return [index, record.get(find)]
