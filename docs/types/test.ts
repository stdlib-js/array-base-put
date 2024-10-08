/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import Complex128Array = require( '@stdlib/array-complex128' );
import Complex64Array = require( '@stdlib/array-complex64' );
import Complex128 = require( '@stdlib/complex-float64-ctor' );
import AccessorArray = require( '@stdlib/array-base-accessor' );
import put = require( './index' );


// TESTS //

// The function returns an array...
{
	put( [ 1, 2, 3, 4 ], [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectType number[]
	put( [ 1, 2, 3, 4 ], [ 1, 3 ], [ 20, 30 ], 'clamp' ); // $ExpectType number[]
	put( [ '1', '2', '3', '4' ], [ 1, 3 ], [ 20, 30 ], 'wrap' ); // $ExpectType (string | number)[]
	put( [ 1, 2, 3, 4 ], [ 1, 3 ], [ true, true ], 'normalize' ); // $ExpectType (number | boolean)[]

	put( new Int32Array( [ 1, 2, 3, 4 ] ), [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectType Int32Array
	put( new Complex128Array( [ 1, 2, 3, 4 ] ), [ 1, 3 ], [ new Complex128( 20, 30 ), [ 40, 50 ] ], 'throw' ); // $ExpectType Complex128Array
	put( new Complex64Array( [ 1, 2, 3, 4 ] ), [ 1, 3 ], [ new Complex128( 20, 30 ), [ 40, 50 ] ], 'throw' ); // $ExpectType Complex64Array
	put( new AccessorArray<number>( [ 1, 2, 3, 4 ] ), [ 1, 3 ], new AccessorArray<number>( [ 20, 30 ] ), 'throw' ); // $ExpectType AccessorArrayLike<number>
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	put( 1, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	put( true, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	put( false, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	put( null, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	put( void 0, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	put( {}, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	put( [], 1, [ 20, 30 ], 'throw' ); // $ExpectError
	put( [], true, [ 20, 30 ], 'throw' ); // $ExpectError
	put( [], false, [ 20, 30 ], 'throw' ); // $ExpectError
	put( [], null, [ 20, 30 ], 'throw' ); // $ExpectError
	put( [], void 0, [ 20, 30 ], 'throw' ); // $ExpectError
	put( [], {}, [ 20, 30 ], 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object...
{
	put( [], [ 1, 3 ], 1, 'throw' ); // $ExpectError
	put( [], [ 1, 3 ], true, 'throw' ); // $ExpectError
	put( [], [ 1, 3 ], false, 'throw' ); // $ExpectError
	put( [], [ 1, 3 ], null, 'throw' ); // $ExpectError
	put( [], [ 1, 3 ], void 0, 'throw' ); // $ExpectError
	put( [], [ 1, 3 ], {}, 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid index mode...
{
	put( [], [ 1, 3 ], [ 20, 30 ], '1' ); // $ExpectError
	put( [], [ 1, 3 ], [ 20, 30 ], 1 ); // $ExpectError
	put( [], [ 1, 3 ], [ 20, 30 ], true ); // $ExpectError
	put( [], [ 1, 3 ], [ 20, 30 ], false ); // $ExpectError
	put( [], [ 1, 3 ], [ 20, 30 ], null ); // $ExpectError
	put( [], [ 1, 3 ], [ 20, 30 ], void 0 ); // $ExpectError
	put( [], [ 1, 3 ], [ 20, 30 ], {} ); // $ExpectError
	put( [], [ 1, 3 ], [ 20, 30 ], [] ); // $ExpectError
	put( [], [ 1, 3 ], [ 20, 30 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	put(); // $ExpectError
	put( [] ); // $ExpectError
	put( [], [] ); // $ExpectError
	put( [], [], [] ); // $ExpectError
	put( [], [], [], 'throw', {} ); // $ExpectError
}
