def min_jumps(arr):
    def helper(arr, start, end):
        min = float("inf")
        if start == end:
            return 0
        if arr[start] == 0:
            return float("inf")
        for i in range(start + 1, end + 1):
            if i < start + arr[start] + 1:
                jumps = helper(arr, i, end)
                if jumps != float("inf") and jumps + 1 < min:
                    min = jumps + 1
        return min

    return helper(arr, 0, len(arr) - 1)


arr = [1, 3, 6]
print(min_jumps(arr))
