class Sparse_Array:
    def __init__(self, arr, size):
        self.size = size
        self.store = {}
        for val, index in enumerate(arr):
            if val != 0:
                self.store[index] = val

    def set(self, i, val):
        self.store[i] = val

    def get(self, i):
        if i in self.store:
            return self.store[i]
        else:
            return 0


sparse_arr = Sparse_Array([0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0], 12)
print(sparse_arr.size)
print(sparse_arr.get(6))
print(sparse_arr.set(5, 1))
print(sparse_arr.get(5))
