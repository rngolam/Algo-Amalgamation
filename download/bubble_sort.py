def bubble_sort(a_list):
    """
    Sorts the parameterized list in ascending order.
    """

    swaps = True

    while swaps is True:

        swaps = False

        for i in range(len(a_list) - 1):

            if a_list[i] > a_list[i + 1]:
                a_list[i], a_list[i + 1] = a_list[i + 1], a_list[i]
                swaps = True
