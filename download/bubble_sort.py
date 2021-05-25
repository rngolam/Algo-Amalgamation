def bubble_sort(a_list):
    """
    Sorts the parameterized list in ascending order.
    """

    swaps = True
    pass_count = 0

    # Repeat until no more swaps are performed
    while swaps is True:

        swaps = False

        # Compare n - 1 - pass count # of elements
        for i in range(len(a_list) - 1 - pass_count):

            # If elements are out of order, swap them
            if a_list[i] > a_list[i + 1]:
                a_list[i], a_list[i + 1] = a_list[i + 1], a_list[i]
                swaps = True

        pass_count += 1
