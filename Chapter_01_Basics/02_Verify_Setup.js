console.log(process.platform);

// Mac -> darwin
// Windows -> win32
// Linux -> linux

console.log(process.arch);

// x64 -> 64-bit
// arm64 -> 64-bit

console.log("Node Version: " + process.version);

// v22.12.0

console.log(process.memoryUsage());