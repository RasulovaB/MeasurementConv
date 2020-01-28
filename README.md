# Measurement Conversion Library

This library will make it easy to add/combine ingredients of 
different sizes and get the computed result in a format 
that is the most convenient.

## TODO 

This is just a general approach that will be revise as we move forward.

1. Establish project name, checking availability on npm
2. Initialize npm project
3. Install test framework
4. Frame library with blank methods
5. Start with test conversions between two known sizes (e.g. tsp -> tbsp)
6. Start to break up tasks.

## Samples

Here's a sample of what the final product could look like:

```js
var measure = measurement();
measure.add(3, 'tsp');
measure.add(3, 'tbsp');
measure.toLargest();
console.log(measure.toText('f m')); // 4 tbsp
console.log(measure.toText('d m')); // 4.0 tbsp
```

Alternatively using the builder pattern:

```js
var measure = measurement()
                .add(3, 'tsp')
                .add(3, 'tbsp')
                .toLargest()
                .toText('f m');

console.log(measure); // 4 tbsp
```