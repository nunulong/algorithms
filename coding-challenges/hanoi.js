const hanoi = (n, first = 1, mid = 2, last = 3) => {
    if (n == 1) {
        console.log(`Move ${first} to ${last}`);
        return;
    }
    hanoi(n - 1, first, last, mid);
    console.log(`Move ${first} to ${last}`);
    hanoi(n - 1, mid, first, last);
}

hanoi(3);