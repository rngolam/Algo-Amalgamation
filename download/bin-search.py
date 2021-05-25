def bin_search(a_list, target) -> bool:
    """
    Searches a list for the parameterized target value and returns True if it is found and False if it is not.
    """

    # Set start and end points
    first = 0
    last = len(a_list) - 1

    # Repeat until start and end pointers intersect
    while first <= last:

        # Calculate bisect point (this particular formula prevents potential overflow errors)
        midpoint = first + (last - first) // 2

        # If the target is found at the midpoint, return True
        if a_list[midpoint] == target:
            return True

        # If the midpoint value is larger than the target, search the left half of the array
        elif a_list[midpoint] > target:
            last = midpoint - 1

        # If the midpoint value is less than the target, search the right half of the array
        else:
            first = midpoint + 1

    return False
