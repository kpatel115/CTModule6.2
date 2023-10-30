'''
def split_integer(num, parts):
    # your code here
    splitList = []
    splitNum = num / parts
    for x in range(parts):
        splitList.append(round(splitNum))
    if sum(splitList) != num:
        print("doesnt add up correctly")
    else:
        return splitList
    
    return splitList

split_integer(20, 5)
'''
'''
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
'''

def numVowels(string):
    splitString = string.split(" ")
    vowelList = ["a", "e", "i", "o", "u"]

    count = [x for x in splitString if x in vowelList]
    return  count

    


numVowels('asdfsdfew trryterytrtutyu')
    
def get_coutn()
splitString = sentence.split(" ")
    vowelList = ["a", "e", "i", "o", "u"]
    count = [x for x in splitString if x in vowelList]
    vowels = len(count)
    return  vowels

7 kyu - Katastrophe
function strongEnough(earthquake, age) {
//your code here
  magnitude = sum(earthquake[0]) * sum(earthquake[1]) * sum(earthquake[2]) 
  decay = 1000 * (age * 0.100)
  reduce(function (a, b) { return a + b; }, 0)
  if (magnitude <= decay){
        print("Safe!")
  } else {
    print("Needs Reinforcement!")
  }
}