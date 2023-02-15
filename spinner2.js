let spinner = "| / - \ |"
let num = 0

for(const spin of spinner){
  setTimeout(() => process.stdout.write(`\r ${spin}`), num); num += 200
}; 