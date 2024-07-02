def answer(N):
    alphabets_in_order = 'abcdefghijklmnopqrstuvwxyz'
    all_set = N // 26
    # We calculate how many more letters are needed after fitting full sets
    remainder = N % 26 

    #I will repaet the "all_set" and add the necessary number of extra letters from the beginning of the alphabet.
    result = alphabets_in_order * all_set + alphabets_in_order[:remainder]

    return result

print(answer(3))