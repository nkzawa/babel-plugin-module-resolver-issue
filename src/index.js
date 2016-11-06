
// The issue occurs only if it's:
//
// - function declaration (not function expression or arrow function)
// - export (not export default)

export async function test () {}
