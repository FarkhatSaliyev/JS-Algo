
// **********************************************************************************************************************************
// SORTING ALGORITHMS AND SEARCHING ALGORITHMS


bubble sort
function bubbleSort(arr) {
	let end = arr.length-1
	for (let i = end; i > 0; i-- ) {
		let swapped = false
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j+1]) {
				let temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
				swapped = true
			}
		}
			if (!swapped) {
				break
			}
	}
	return arr
}
bubbleSort([0,3,1,4,10,9,2])

// **********************************************************************************************************************************
function selectionSort(arr) {
	
	for (let i = 0; i < arr.length; i++) {
		let min = i
		for (let j = i+1; j< arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j
			}
		}
		if (min !== i) {
			let temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}
	return arr
}
selectionSort([1,3,2,5,4])

// **********************************************************************************************************************************

const mergeSort = array => {
  if(array.length < 2) return array;
  const middle = Math.floor(array.length / 2);
  const leftSide = array.slice(0, middle);
  const rightSide = array.slice(middle, array.length);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
// }

// **********************************************************************************************************************************

const merge = (left, right) => {
  const result = [];
  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while(left.length) result.push(left.shift());
  while(right.length) result.push(right.shift());
  return result;
}

console.log(mergeSort([5, 3, 7, 10, 4, 1, 5]));

// **********************************************************************************************************************************
// MERGE TWO SORTED ARRAYS

function mergeTwoArr(arr1, arr2) {	let j = 0, i = 0
	let maxArr= arr1.length >= arr2.length? arr1 : arr2
	const merged = []
	let newNum = null
	while (true) {
		if (arr1[i] === undefined || arr2[j] === undefined) {
			newNum = arr1[i] !== undefined? i : j
			break;
		}
		if (arr1[i] < arr2[j]) {
			merged.push(arr1[i])
			i++
		}
		else if (arr2[j] < arr1[i]) {
			merged.push(arr2[j])
			j++
		}
		else {
			merged.push(arr1[i], arr2[j])
			i++
			j++
		}
	}
	if (newNum !== null) {
		merged.push(...maxArr.splice(newNum))
		return merged
	}
}

const arr1 = [1,1,2,6,8,10,11]
//                      i
const arr2 = [4,5,6,7,8,9,11,12,13,13,14]
//                      j
mergeTwoArr(arr1, arr2)


// **********************************************************************************************************************************

[1,2,3,4,5,6,7,8,9,10]
// 				 m
//  s
//        e
				 

function binary(arr, num) {
	let start = 0
	let end = arr.length-1
	while (true) {
		let mid = Math.floor(start + end / 2)
		if (arr[start] === mid) return start
		if (arr[end] === mid) return end
		if (arr[mid] === num) return mid
		if (arr[mid] > num) {
			end = mid
		}
		if (arr[mid] < num) {
			start = mid
		}
	}
}
binary([1,2,3,4,5], 5)

// **********************************************************************************************************************************
// BINARY RECURSION

function binarySearchRecursion(arr, char) {
    var length = arr.length;
    var midPoint = Math.floor(length / 2);
    var newArr = arr;
    if (arr[midPoint] > char) {

        var newArr = arr.slice(0, arr[midPoint]);
        return binarySearchRecursion(newArr, char);

    } else if (arr[midPoint] < char) {

        var newArr = arr.slice(midPoint, arr.length);
        return binarySearchRecursion(newArr, char);

    }
		return midPoint
}
binarySearchRecursion([1,2,3,4,5], 3)

// **********************************************************************************************************************************


function binarySearchRec(arr, start = 0, end = arr.length-1, char) {
	let mid = Math.floor((start + end) / 2)
	if (arr[mid] === char) return mid
	if (arr[mid] < char) return binarySearchRec(arr, start=mid+1, end=arr.length-1, char)
	if (arr[mid] > char) return binarySearchRec(arr, start=0, end=mid-1, char)
}

let arr = [1,2,3,4,5,6,7,8,9];
binarySearchRec(arr, 0, arr.length-1, 9)


// ####################################################################################################################################
// REMOVE ELEMENT / SEARCHING ALGORITHMS

var removeElement = function(nums, val) {
   
	 for (let i = 0; i < nums.length;) {
		 console.log('didnt find',i)
		 if (nums[i] == val) {
			 nums.splice(i, 1)
			 console.log('found',i)
		 }else {
			i++
		 }
	 }
		return nums
};

removeElement([0,1,2,2,3,0,4,2],2)

// **********************************************************************************************************************************
// SEARCH FOR ELEMENT IF NOT FOUND, RETURN WHERE IT WOULD BE
var searchInsert = function(nums, target) {
	if (target > nums[nums.length-1] ) return (nums.length-1)+1
	if (target < nums[0]) return 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) return i
		if (target > nums[i] && target < nums[i+1]) return i+1
	}
};

searchInsert([1,3,5,6], 0)

// ####################################################################################################################################
//  SUM OF ARRAY

function sumOfArr(arr) {
	let res = 0;
	const obj = {};
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "number" && !obj[arr[i]] ) {
			res += arr[i]
			obj[arr[i]] = true
		}
	}
	return res
}

let arr = [1,2,3,4,5,1,2,3,4]
sumOfArr(arr)

// **********************************************************************************************************************************

function fib(n) {
	if (n <= 1) return 1
	return fib(n-1) + fib(n-2)

}
fib(5)


// ####################################################################################################################################
// Given an integer array nums,
// find the contiguous subarray (containing at least one number)
//  which has the largest sum and return its sum.
// Follow up: If you have figured out the O(n) solution,
//  try coding another solution using the divide and conquer approach,
//  which is more subtle.

function subArray(arr) {
	 let maxSub = arr[0]
	let curSum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (curSum < 0){
			curSum = 0;
		}
		curSum += arr[i];
		maxSub = Math.max(maxSub, curSum);
		}
 return maxSub
}

const  nums = [-2,1,-3,4,-1,2,1,-5,4];
subArray(nums);

               
// ####################################################################################################################################
// VALID BRAKETS

function isValid(str) {
	const arr = [];
	const obj = {
		"{":"}",
		"[":"]",
		"(":")"
	}
	for (let i = 0; i < str.length; i++) {
		let curr = str[i]
		if (obj[curr]) {
			arr.push(curr)
		}
		else {
			if(obj[arr.pop()] !== curr) {
				return false
			}
		}
	}    
	return arr.length === 0
}
let str = "{[]()}"

isValid(str)

// ####################################################################################################################################
// HARDCODED LINKED LIST
// FIND K NUMBER IN LINKED LIST

const list = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 3,
			next: {
				val: 4 ,
				next: {
					val:5,
					next: {
						val:6,
						next: null
					}
				}
			}
		}
	}
}
function linkedList(list, k) {
	let counter = 0;
	let pointer1 = list
	let pointer2 = list
	let curr = list

	while (pointer2 !== null) {
		pointer2 = pointer2.next
		if (counter >= k ) {
			pointer1 = pointer1.next
		}
		counter++
	}
	if (counter < k) return "not valid"
	return pointer1 === null? null : pointer1.val
}
linkedList(list, 1)


// ####################################################################################################################################

// ***********************************************************************************************
// REMOVE  K-th CHAR 
let s = 'baalibaba'
function rem(str, char) {
	let arr = str.split(char)
	let res = 0
	for (let i = 0; i< arr.length; i++) {
		if (arr[i] === '') res++
	}
	return res
}
rem(s, 'ba')

// **********************************************************************************************************************************

function pointer(str, char) {
	let res = 0

	for (let i = 0; i < str.length; i++) {
		for (let j = i+1; j < str.length; j++) {
			let pointer = str[i]+str[j]
			if (pointer === char){
				res++
				i = j+1
			}
		}
	}
	return res
}
pointer(s, 'ba')

// ####################################################################################################################################
// FREQUENCY TYPE
let str = [NaN,NaN,NaN,'s','d',1,2,null,null,undefined, true, false]

function freqType(arr) {
	let list = []
	let obj = {}
	for (let i = 0; i < arr.length; i++ ) {
		if (arr[i] !== arr[i]) {
			let x = "NaN"
			// console.log(x)
			if (!obj[x]) {
				obj[x] = 1
			}else {
				obj[x]++				
			}
		}
		
		if (typeof arr[i] === 'string') {
				
				if (!obj[typeof arr[i]]) {
					obj[typeof arr[i]] =  1 
				} else {
					obj[typeof arr[i]]++ 
				}

		} 
		else if (typeof arr[i] === 'number') {
		
				if (!obj[typeof arr[i]]) {
					obj[typeof arr[i]] =  1 
				} else {
					obj[typeof arr[i]]++ 
				}
		} 


		else {
			if (!obj[arr[i]]) {
				obj[arr[i]] = 1
			}
			else {
				obj[arr[i]]++
			}
		}
	}
	return obj
}

 freqType(str)

// ***********************************************************************************************


// ####################################################################################################################################

function countNumsRecursion(n) {
  let r = 0
	r++
	// console.log(r)
  
	if (n <= 9 ) return 1
	const last = n % 10
	n = (n - last) / 10
  return r + countNumsRecursion(n)
}                      
countNumsRecursion(324354)

// ####################################################################################################################################

// *****************************
// RECURSIVE ADDITION TO RESULTS

function sumToOne(num) {
  let res = 0
  while(num) {
	  let last = num % 10 //1
  	res+=last // 
	  num = Math.floor(num / 10) //1
  }
  if (res < 10) return res 
  return sumToOne(res)
}
sumToOne(928)

// **********************************************************************************************************************************

function sumToOne(num) {
	let sum = 0;
	while(num ){
		sum+= num % 10;
		num = Math.floor(num/10);
	}
	if (sum < 10) return sum // 1, 10, 19, 
	return sumToOne(sum)
}
sumToOne(928)

// ####################################################################################################################################

function removePrefix(arr) {
	 return arr.map(i=>{
		 let s = i.split('$').join('')
		 return Number(s)
	})
}
removePrefix(['$2', '$3', '$4', '$5','$15'])



// ####################################################################################################################################

var removeDuplicates = function(S) {
	let a = 0
	let b = 1;
	S = S.split('')
	while(true) {
		if (b === S.length || !S.length) return S.join('')
		if (S[a] === S[b]) {
			S.splice(a, 2)
			a--
			b--
		}
		else {
			a++
			b++
		}
	}
};
removeDuplicates('aaaaaaaa')

// ####################################################################################################################################

var backspaceCompare = function(S, T) {
	return renderStr(S) === renderStr(T)
	function renderStr(str) {
		let i = 0;
		let arr = []
		while(i < str.length) {
			if(str[i] !== '#') {
				arr.push(str[i])
			} else {
				arr.pop()
			}
			i++
		}
		return arr.join('')
	}
};
let S = "l#d##cm#z##nfto", T = "l#d###cm#z##nfto"

backspaceCompare(S,T)

// ####################################################################################################################################


// COMPOSITION OF LINKED list
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    print() {
        let curr = this.head
        let str = ''
        while (curr) {
            str += curr.val
            curr = curr.next
        }
        console.log(str);
    }
    pop() {
        let result = undefined;
        //check if list is empty
        if (!this.head) return result;
        //check if list has one element only
        if (!this.head.next) {
            result = head.val;
            this.head = null;
            this.tail = null;
        } else
        {
            //find previous from tail
            let prev = null;
            let curr = this.head;
            while(curr.next) {
                prev = curr;
                curr = curr.next;
            }
            this.tail = prev;
            this.tail.next = null;
            result = curr.val;
        }
        this.length--;
        return result;
    }
    //inserts node in the given index position
    insert(index, val) {
        //if index is not greater than length of the list
        //check if index is positive
        if (index < 0) return;
        let curr = this.head;
        if (index === 0) {
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
            return;
        }
        if (index === this.length) {
            this.push(val);
            return;
        }
        let position = 0;
        let prev = null;
        while(curr.next && position < index) {
            prev = curr;
            curr = curr.next;
            position++;
        }
        if (position === index) {
            let newNode = new Node(val);
            prev.next = newNode;
            newNode.next = curr;
            this.length ++;
            return;
        }
    }
    // removes first element
    shift() {
        //check if list is empty
        if (!this.head) return undefined;
        let result = this.head;
        this.head = this.head.next;
        this.length--;
        return result;
    }
    // adds an element at the beginning of a list
    unshift(val) {
        this.insert(0, val);
    }
    // return an element in the given index
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index === 0) {
            return this.head;
        }
        if (index === this.length - 1) {
            return this.tail;
        }
        let position = 0;
        let curr = this.head;
        while(position < index) {
            curr = curr.next;
            position++;
        }
        return curr;
    }
    // sets given value at the given index
    set(index, val) {
        let got = this.get(index);
        if (got) {
            got.val = val;
        }
    }
    // removes a node at the given index, returns removed node
    remove(index) {
			if (index === 0) return this.shift()
			if (index === this.length-1) return this.pop()
			let prev = this.get(index-1)
			let next = this.get(index+1)
			prev.next = next
    }
}


let linkedList = new LinkedList();
linkedList.push('H');
linkedList.push('e'); // prev
linkedList.push('l'); // curr
linkedList.push('l'); // 
linkedList.push('o'); // 
linkedList.print();

linkedList.set(0, "a")
console.log(linkedList.get(0))
linkedList.remove(2)


linkedList
// ####################################################################################################################################
// const name = "Bob"
// const person = {name:"alex"}
// const newPerson = {...person, name}
// newPerson

// let message;
// message = "abc";
// let letterC = (<string>message).endsWith("c")
// letterC

function sum(a,b) {
	let str = ""
	let carying = false
}
sum("999999999999999999991","1")

var removeDuplicates = function(arr) { 
  for ( let i = 0; i < arr.length; i++) {
  	if (arr[i] === arr[i+1]){
  		arr.splice(i, 1)
  		i--
  	}
  }
  return arr
};
removeDuplicates([])


function firstNonRepeatedCharacter(str) {
	const obj = {}
	for (let i = 0; i < str.length; i++) {
		if (!obj[str[i]]) obj[str[i]] = 1
		else obj[str[i]]++
	}
	for (let k in obj) {
		if (obj[k] === 1) return k
	}
}

// firstNonRepeatedCharacter('caabbdec')

// ####################################################################################################################################
// important!! find second largest number in arr 
 function secondHighest(nums) {
    let first = Number.MIN_VALUE;
    let sec = Number.MIN_VALUE;
    for (let i = 0; i <= nums.length; i++) {
      if (i > first) {
        sec = first;
        first = i;
      } else if (i > sec) {
        sec = i;
      }
    }
    return sec;
 }
 secondHighest([1,2,12,3,4])


function remove(str) {
  // your code here
  return str.split(' ').join('')
}
remove("Pl     ayTha    tF    u    nkyM     usi   c	")
"arr2".charCodeAt(0)

function commonSuf(strs) {
  if (!strs.length) return '';

  let prefix = strs[0];

  for (let i = strs.length; --i;) {
    for (;strs[i].indexOf(prefix) !== 0;) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix.length) return '';
    }
  }

  return prefix;
}

commonSuf(["deforestation", "citation", "conviction", "incarceration"]) // "tion"

function getTypes(arr) {
	let obj = {}
	for (let i = 0; i < arr.length; i++ ) {
		if (arr[i] !== arr[i]) {
			let x = "NaN"
			!obj[x] ? obj[x] = 1 : obj[x]++
		}
	
		else if (typeof arr[i] === 'string') {
			!obj[typeof arr[i]]? obj[typeof arr[i]] = 1 : obj[typeof arr[i]]++
		} 
		else if (typeof arr[i] === 'number') {
			!obj[typeof arr[i]]? obj[typeof arr[i]] = 1 : obj[typeof arr[i]]++
		} 
		else if ( Array.isArray(arr[i])) {
				!obj['array'] ? obj['array'] = 1 : obj['array']++  
		}

		else {
			if (arr[i] === null) {
				!obj["null"]? obj["null"] = 1 : obj["null"]++
			} 
			else if (typeof arr[i] === "undefined") {
				!obj[typeof arr[i]]? obj[typeof arr[i]] = 1 : obj[typeof arr[i]]++
			}
			else if (typeof arr[i] === "boolean") {
				!obj[arr[i]]? obj[arr[i]] = 1 : obj[arr[i]]++ 
			}
			else {
				!obj[ typeof Object(arr[i])] ? obj[ typeof Object(arr[i])] = 1
				: obj[ typeof Object(arr[i])] ++
			}
		}
	}
	return obj
}
let str = [NaN,NaN,NaN,'s','d',1,2,null,null,undefined, true, false]
let types = [1,2,{},[],null]

getTypes(types)

function solution(str){
   let arr = []
   for (let i = 0; i < str.length; i++) {
    //  console.log('asd')
		if (str[i+1]) {
		 arr.push(str[i]+ str[i+1])
			i++
		}
		else arr.push(str[i]+"_")
   }
	 return arr
}
let str = "abcde"
solution(str)


function commonSuf(arr) {
  let last = arr[0][arr[0].length-1]
  let pos = 0 
  let pos2 = 0
  let count = 0
  while(pos2 !== undefined) {
  	
		if (arr[pos] === undefined) {
	  	pos = 0
  		count++
  		last = arr[pos][arr[pos].length-1-count] + last 
		}
  	
  	pos2 = arr[pos].length-1-count 
  	let idx = arr[pos][pos2] 
  	
		if (idx === last[last.length-1-count]) {
	  	pos++
  	}
  	else {
			return last.slice(1) 
		} 
  }

}

commonSuf(["deforestation", "citation", "conviction", "incarceraction"]) // "tion"
                                                                i
commonSuf(["nice", "ice", "baby"]) // ""


function commonSuf(arr) {
  let last = arr[0][arr[0].length-1]
  let common = ''
  let pos = 0 
  let pos2 = 0
  let count = 0
  
  while(pos2 !== undefined) {
  	if (arr[pos] === undefined) {
  		common = last + common
	  	pos = 0
  		count++
			last = arr[pos][arr[pos].length-1-count]
			console.log(last)
  	}
  	
  	pos2 = arr[pos].length-1-count 
  	let idx = arr[pos][pos2] 
  	
  	if (idx === last) {
  		last = idx
	  	pos++
  	}
  	else return common 
  }
}

function fizzBuzz(num) {
	let res = "fizz"
	for (let i = 1; i <= num; i++) {
		if (i % 3 === 0 && i % 5 === 0) res = "fizzBuzz";
		else if (i % 3 === 0) res = "fizz"
		else if (i % 5 === 0) res = "buzz"
		else res = i
		console.log( res)
	}
}
fizzBuzz(100)
// ######################################################################

	function palindrome(str) {
		let dev = Math.floor(str.length/2) 
		let pointer2 = str.length-1
		for (let i = 0; i < dev; i++) {
						
			if (str[i] !== str[pointer2]) return false
			pointer2--
		
		}
		return true

	}
	let str = 'racecar'
	//          i
	//             p
	palindrome(str)