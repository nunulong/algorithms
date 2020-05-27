class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l_idx = 0;
        r_idx = 0;
        cache = set();
        result = 0;
        while l_idx < len(s) and r_idx < len(s):
            if s[r_idx] not in cache:
                cache.add(s[r_idx]);
                r_idx += 1;
                result = max(result, r_idx - l_idx);
            else:
                cache.remove(s[l_idx]);
                l_idx += 1;
        return result;

