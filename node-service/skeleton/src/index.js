function greeting() {
  return 'Hello from ${{ values.name }}';
}

if (require.main === module) {
  console.log(greeting());
}

module.exports = { greeting };
