<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# put

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Replace specified elements of an array with provided values.



<section class="usage">

## Usage

```javascript
import put from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-put@v0.0.2-deno/mod.js';
```

#### put( x, indices, values, mode )

Replaces specified elements of an array with provided values.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = put( x, [ 1, 3 ], [ 20, 40 ], 'throw' );
// returns [ 1, 20, 3, 40 ]

var bool = ( out === x );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **indices**: list of indices.
-   **values**: values to set. When `indices` contains one or more elements, `values` must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with `indices` (i.e., must have either one element or the same number of elements as `indices`).
-   **mode**: index [mode][@stdlib/ndarray/base/ind].

If `indices` is an empty array, the function returns the input array unchanged.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = put( x, [], [ 20, 40 ], 'throw' );
// returns [ 1, 2, 3, 4 ]
```

The function supports broadcasting a `values` array containing a single element against an `indices` array containing one or more elements.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = put( x, [ 1, 3 ], [ 20 ], 'throw' );
// returns [ 1, 20, 3, 20 ]

var bool = ( out === x );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function mutates the input array `x`.
-   Because each index is only validated at the time of replacing a particular element, mutation may occur even when one or more indices are out-of-bounds, including when the index [mode][@stdlib/ndarray/base/ind] indicates to raise an exception.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import filledBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@deno/mod.js';
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@deno/mod.js';
import put from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-put@v0.0.2-deno/mod.js';

// Generate a linearly spaced array:
var x = linspace( 0, 100, 11 );
console.log( x );

// Generate an array of random indices:
var N = discreteUniform( 5, 15 );
var indices = filledBy( N, discreteUniform.factory( 0, x.length-1 ) );
console.log( indices );

// Generate an array of random values:
var values = filledBy( N, discreteUniform.factory( 1000, 2000 ) );
console.log( values );

// Update a random sample of elements in `x`:
var out = put( x, indices, values, 'throw' );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-put.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-put

[test-image]: https://github.com/stdlib-js/array-base-put/actions/workflows/test.yml/badge.svg?branch=v0.0.2
[test-url]: https://github.com/stdlib-js/array-base-put/actions/workflows/test.yml?query=branch:v0.0.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-put/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-put?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-put.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-put/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-put/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-put/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-put/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-put/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-put/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-put/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-put/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-put/main/LICENSE

[@stdlib/ndarray/base/ind]: https://github.com/stdlib-js/ndarray-base-ind/tree/deno

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/deno

</section>

<!-- /.links -->
