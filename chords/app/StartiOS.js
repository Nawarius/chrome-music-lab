/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(["StartAudioContext", "Tone/core/Tone"], function (StartAudioContext, Tone) {

	return function(){
		// send the ready message to the parent
		var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		var isAndroid = /Android/.test(navigator.userAgent) && !window.MSStream;

		// full screen button on iOS
		if (isIOS || isAndroid) {
			// make a full screen element and put it in front
			new StartAudioContext(Tone.context).then(function() {
				window.parent.postMessage('ready','*');
			});
		} else {
			new StartAudioContext(Tone.context).then(function() {
				window.parent.postMessage('ready','*');
			});
		}
	};
});