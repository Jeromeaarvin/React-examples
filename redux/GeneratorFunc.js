// Generate Function generates three 
// different numbers in three calls 
// function* fun() { 
// 	yield 10; 
// 	yield 20; 
// 	yield 30; 
// } 

// // Calling the Generate Function 
// let gen = fun(); 
// console.log(gen.next().value); 
// console.log(gen.next().value); 
// console.log(gen.next().value);

//..........................................................................

// Generate Function generates an 
// infinite series of Natural Numbers 
// function* nextNatural() { 
// 	let naturalNumber = 1; 

// 	// Infinite Generation 
// 	while (true) { 
// 		yield naturalNumber++; 
// 	} 
// } 

// // Calling the Generate Function 
// let gen = nextNatural(); 

// // Loop to print the first 
// // 10 Generated number 
// for (let i = 0; i < 18; i++) { 

// 	// Generating Next Number 
// 	console.log(gen.next().value); 
// }

//.......................................................................

// const arr = ['a', 'b', 'c',123444]; 

// function* generator() { 
// 	yield 1; 
// 	yield* arr; 
// 	yield 2; 
// } 

// for (let value of generator()) { 
// 	console.log(value); 
// }

//.......................................................................

let createOwnIterable = { 
	*[Symbol.iterator]() { 
		yield 'a'; 
		yield 'b'; 
		yield 'c'; 
	} 
} 

for (let value of createOwnIterable) { 
	console.log(value); 
}

//.......................................................................

// Iterator
// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;
  
//     const rangeIterator = {
//       next: function () {
//         let result;
//         if (nextIndex < end) {
//           result = { value: nextIndex, done: false };
//           nextIndex += step;
//           iterationCount++;
//           return result;
//         }
//         return { value: iterationCount, done: true };
//       },
//     };
//     return rangeIterator;
//   }
  
//   const it = makeRangeIterator(1, 10, 2);
  
//   let result = it.next();
//   while (!result.done) {
//     console.log(result.value); // 1 3 5 7 9
//     result = it.next();
//   }
  
//   console.log('Iterated over sequence of size: ', result.value);
//   // [5 numbers returned, that took interval in between: 0 to 10]
  
//   ////////// GENERATOR EXAMPLE ////////////////
  
//   function* makeRangeIterator(start = 0, end = 100, step = 1) {
//     let iterationCount = 0;
//     for (let i = start; i < end; i += step) {
//       iterationCount++;
//       yield i;
//     }
//     return iterationCount;
//   }
  
//   let generator = makeRangeIterator(1, 10, 2);
  
//   for (let num of generator) {
//     console.log(num); // 1 3 5 7 9
//   }


//.......................................................................

// function* firstGenerator() { 
// 	yield 2; 
//     yield* secondGenerator(); 
// 	yield 3; 
// } 

// function* secondGenerator() { 
// 	yield 1; 
// 	// yield* firstGenerator(); 
// 	yield 4; 
// } 


// for (let value of secondGenerator()) { 
// 	console.log(value) 
// }

//.......................................................................

// function* timeIntervalGenerator(start, end, interval) {
//     let current = start;
//     while (current <= end) {
//         yield current;
//         current += interval;
//     }
// }

// for (let time of timeIntervalGenerator(0, 10,2)) {
//     console.log(time);
// }

//...........................................................................

// function* timeIntervalGenerator(start, end, interval) {
//     let current = start;
//     for (let i = 0; i < end; i++) {
//         yield current;
//         current += interval;
//     }
// }

// for (let time of timeIntervalGenerator(0, 10, 10)) {
//     console.log(time);
// }


//.....................................................................................

async function* timeIntervalGenerator(start, end, interval) {
    let current = start;
    for (let i = 0; i < end; i++) {
        yield current;
        await new Promise(resolve => setTimeout(resolve, interval * 100));
        current += interval;
    }
}

(async () => {
    for await (let time of timeIntervalGenerator(0, 5, 5)) {
        console.log(time);
    }
})();





function* timeIntervalGenerator(start, end, interval) {
    for (let i = 0; i < end; i++) {
        yield current;
        let startTime = new Date().getTime();
        while (new Date().getTime() < startTime + interval * 100) { /* wait */ }
        current += interval;
    }
}

for (let time of timeIntervalGenerator(0, 5, 2)) {
    console.log(time);
}




