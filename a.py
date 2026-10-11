a = [1,2,3,4,5,6,7,8,9,10,11,12]
def binary_search(nums, n):
    lo = 0
    hi = len(nums)
    steps = 0

    while lo < hi:
        steps+=1
        mid = int(lo+hi/2)
        if nums[mid] == n:
         print(steps)
         return mid
        elif nums[mid] < n:
           lo=mid+1
        else:
           hi = mid
    return -1
binary_search(a, 2)
def entendendo(v, n):
    left = 0
    right = len(v)
    steps = 0
    while left < right:
        steps+=1
        meio = (left  + right) // 2
        if v[meio] == n:
            print(steps)
            return meio
        elif v[meio] < n:
            left = meio + 1
        else:
            right = meio
    return None


entendendo(a, 2)



