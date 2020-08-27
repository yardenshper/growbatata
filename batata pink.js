(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"batata pink_atlas_1", frames: [[0,325,462,54],[638,0,992,159],[1685,168,268,37],[0,0,636,323],[1092,217,778,54],[638,217,452,103],[638,161,1045,54],[1092,273,597,54],[1632,0,313,54],[1685,112,238,54],[1632,56,292,54]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_12 = function() {
	this.initialize(img.CachedBmp_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5761,2926);


(lib.CachedBmp_11 = function() {
	this.initialize(ss["batata pink_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["batata pink_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["batata pink_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["batata pink_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["batata pink_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["batata pink_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["batata pink_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["batata pink_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["batata pink_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["batata pink_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["batata pink_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vase2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.337)").ss(2,1,1).p("AAWDTQhEjxAni0");
	this.shape.setTransform(9.656,42.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAIQgGgHAFgIQAFgGAIgBQAJAAAEAHQAFAHgEAHQgFAIgIAAIgBAAQgHAAgFgHg");
	this.shape_1.setTransform(31.0555,23.5806);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#252525").ss(0.1,1,1).p("AAMjqQAfEEhADR");
	this.shape_2.setTransform(35.4505,41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(211,211,211,0.447)").s().p("AiFDrQhOkRA9jCIE9gCQAfEFhBDQg");
	this.shape_3.setTransform(19.9041,41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,16.9,36.5,49.00000000000001);


(lib.table = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.0552,0.0552);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318,161.5);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EE7676","#4A2525"],[0,1],-11.4,-15.8,0,-11.4,-15.8,632.8).s().p("Eg4AAqCMAAAhUDMBwBAAAMAAABUDg");
	this.shape.setTransform(358.475,269);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,717,538), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,231,27);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.3247,0.3247);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,322.1,51.7);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.698)").ss(3,0,1).p("AkqkYQgDgCgBgCIAAgBIAEgKQAQgOBHgKQBagNB8AAQB8AABXANQBKALAKAPIAAAIQAABFAAAzQAACIAAAHQAAB5AAAkIAAAPQABA4gBACQABABgBABIAFBLIAAAGQAAAAgBABIgGAQAEqkdQgIAQhUALQgtAHg1ADQgbACgdABQgdAAgeAAQg2AAgugCQg9gDgygIQg6gIgSgLQgCgBgCgCAkuCgIAAgPQgBg8ABjpQAAgDAAgMIAEh1AEuEkQgHAQhUAMQhZANh8AAQh8AAhYgNQhWgNADgSQAAgHARgHQAWgJA1gIQAsgGA2gDQAnABA0gCQAEAAAEAAQAwgBBEABQA9ADAyAHQBMAMAIAPQABACAAACQgBABAAABAktDNIAAAIIAAABIABBdAkuCgQAAAsAAADQAAgCABAAAkuCgIABAt");
	this.shape.setTransform(30.3875,33.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AED4FF").s().p("AjWE/QhWgMADgSQAAgIARgGIgVg9IAAgBIAAABIAAgBIAAAAIAAgIIgBgtIAAgPQgBg9ABjoIAAgPIAEh0IAEACQASAMA6AHQAyAIA9ADQAuADA2AAIA7gBIA4gDQA1gDAtgHQBUgLAIgQQgIAQhUALQgtAHg1ADIg4ADIg7ABQg2AAgugDQg9gDgygIQg6gHgSgMIgEgCIgEgFIAAgBIAEgKQAQgNBHgLQBagNB8AAQB8AABXANQBKALAKAPIAAAIIAAB5IAACOIAACdIAAAQIAAA5IAAACIAFBLQgIgQhMgLQgygHg9gDQhEgBgwABIgIAAIgSAAIgIABIgLAAIgUAAIgBAAIAAAAIgTAAIgOAAQg2ADgsAGQg1AIgWAJQAWgJA1gIQAsgGA2gDIAOAAIATAAIAAAAIABAAIAUAAIALAAIAIgBIASAAIAIAAQAwgBBEABQA9ADAyAHQBMALAIAQIAAAFIAAgFIABAEIgBABIgBACQgHAQhUALQhZANh8ABQh8gBhYgNg");
	this.shape_1.setTransform(30.3875,33.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,63.8,69.5);


(lib.Symbol4copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,1).p("ABAAAQAAAvgTAgQgTAhgaAAQgZAAgTghQgSggAAgvQAAgtASgiQATggAZAAQAaAAATAgQATAiAAAtg");
	this.shape.setTransform(37.15,26.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A56AB").s().p("AgsBPQgTggAAgvQAAgtATgiQASggAaAAQAaAAATAgQASAiAAAtQAAAvgSAgQgTAhgaAAQgaAAgSghg");
	this.shape_1.setTransform(37.15,26.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,0,1).p("AAZkAQAbgOAeAAQBIAAAzBPQAzBPAABwQAABxgzBPQgzBPhIAAQgXAAgVgIQgsgSgig1QgzhPAAhxQAAhwAzhPQAdguAkgTgAjXCrQgohEAAhnQAAhUAdhDID7hpAjnCrIAQAAID9Bc");
	this.shape_2.setTransform(25.6,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F5F5").s().p("AAmEHQgsgRgig2QgzhQAAhwQAAhvAzhQQAdguAlgTQAagOAeAAQBIAAAzBPQAzBQAABvQAABwgzBQQgzBPhIAAQgXAAgVgIgAjXCrQgohEAAhnQAAhUAehCID7hqQglATgdAuQgzBQAABvQAABwAzBQQAiA2AsARg");
	this.shape_3.setTransform(25.6,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,54.2,57.2);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,1).p("ABAAAQAAAvgTAgQgTAhgaAAQgZAAgTghQgSggAAgvQAAgtASgiQATggAZAAQAaAAATAgQATAiAAAtg");
	this.shape.setTransform(37.15,26.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgsBPQgTggAAgvQAAgtATgiQASggAaAAQAaAAATAgQASAiAAAtQAAAvgSAgQgTAhgaAAQgaAAgSghg");
	this.shape_1.setTransform(37.15,26.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,0,1).p("AAZkAQAbgOAeAAQBIAAAzBPQAzBPAABwQAABxgzBPQgzBPhIAAQgXAAgVgIQgsgSgig1QgzhPAAhxQAAhwAzhPQAdguAkgTgAjnCrIAQAAQgohEAAhnQAAhUAdhDID7hpAjXCrID9Bc");
	this.shape_2.setTransform(25.6,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F5F5").s().p("AAmEHQgsgRgig2QgzhQAAhwQAAhvAzhQQAdguAlgTQglATgdAuQgzBQAABvQAABwAzBQQAiA2AsARIj9hcQgohEAAhnQAAhUAehCID7hqQAagOAeAAQBIAAAzBPQAzBQAABvQAABwgzBQQgzBPhIAAQgXAAgVgIg");
	this.shape_3.setTransform(25.6,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,54.2,57.2);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAgXIAAAv");
	this.shape.setTransform(3.45,5.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,211,211,0.447)").s().p("AhGBUIAAinICNAAIAACngAgjgBIAAgwg");
	this.shape_1.setTransform(7.05,8.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F2D57A").ss(1,1,1).p("AARh7IgBAQIgHBWIgBAxIAAADIgDAJIgCAYAgEhkIAAAHIAKBzIACAJAhAhwIAFAbIAMBHIAeBbAg+g9IAPAvIANBLAgZhfIAHAmIAOBRIAABCAgUhaIACAhIACAyIAHAjAgehmIAFAxIANCKIADAnAgkhrIALA2IAJAuIAEBcAALhUIgCA/IgDArIgBASIgFAPIgBAGAhDhZIAFAcIAMBPIAEAcAAshYIAAAQIgSAwIgOAqIgCAFIgCAFIAAAtIgDAzAAlhsIgLBUIgPBsAAmAIIgEA8AA2AGIgMBJAAJA7IgBAOAAMASIgDApAAKAXIgBAkAgyASIAQArIATAyAgEAYIAEAfAAmAIIgUBQAA2AGIgeB1AgohcIATCIAA/haIgZBiAAshIIgGBQABOhTIgYBZABHhYIgRBeAAVhkIgJB2AAQhrIgGCCAgEhdIAAB1Ag7hVIAnCRAhNg0IAbBG");
	this.shape_2.setTransform(7.25,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-12.4,17.5,29.299999999999997);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BBA599").ss(9,1,1).p("AFMibQAGAYAAAaQAABrhjBNQhjBNiMAAQiLAAhjhNQhjhNAAhrQAAgaAGgY");
	this.shape.setTransform(33.75,15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(134,83,56,0.988)").s().p("AjuBPQhihNgBhrQABgaAFgYIKXAAQAFAYABAaQgBBrhjBNQhiBNiMAAQiLAAhjhNg");
	this.shape_1.setTransform(33.75,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-4.5,76.5,40.2);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEC454").s().p("AitCTQhIg9AAhWQAAhVBIg9QBIg9BlAAQBmAABIA9QBIA9AABVQAABWhIA9QhIA9hmAAQhlAAhIg9g");
	this.shape.setTransform(192.9,44.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,153,255,0.698)").ss(3,0,1).p("Ax3wZMAjvAAAMAAAAgzMgjvAAAg");
	this.shape_1.setTransform(114.4,104.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5E8FF").s().p("Ax3QZMAAAggyMAjvAAAMAAAAgyg");
	this.shape_2.setTransform(114.4,104.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,231.8,212.9);


(lib.leaf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(134,83,56,0.988)").s().p("AgECJQgIgHgDgLQAAACgDADIgHAEIgUAFIgLABIgMAAIgIgBIgMgEIgDgDQgCgCgFgBIgHgEIgFgFIgJgEQgDgCgDgFIgGgIQgEgFgBgEQgFgBgCgEQgDgFAFgDIAAAAIACgBQAKAEALASQADAGADACIAFABQACABADAEIAFAEIAHADIAHAEQAEADAEAAIAGABIAVgBQALAAAJgFQAIgEADADIABABQgEgKgBgOQABgfgBgQIAAgCIgCABQgDACgFAAIgxAAQgJABgFgCIgLgEQgOgIgLgMIgDgCIgCgFQAAgDAFAAIACAAIAEADIAOAKQAMAJAIACIAKAAIAzAAQAFAAACACIgEgZIgDgOQAAADgJABQgLABgVgEQglgJgSgMQgGgDABgEQABgFAFABIAHADQAkAVArABQAEAAADACIgcgrQgGgHgCgFQgEgIAAgUQAAgQAEgGIAHgKQAEgGABgEQADgJADAAQADAAABAFQADAHgHAKQgIAKgCAGQgBAGAAAGQAAARADAHIAGALIARAYQAJAMAEAKIABgCIAMgQQAGgHABgFIACgNIAGgLIACgKQACgEAEgEQADgEACgBQAEgCACAEQACADgDAEQgIAMgFASIgEAMIgRAbQgCAEgEACIgDAAIADAOIADAOIAFABQAIAEAHgCQALgBAPgJQASgLAHgDIAVgEQAMgCAGgFQgBgFACgDQACgFAEABQADACAAAEQABAHgCAEQgDAFgIAEQgGACgNACQgNACgGADIgRALQgUANgYAAIgIgCIABAQIgBAkQABANAEAJIABAAIAagBIAegLIAKgFIALgHIA+gzQAEgDACAAQABAAABAAQAAABABAAQAAAAAAABQABAAAAABQABADgBADQgBACgHAFQgLAHgcAXIgGAGIgTAPIgMAHIggAMQgLADgRAAIAAABIAEAHQACAFgFACIgBAAQgCAAgCgDg");
	this.shape.setTransform(15.01,15.435);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(56,129,53,0.988)").s().p("AiLCVQgQgRADgdQAAgKAEgOIACgIQABAEAGABQAAAEAFAFIAGAIQACAFAEACIAIAEIAFAFIAHAEQAFABACACIADADIANAEIAIABIALAAIALgBIAUgFIAIgEQACgDAAgCQAEALAHAHQADAEAEgBQADgCgCgFIgDgHIgBgBQARAAAMgDIAfgMIAMgHIATgPIAHgGQAbgXAMgHQAHgFABgCQABgDgCgDQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgCAAgEADIg/AzIgLAHIgJAFIgfALIgaABIAAAAQgEgJgBgNIAAgkIAAgQIAIACQAXAAAUgNIARgLQAGgDANgCQAOgCAFgBQAJgEADgGQACgEgBgHQAAgEgEgCQgEgBgCAFQgBADABAFQgGAFgNADIgUAEQgHADgSAKQgQAJgKABQgHACgIgEIgGgBIgCgOIgEgOIADAAQAEgCACgEIASgbIADgMQAFgSAIgMQAEgEgCgDQgCgEgEACQgDABgDAEQgEAEgCAEIgCAKIgFALIgCANQgCAFgGAHIgLAQIgBACQgFgKgJgMIgQgYIgHgLQgDgHAAgRQAAgGACgGQACgGAHgKQAHgKgCgHQgBgFgDAAQgEAAgCAJQgBAEgFAGIgHAKQgDAGAAAQQAAAUAEAIQACAFAFAHIAcArQgCgCgFAAQgqgBgkgVIgHgDQADgUALgQIAGgLQAEgGAAgEIACgNQABgHAKgKQAKgKACgHIACgKQACgGADgBQAGgCAIAIIATAQQAVAPAuAYQAmAXAbAgQARAUALATQAQAaAKAeQAJAbgGAQQgGAPgXARQgeAWgRAFQgOAEgVgBQgPAAgJgFQgOgGgCgNQgTASgWAIQgYAKgbAAQgfAAgQgQgAhPBwQgDAAgEgDIgIgEIgGgDIgGgEQgCgEgCgBIgFgBQgEgCgDgGQgKgSgKgEIgCABIABgJIAHggIACgKQALAMAPAIIAKAEQAGACAIgBIAxAAQAGAAACgCIADgBIAAACQABAQgBAfQABAOADAKIgBgBQgCgDgIAEQgKAFgLAAIgVABgAggAaIg0AAIgKAAQgHgCgMgJIgOgKIgFgDIACgHIABgaQATAMAkAJQAVAFALgBQAJgBABgEIADAOIAEAZQgCgCgFAAg");
	this.shape_1.setTransform(15.3531,16.4466);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.7,32.9);


(lib.hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1B073").s().p("ADFCSIAEgEIgOAPIAKgLgAjEgkIAJAAIgNAKgAhhh9QABgQADgPQgCAPABAQg");
	this.shape.setTransform(202.1,82.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C88E57").s().p("AoHQjQA5hTBnhyQE6leBzjVQAEgIAFgHIABgCIAAAAQAzhHApg9IgIAWQAOgWAMgQIBMh/IBbidIAphQQgEABAWgnQAZgeANgSIgGgFIgBgBIACgDIABgBIgDAEIgFgEIASgRQADgFAEgCIAZgbIAEgEIA2g+IARAIQAEgGAAgHIgCgRIAAAAQAAgEAOApIgwBNIgUAcIgBABQgCAJgHALIgJAOIgKADIgHASQgrBfhqDHIglBDQg4BkghAtQglAtgJAXQgDAHhzCiIg4BOQh1DFinDLIijDFQgYgpgggzgAAiHSIAhg8QAbg0ABgJQgdA8ggA9gAsMIZQAvgQAkgiQEBj5CcjuIETmVIgLgKQhrjaBKjqIAKggQBbA/AfBfQAiifB2ipIAaglQAjALACAqQADBBgaBMQAgg0Ach3QAKgsAagPQAngYBVAyQBIAeghBUIgyB6IBti7QCZDWiPDaIADABQAmg5AfgZQAdgZAbgGQAPgDAOACQAOAEAGAJQADAEABAGQAEASgNAZQgLASgdAhQg/BIhVCDQgFgagCgTIBGhRQAYgbAQgWQATgcgDgRQgBgHgFgEQANgMAOgIQgSACgTANQAAgBgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgQgDgPAKQgMAHgUAdIhZBpQAAgJgGgHIgBgBQgHgIgMAAIgBABQCzkphxiJQhZCcg/CRIgXALQBlmBgthHQhygCgKCbQgJB2guB+IhCAgQBrl0hPARQhJAPgnFXIgeAPQACAUgBAWIAAACIgCAdIgLgBIgMgHQgeiLhFh7QgvEgBqChIAAAiIgMACIgCAHQgFARAFgFIh3CyQisEShKBpQiaDVj/CuIgHAFg");
	this.shape_1.setTransform(177.5707,139.0332);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3B78E").s().p("ArkJiQD/ivCZjUQBLhqCrkRIB3izQgEAFAEgQIACgHIAMgDIAAgiQhqihAwkgQBFB8AdCLIANAHIALAAIACgcIAAgDQAAgVgCgUIAfgQQAmlWBKgQQBOgRhrF1IBDghQAuh9AIh2QALicBxADQAtBGhkGBIAWgKQBAiSBZibQBwCJizEoIABAAQAMAAAIAIIAAAAQAHAHAAAJIBZhpQAUgdAMgHQAOgKAQAEQABgBAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQATgNASgCQgNAIgNAMQAEAFACAHQACAQgTAcQgQAWgXAcIhGBQQABATAGAbQgPgpABADIAAABIACAQQgBAHgEAGIgRgIIg1A+IgFAFIgYAaQgEADgDAEIgSARIAEAEIADgEIAAACIgCADIABABIAFAEQgMATgaAdQgWAnAFAAIgqBPIhaCdIhNCAQgLAPgOAWIAHgWQgpA+gyBGIgBABIgBACQgFAGgDAIQhzDWk7FeQhmBxg6BUgAHNmAIgKAMIAOgPIgEADgABDo2IgFAKIAOgLgACmqQIADAAQgBgQABgPQgCAQgBAPg");
	this.shape_2.setTransform(175.725,135.998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.5,24,156.2,230.1);


(lib.BATATAcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F2D57A").ss(3,0,1).p("ACCgyIkDBl");
	this.shape.setTransform(-19.5,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F2D57A").ss(3,0,1).p("AiBAzIEDhl");
	this.shape_1.setTransform(-18.1,53.15);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F2D57A").ss(3,0,1).p("AiBA0IEDhm");
	this.shape_2.setTransform(-16.7,52.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F2D57A").ss(3,0,1).p("AiBAzIEDhm");
	this.shape_3.setTransform(-15.25,51.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F2D57A").ss(3,0,1).p("ACCgzIkDBm");
	this.shape_4.setTransform(-4,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},6).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:-16.7,y:52.3}}]},1).to({state:[{t:this.shape_3,p:{x:-15.25,y:51.45}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-11.05,y:48.95}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2,p:{x:-5.4,y:45.55}}]},1).to({state:[{t:this.shape_4}]},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(7).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-13.85,y:50.6},0).wait(1).to({x:-12.45,y:49.75},0).to({_off:true},1).wait(1).to({_off:false,x:-9.65,y:48.1},0).wait(1).to({x:-8.25,y:47.25},0).wait(1).to({x:-6.8,y:46.4},0).to({_off:true},1).wait(9));

	// Layer_4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F2D57A").ss(3,0,1).p("AiHgpIEPBT");
	this.shape_5.setTransform(60.55,53.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1).to({x:58.85,y:52.8},0).wait(1).to({x:57.15,y:51.95},0).wait(1).to({x:55.5,y:51.1},0).wait(1).to({x:53.8,y:50.25},0).wait(1).to({x:52.1,y:49.4},0).wait(1).to({x:50.4,y:48.6},0).wait(1).to({x:48.7,y:47.75},0).wait(1).to({x:47,y:46.9},0).wait(1).to({x:45.35,y:46.05},0).wait(1).to({x:43.65,y:45.2},0).wait(1).to({x:41.95,y:44.35},0).wait(14));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(176,75,0,0.988)").s().p("AAqE6QAAgEAFgBIAHgBQAIgBANgHIARgFQAJgEADgGQAGgHADABQADABAAAEQAAACgCADQgEAJgLAFIgeAMIgKADIgJABQgHAAgBgFgAAaELQgJAAgHgFIgGgFIgMgCQgGgBgJgOQgCgDABgDQABgEAGACQACABAEAFQADAFACABIAHABQAEAAAGAFQAHAFAEABIAIABQAFABAAAEQgBAFgGAAIgCAAgACIDaQgFgCACgEQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAFgDIAHgIQAFgFADgIIACgFQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAEAAABAGQAAADgDAFQgCAFgEAFIgIAKIgGAGIgFABIgDgBgAhiDEIgEgDIgFgCIgEgDIgEgCIgFgEIgCgEQAAgDAEgBIABAAIAAgCIAHAEIAQAKIADAEQACAEgEACIgCABIgDgBgAB6CBQgBgDABgCIACgCIAAgJQABAAAAgBQAAgBABAAQAAAAAAAAQABgBAAAAIACAAIADACIABADIABAGIgBAFQgBADgDACIgDABIgEgDgAiCCBQgFAAgBgDQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAKAAQAPAAANgTIARgXIAFALIgIANQgFAIgGACQAAAEgGAEIgKAHQgGADgKAAIgGAAgAAVB4QgGgDgIgJQgIgLgEgDIgFgFQgCgFAEgDQAEgCAEAGIAIAJIAPANIAGAFQACAFgCACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBgAhHBAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQACADAAADIAAAAIgGgHgAAiARQgDgDACgDQAAgCAJgCIAJgGIAOgHIADgCIADgDQADgEADgBQAEgBADADQAEAEgEADIgDACIgGAFQgFAEgJAEIgKAGIgLAEIgGgBgAiAgUIgSgOQgJgIgCgEIgDgJQgCgHgCgDQgDgGABgCQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIAFABQACADACAHQACAJAEAGIAHAIIAOALQAGAEABACQAAABAAAAQAAABAAAAQABABAAABQgBAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAIAAAAQgDAAgDgDgAALgzQgFgDgCgFIgBgFIgDgFQgFgFgEgJIgCgEIgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAEgBADAEIACAGQABAHAKAKIAFALQADAEAAACQgBAEgDAAIgEgBgAhZhsIgFgFIgFgDIgDgEIgHgFQgBgCAAgFIgDgMQgBgHABgFQABgDAEgBQAEAAABAEIAAAHIACAJQACAFgBADQAEAAABAEIAFAFIAFACQACACABADQABADgCADQgCADgCAAIgCgBgAA/h6QgDgCAAgCQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIADgDIAGgIQABgCADgBIADgBQAEAAABAEQABAEgEACIgBABIgCACIgFAIIgEADIgBAAIgEgBgAgZjGIgDgEIgHgIIgIgNIgFgKQAAgHAHgCIAJASIALAOIAGAFQADADgCAEQgCADgDAAQgDAAgDgDgAA9kDIgfgaQgEgEgBgDIgCgIIgDgEIgDgEQgCgDAAgDQAAAAABgBQAAgBAAAAQABgBAAAAQAAAAABgBQADgBAFAFQAFAFABADIADAKIAFAGIAbAWIAFAFQACAEgDADIgCAAQgDAAgFgDg");
	this.shape_6.setTransform(21.2639,41.3659);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(25));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(238,110,13,0.988)").s().p("AAOGIQgLgEgJgJQgFACgGAAQgVABgQgWIgLgTIgKgUQgHgOgQgWIgYgkQgRgdgVg7QgQgtgKgVQgNgbgDgKQgCgIgBgNIgCgXIgGgkQgDgWABgPIAHgnIADgWIAFgWQAJgbAogeQARgOAEgGQADgGADgJIAEgPQAFgTAPgUQAJgNATgUIAngrQAUgWANgHQASgKAPAGQAJAEAFAJIAAAAQAJAFALAMQAZAcALAQQASAZAHAZQAGAVAAAbQAAASgEAgIgVC1QgDAYAEAMQADALALALQAEAGAPANQA3AzANA5QAJAkgHAlQgHAlgVAeQgPAXgdAXQgSAOgNAFQgMAEgeAAQglgBgRgHg");
	this.shape_7.setTransform(21.6406,40.0375);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(25));

	// Layer_7
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F2D57A").ss(3,0,1).p("Ah1AhIDrhB");
	this.shape_8.setTransform(51.625,24.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(13).to({x:50.075,y:25.4},0).wait(1).to({x:48.525,y:25.95},0).wait(1).to({x:46.975,y:26.45},0).wait(1).to({x:45.425,y:26.95},0).wait(1).to({x:43.875,y:27.5},0).wait(1).to({x:42.325,y:28},0).wait(1).to({x:40.775,y:28.5},0).wait(1).to({x:39.225,y:29.05},0).wait(1).to({x:37.675,y:29.55},0).wait(1).to({x:36.125,y:30.05},0).wait(1).to({x:34.575,y:30.6},0).wait(1).to({x:33.025,y:31.1},0).wait(1));

	// Layer_5
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F2D57A").ss(3,0,1).p("ABWAcIirg3");
	this.shape_9.setTransform(-17,25.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F2D57A").ss(3,0,1).p("AhVgbICrA3");
	this.shape_10.setTransform(-15.45,25.75);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{x:-17,y:25.25}}]}).to({state:[{t:this.shape_9,p:{x:-17,y:25.25}}]},10).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9,p:{x:1.6,y:31.45}}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(11).to({_off:false},0).wait(1).to({x:-13.9,y:26.3},0).wait(1).to({x:-12.35,y:26.8},0).wait(1).to({x:-10.8,y:27.3},0).wait(1).to({x:-9.25,y:27.85},0).wait(1).to({x:-7.7,y:28.35},0).wait(1).to({x:-6.15,y:28.85},0).wait(1).to({x:-4.6,y:29.4},0).wait(1).to({x:-3.05,y:29.9},0).wait(1).to({x:-1.5,y:30.4},0).wait(1).to({x:0.05,y:30.95},0).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,0,109.7,80.1);


(lib.BATATA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(176,75,0,0.988)").s().p("AAqE6QAAgEAFgBIAHgBQAIgBANgHIARgFQAJgEADgGQAGgHADABQADABAAAEQAAACgCADQgEAJgLAFIgeAMIgKADIgJABQgHAAgBgFgAAaELQgJAAgHgFIgGgFIgMgCQgGgBgJgOQgCgDABgDQABgEAGACQACABAEAFQADAFACABIAHABQAEAAAGAFQAHAFAEABIAIABQAFABAAAEQgBAFgGAAIgCAAgACIDaQgFgCACgEQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAFgDIAHgIQAFgFADgIIACgFQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAEAAABAGQAAADgDAFQgCAFgEAFIgIAKIgGAGIgFABIgDgBgAhiDEIgEgDIgFgCIgEgDIgEgCIgFgEIgCgEQAAgDAEgBIABAAIAAgCIAHAEIAQAKIADAEQACAEgEACIgCABIgDgBgAB6CBQgBgDABgCIACgCIAAgJQABAAAAgBQAAgBABAAQAAAAAAAAQABgBAAAAIACAAIADACIABADIABAGIgBAFQgBADgDACIgDABIgEgDgAiCCBQgFAAgBgDQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIAKAAQAPAAANgTIARgXIAFALIgIANQgFAIgGACQAAAEgGAEIgKAHQgGADgKAAIgGAAgAAVB4QgGgDgIgJQgIgLgEgDIgFgFQgCgFAEgDQAEgCAEAGIAIAJIAPANIAGAFQACAFgCACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgEgBgAhHBAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQACADAAADIAAAAIgGgHgAAiARQgDgDACgDQAAgCAJgCIAJgGIAOgHIADgCIADgDQADgEADgBQAEgBADADQAEAEgEADIgDACIgGAFQgFAEgJAEIgKAGIgLAEIgGgBgAiAgUIgSgOQgJgIgCgEIgDgJQgCgHgCgDQgDgGABgCQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIAFABQACADACAHQACAJAEAGIAHAIIAOALQAGAEABACQAAABAAAAQAAABAAAAQABABAAABQgBAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAIAAAAQgDAAgDgDgAALgzQgFgDgCgFIgBgFIgDgFQgFgFgEgJIgCgEIgCgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQAEgBADAEIACAGQABAHAKAKIAFALQADAEAAACQgBAEgDAAIgEgBgAhZhsIgFgFIgFgDIgDgEIgHgFQgBgCAAgFIgDgMQgBgHABgFQABgDAEgBQAEAAABAEIAAAHIACAJQACAFgBADQAEAAABAEIAFAFIAFACQACACABADQABADgCADQgCADgCAAIgCgBgAA/h6QgDgCAAgCQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIADgDIAGgIQABgCADgBIADgBQAEAAABAEQABAEgEACIgBABIgCACIgFAIIgEADIgBAAIgEgBgAgZjGIgDgEIgHgIIgIgNIgFgKQAAgHAHgCIAJASIALAOIAGAFQADADgCAEQgCADgDAAQgDAAgDgDgAA9kDIgfgaQgEgEgBgDIgCgIIgDgEIgDgEQgCgDAAgDQAAAAABgBQAAgBAAAAQABgBAAAAQAAAAABgBQADgBAFAFQAFAFABADIADAKIAFAGIAbAWIAFAFQACAEgDADIgCAAQgDAAgFgDg");
	this.shape.setTransform(21.2639,41.3659);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(238,110,13,0.988)").s().p("AAOGIQgLgEgJgJQgFACgGAAQgVABgQgWIgLgTIgKgUQgHgOgQgWIgYgkQgRgdgVg7QgQgtgKgVQgNgbgDgKQgCgIgBgNIgCgXIgGgkQgDgWABgPIAHgnIADgWIAFgWQAJgbAogeQARgOAEgGQADgGADgJIAEgPQAFgTAPgUQAJgNATgUIAngrQAUgWANgHQASgKAPAGQAJAEAFAJIAAAAQAJAFALAMQAZAcALAQQASAZAHAZQAGAVAAAbQAAASgEAgIgVC1QgDAYAEAMQADALALALQAEAGAPANQA3AzANA5QAJAkgHAlQgHAlgVAeQgPAXgdAXQgSAOgNAFQgMAEgeAAQglgBgRgHg");
	this.shape_1.setTransform(21.6406,40.0375);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.3,80.1);


(lib.vase3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// vase_2
	this.instance = new lib.vase2("synched",0);
	this.instance.setTransform(38.4,50.85,2.1631,2.1631,0,0,0,19.9,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol_5
	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.setTransform(37.8,54.9,1,1.2421,0,0,0,30.4,33.3);
	this.instance_1.alpha = 0.3789;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,77.8,103.7);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.leaf("synched",0);
	this.instance.setTransform(119.8,82.85,0.6885,0.6721,-60.0676,0,0,11.4,38.5);

	this.instance_1 = new lib.leaf("synched",0);
	this.instance_1.setTransform(108.4,44.4,0.6885,0.6721,26.8856,0,0,13.5,18.9);

	this.instance_2 = new lib.leaf("synched",0);
	this.instance_2.setTransform(50.75,64.25,0.3446,0.7368,0,-124.4756,-113.8705,13.6,18.6);

	this.instance_3 = new lib.leaf("synched",0);
	this.instance_3.setTransform(64.6,96.75,0.6885,0.6721,-60.0676,0,0,11.4,38.5);

	this.instance_4 = new lib.leaf("synched",0);
	this.instance_4.setTransform(52.8,49.05,0.7,0.8532,-32.4897,0,0,-11.6,14.1);

	this.instance_5 = new lib.leaf("synched",0);
	this.instance_5.setTransform(274.1,73.3,0.5073,0.5678,0,0,0,7.4,14.3);

	this.instance_6 = new lib.leaf("synched",0);
	this.instance_6.setTransform(15.75,57.85,0.4905,0.9304,-41.6978,0,0,15.3,16.4);

	this.instance_7 = new lib.leaf("synched",0);
	this.instance_7.setTransform(231.1,57.4,0.7843,1.2876,-168.2821,0,0,15.3,16.5);

	this.instance_8 = new lib.leaf("synched",0);
	this.instance_8.setTransform(199.5,104.8,0.5484,0.8923,0,176.8043,169.1675,15.1,16.4);

	this.instance_9 = new lib.leaf("synched",0);
	this.instance_9.setTransform(244.7,17.7,0.7843,1.2876,72.7218,0,0,15.3,16.4);

	this.instance_10 = new lib.leaf("synched",0);
	this.instance_10.setTransform(141.7,49.4,0.4905,0.7733,-56.4027,0,0,34.8,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(31,52,30,0.988)").s().p("AS0GaQgigZgIgYQgegMgSgmQgKgVgMgyQgWhZgphXIgHgPQhOhag0huQgMgbgJgLIgRgUIgYgfQgbgfg6gOQhkgZhfArQgtAXgYAKQghANhPAKQhLAJglARIghAQQgUAKgOADQgKACgWABQgTACgLACQgKADgRAHIgDACQiFCJhMCuQAHgJAMgKIAggXQADgMAOgLQADgDAIgEIARgUQAIgHAQgNQARgMAHgIIAOgPIANgOQAHgGAagOQAagQA2gmIAzglIBnhLQASgNAMgBQAVgCAWAZIARAUQALALAJAFQAMAFAbABQAZACAMAGQAHAEALALQAKAKAGAEQAJAGAVAEQATAFAJAFQAGAEANANQAKAMAIAEQAGADANAFQAMAHgEAKIBJAGQACABgDAEQgEADgFgBIg0gBQgNgBgFgDQgEgCgBgEQgCgFADgDQgQAAgRgQIgegZQgIgFgRgFQgSgFgHgEQgHgDgVgRQgPgNgMgCQgIgCgOABQgQAAgHgCQgQgEgYgcQgYgbgSgCQgRgCgSAOIggAZQgMAKgUAMIgjATQgTAMgiAeQgiAfgSAMIgxAcQgVANgeAcIgUAUIADgCQAEgBAPAAIA/ABQAPAAAKADQAHACARALQAdAQAiAHQAUAFAHAEQAFAEALATQAZAsAvAUQAWALA1AJQA2AKA4AQQAyAOAQAYQAJAPABAWQABAPgFAaQAAAIgEABQgEACgFgGQgQgOgJgWIAJgDIARAXQAIgRgFgUQgDgUgOgNQgRgQgmgKQg1gPgwgHQg1gLgOgFQgggMgagZQgagYgNggQgwgLgVgKIgagNQgOgIgNgCQgHgBgQAAIg1ABQgTAAgJADQgJADgQAOIgRAMIgJAIQACALgKALIgJALQgGAHgBAGQgCAIACAPIAAAIQgBAIgHAFQgGAGgGgFQAFgLADgLQACgKgBgJQgBgKABgGIgCACQgLAKgFAHIgHAQIgDAHQgGANgKADQAAgNACgKQACgIAEgGQADgGAFgGQAniDBth/QASgWAXgYIgBAAQgaAJhXABQhHABgfAdQgZAVgMAsQgJAegCAfIgDAgQgBATgFANIgJAVQgGANgCAJIABAkQABAMgCAJQgCAHgFAFQgCgGgBgGQgKgkAPgkIAJgTQAFgLACgIQACgLgBgQIgBgcQACgKAFgPIAIgYIAJgkQAGgVAHgNQAegxBVgCIBAgBQAmgBAagJIAXgJQBAhABfhUIA7g1IBDg5QAmgeAjgRQA5gdArAJQAbAFAoAcQBbA+A+A4QBlBcBFB1QAiA4AxBqQANARAHAIQAuAtBAALQgEAJgOgCQgsgBg2g5IgBgBQAZA7AJAfQAFAMAHAdIALAqQAZBNA/A4QA1AuBKAYIAnANQAXAIAOALQhlgLhXg8gAhKCcIAHgEIACgEgAOBikQALAiAXAmQANAUAhAuIASAZIgagvIhRiSIgEgCQAEAIAJAYgAGsmtQgbAShCA5Ih/BxQg2AwggAgIAMgEQALgCAYgCQAXgCALgDQAMgDAPgJIAagPQAagMAkgHIBAgJQBBgIApgQIArgTQAcgNANgFQA0gUA4ACQA5ACAxAWQApARATAcIgKgRQgUgdgygnIhchJQgrgggZgPQgqgVgkAAQgtAAg3AkgANZjcIABAAIAAAAIgDgFIACAFgAvZFRQADgDAFgBQATgIAQgDQATgEAKgEQAQgKAKgDQAKgEAQgCQAWgCAFgBQARgDAagQQAegRAMgFQAUgFAKgEQAPgGAHgKQAIgLgBgaIgBgzQgBgRAGgGQADgDAIgDIAMgEQAHgEAHgOQAIgPAGgFQAGgGANgDQAWgFArABIAgADQASADAKAJQAFADARAWQAPAXAXAUQAWATAFAJQADAHACALQADANADAFIABABQADAIAJAJIAQAQQAPAQgJALQgbgbgQghIgGgMQgIgWgEgFQgBgCgQgNQgZgVgWgeQgJgNgGgFQgOgKgeAAQgdgBgRACQgZACgSAKQgNAigkAKQAEAqgGAoQgCAZgMANQgJALgWAFQghAHgEACQgLAEgVAPQgSAOgMADQgJADgMABIgVAAQgUAAgJAHIgLAMQgFADgLABIg8AJQgDgCACgEgAk/DKIAAgMQACgSgCgRIgIgHQgXgSgJgPIgGgRIgGgSQgHgRgVgiIgCgEIgCgCQgRgWgNgHQgMgHgZgDQgugHgXAAQg2gCg9AMQgQACgKAFQgJAFgOAOQgNAOgJAEIgNAFQgHAEgDAFIgBAJQgBAGgDACQgDAEgLADQgDADgBAGIgCAKQgDAHgHAGQgEAEgKAFQgPALgYAfQgfAfg0ALQgiAIg8ABQgCgCACgDQADgDAEgBQARgEAcgFIAtgIQA3gNAYgeQAMgSAJgGQAPgJAHgHQAFgEALgSQAOgdAOgMQAGgEAUgLQAQgIAHgIQAIgPAIgGQAGgFAPgDQBPgRB0ASQAZAEAKAGIAHAFIgSgcQgZglgPgPIgsgmQgMgLgVgZQgUgWgTgFQgOgGgbACIi1ABQgnAAgWAGQgNAEgTAJIggAQQgTAIgjAHQgqAKgMAEQgbAIg4AbQg1AZgdAIQglAKgwACQgeABg3gDQACgHAPgBIA0gCQAhgBARgCQAwgFBFgfQBYgoAbgHQA0gNAagKIAogSQAYgMARgEQAPgEATAAQAJgBAaAAICfABQAyACAWALQANAIAQAUQAWAaAHAGQAGAGASANQAQALAIAHQAJAJAKAQIARAaIAdAnQANATAKASIABABIATAPQAKAKALAQQANAQAGAOQAOAaAEAbIAtAyIgrgjQACASgDATQAAAMgDAMQgIgGAAgSgAlqBHQAJAXAGALIAVAbIAEADIgDgHQgGgXgMgNQgMgLgEgHIgLgVIgEgGIAMAYg");
	this.shape.setTransform(162.1,72.4184);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,5.8,298.4,114.8);


(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,64.2,0.5,0.5);

	this.instance_1 = new lib.BATATA("synched",0);
	this.instance_1.setTransform(74.2,76.95,2.3857,1.9238,0,0,0,21.7,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.start, new cjs.Rectangle(0,0.1,134,153.9), null);


(lib.scene_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// table
	this.instance = new lib.table("synched",0);
	this.instance.setTransform(166.45,389.1,2.3048,2.3048,0,0,0,158.9,80.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(183));

	// hand
	this.instance_1 = new lib.hand("synched",0);
	this.instance_1.setTransform(-61,77.05,1,1,31.2488,0,0,177.6,139.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:177.5,regY:139,rotation:44.9907,x:76.1,y:145.95},19).to({x:-279.25,y:239.5},8).wait(156));

	// LEAFS2
	this.instance_2 = new lib.leaf("synched",0);
	this.instance_2.setTransform(198.8,88.5,0.3222,0.3222,142.532,0,0,15.3,16.3);

	this.instance_3 = new lib.leaf("synched",0);
	this.instance_3.setTransform(198.8,88.5,0.3222,0.3222,142.532,0,0,15.3,16.3);

	this.instance_4 = new lib.leaf("synched",0);
	this.instance_4.setTransform(198.8,88.5,0.3222,0.3222,142.532,0,0,15.3,16.3);

	this.instance_5 = new lib.leaf("synched",0);
	this.instance_5.setTransform(199.4,88,0.3222,0.3222,142.532,0,0,12.9,16.4);

	this.instance_6 = new lib.leaf("synched",0);
	this.instance_6.setTransform(199.4,88,0.3222,0.3222,142.532,0,0,12.9,16.4);

	this.instance_7 = new lib.leaf("synched",0);
	this.instance_7.setTransform(199.4,88,0.3222,0.3222,142.532,0,0,12.9,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{regX:15.3,regY:16.3,rotation:142.532,x:198.8,y:88.5,scaleX:0.3222,scaleY:0.3222}}]},91).to({state:[{t:this.instance_3,p:{regX:15.3,regY:16.3,rotation:142.532,x:198.8,y:88.5,scaleX:0.3222,scaleY:0.3222}},{t:this.instance_2,p:{regX:15.4,regY:16.1,rotation:105.0381,x:211.8,y:64.1,scaleX:0.3222,scaleY:0.3222}}]},6).to({state:[{t:this.instance_4,p:{regX:15.3,regY:16.3,rotation:142.532,x:198.8,y:88.5}},{t:this.instance_3,p:{regX:15.4,regY:16.1,rotation:105.0381,x:211.8,y:64.1,scaleX:0.3222,scaleY:0.3222}},{t:this.instance_2,p:{regX:15.4,regY:16.1,rotation:105.0381,x:212.8,y:73.7,scaleX:0.3222,scaleY:0.3222}}]},9).to({state:[{t:this.instance_5,p:{regX:12.9,regY:16.4,rotation:142.532,x:199.4,y:88}},{t:this.instance_4,p:{regX:15.4,regY:16.1,rotation:105.0381,x:211.8,y:64.1}},{t:this.instance_3,p:{regX:15.4,regY:16.1,rotation:105.0381,x:212.8,y:73.7,scaleX:0.3222,scaleY:0.3222}},{t:this.instance_2,p:{regX:12.8,regY:16.4,rotation:-143.2511,x:145.4,y:72.4,scaleX:0.3222,scaleY:0.3222}}]},5).to({state:[{t:this.instance_6,p:{regX:12.9,regY:16.4,rotation:142.532,x:199.4,y:88}},{t:this.instance_5,p:{regX:15.4,regY:16.1,rotation:105.0381,x:211.8,y:64.1}},{t:this.instance_4,p:{regX:15.4,regY:16.1,rotation:105.0381,x:212.8,y:73.7}},{t:this.instance_3,p:{regX:12.8,regY:16.4,rotation:-143.2511,x:145.4,y:72.4,scaleX:0.3222,scaleY:0.3222}},{t:this.instance_2,p:{regX:12.7,regY:16.4,rotation:-104.0547,x:157.15,y:61.8,scaleX:0.3221,scaleY:0.3221}}]},6).to({state:[{t:this.instance_7},{t:this.instance_6,p:{regX:15.4,regY:16.1,rotation:105.0381,x:211.8,y:64.1}},{t:this.instance_5,p:{regX:15.4,regY:16.1,rotation:105.0381,x:212.8,y:73.7}},{t:this.instance_4,p:{regX:12.8,regY:16.4,rotation:-143.2511,x:145.4,y:72.4}},{t:this.instance_3,p:{regX:12.7,regY:16.4,rotation:-104.0547,x:157.15,y:61.8,scaleX:0.3221,scaleY:0.3221}},{t:this.instance_2,p:{regX:12.7,regY:16.4,rotation:-104.0547,x:151.15,y:82.3,scaleX:0.3221,scaleY:0.3221}}]},6).wait(60));

	// leafs
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30260D").s().p("AgrARQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgCIAFgCIAAgFQABgCADgCIADgCIACgGQACgDAFAAQAKgBARABQARgBAKgFIAGgCQAFAAABACQgFAFgGACQgKAEgZABIgRAAIgFABQgDACgBACIgEAIQgCAFgDACIgEABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape.setTransform(192.4167,80.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#30260D").s().p("AhbBCQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIACgCIAFgCIAAgEQABgDADgCIADgDIACgGQACgCAFAAQAKgBASAAQARgBAKgFIABAAIADgCQAKgGACgEQAHgHgCgIIgBgEIgBgFIABgMQAAgGABgCIAFgFIALgHIALgFIAIgDIAGgFQAKgJANgDIAUgGIACABQgDAGgIACIgNADQgGACgJAGQgNAKgEABIgGABIgGAFIgGAEIgFADQgEADAAAHIAAAJIADAMIgCAIIgCAGIgNAJIACABQgFAFgGACQgKAFgaAAIgRAAIgFACQgDABgBADIgEAJQgCAEgDACIgEABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBAAAAg");
	this.shape_1.setTransform(197.2417,75.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#30260D").s().p("AA3BkQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgCIAFgCIAAgFQABgCADgCIADgDIACgGQACgDAFAAQAKgBASABQARgBAKgFIABAAIADgDQAKgFADgEQAHgHgCgIIgBgFIgBgGIABgMQAAgFABgDIAFgEIALgGIALgGIAIgCIAGgFQAKgJANgEIAUgGIACACQgDAGgIABIgNAEQgGABgJAHQgNAKgEABIgGABIgGADIgGAFIgFACQgEADAAAIIAAAJIADANIgCAIIgCAFIgOAKIACABQgFAFgGACQgKAEgaABIgRAAIgFABQgDACgBADIgEAIQgCAFgDACIgEABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAgAjvAjQgBgHACgDIAEgDQAHgFADgFIAFgGIAHgGQAGgFADgHQACgGgBgDQgBgGgEgBIgDgCIABgCQAFgCADADQADACABAGQABAJgDAFQgBAFgIAIQgFAFgDAAQgIAMgKAIQACAEgEADgAA1g2QgDAAgCgCQADgDAHAAQAIAAACgDQABgDAAgEIAAgJQABgGAJgHQADgGAHgCQAGgDABAFQgGACgEAFQgEAGgDAAIgDAFQgCACAAAHIgBAJQgCAFgGACIgGAAIgGAAg");
	this.shape_2.setTransform(182.53,72.5804);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#30260D").s().p("ABGC8IgGgBIgHABIgKAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgCAEgBIAKgBIAJgBIAEABIALgCIADAAIADADQAAAAAAABQgBAAAAAAQAAABgBAAQgBABAAAAQgGACgEAAIgEAAgABbAyQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgCIAFgCIAAgFQABgCADgCIADgDIACgGQACgDAFAAQAKgBASABQARgBAKgFIACAAIACgDQAKgFADgEQAHgGgCgIIgBgFIgBgGIABgMQAAgFABgDIAFgEIALgHIALgGIAIgCIAGgFQAKgJANgEIAUgGIACACQgDAGgIABIgNAEQgGABgJAHQgNAKgEABIgGABIgGAEIgGAFIgFACQgEADAAAIIAAAJIADANIgCAHIgCAFIgNAKIABABQgFAFgGACQgKAEgaABIgRAAIgFABQgDACgBADIgEAIQgCAFgDACIgEABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAjLgOQgBgHACgDIAEgDQAHgFADgFIAFgGIAHgGQAGgGADgHQACgGgBgDQgBgGgEgBIgDgCIABgCQAFgCADADQADACABAGQABAJgDAFQgBAFgIAJQgFAFgDAAQgIAMgKAIQACAEgEADgAj8hRQgJAAgFgEIgFgHIgDgIQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAIAFAIQADAFACABQAEADAKgBQARgBAFgBQAHgDAMgIQANgGAIADQAGABAHAIQADADAAADQAAAFgDAAIgDgBQAEgEgHgEQgGgDgBgDIgPABQgCACgFADQgTALgVAAIgFAAgABZhoQgDAAgCgCQADgDAHAAQAIAAACgDQABgDAAgEIAAgJQABgGAJgHQADgGAHgCQAFgCACADIABgCIAEgBQAJgBALgIQANgJAGgGIAFgFQACgCAFgCQANgGANAFQAAADgFAAQgIAAgJADQgGABgDADIgEAGIgHAGIgMAIQgSAMgKgDIAAgBQgGACgEAFQgEAGgDAAIgDAFQgCACAAAHIgBAJQgCAFgGACIgGAAIgGAAg");
	this.shape_3.setTransform(178.925,77.5702);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#30260D").s().p("ABGC8IgGgBIgHABIgKAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgCAEgBIAKgBIAJgBIAEABIALgCIADAAIADADQAAAAAAABQgBAAAAAAQAAABgBAAQgBABAAAAQgGACgEAAIgEAAgABbAyQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgCIAFgCIAAgFQABgCADgCIADgDIACgGQACgDAFAAQAKgBASABQARgBAKgFIACAAIACgDQAKgFADgEQAHgGgCgIIgBgFIgBgGIABgMQAAgFABgDIAFgEIALgHIALgGIAIgCIAGgFQAKgJANgEIAUgGIACACQgDAGgIABIgNAEQgGABgJAHQgNAKgEABIgGABIgGAEIgGAFIgFACQgEADAAAIIAAAJIADANIgCAHIgCAFIgNAKIABABQgFAFgGACQgKAEgaABIgRAAIgFABQgDACgBADIgEAIQgCAFgDACIgEABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAjLgOQgBgHACgDIAEgDQAHgFADgFIAFgGIAHgGQAGgGADgHQACgGgBgDQgBgGgEgBIgDgCIABgCQAFgCADADQADACABAGQABAJgDAFQgBAFgIAJQgFAFgDAAQgIAMgKAIQACAEgEADgAj8hRQgJAAgFgEIgFgHIgDgIQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAIAFAIQADAFACABQAEADAKgBQARgBAFgBQAHgDAMgIQANgGAIADQAGABAHAIQADADAAADQAAAFgDAAIgDgBQAEgEgHgEQgGgDgBgDIgPABQgCACgFADQgTALgVAAIgFAAgABZhoQgDAAgCgCQADgDAHAAQAIAAACgDQABgDAAgEIAAgJQABgGAJgHQADgGAHgCQAFgCACADIABgCIAEgBQAJgBALgIQANgJAGgGIAFgFQACgCAFgCQANgGANAFQAAADgFAAQgIAAgJADQgGABgDADIgEAGIgHAGIgMAIQgSAMgKgDIAAgBQgGACgEAFQgEAGgDAAIgDAFQgCACAAAHIgBAJQgCAFgGACIgGAAIgGAAgAh6hyQgEgBgBgCIAAgGIgDgGQgEgEADgFIADgGQACgEgDgIQgCgEgGgFQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIADAAIAJAIQACACAAAHQAAAHgCADIgDAFQAAACADAFQADAGgBACQAQADANAAQAHAAADACQgBADgFAAIgJAAQgLAAgNgCg");
	this.shape_4.setTransform(178.925,77.5702);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#30260D").s().p("ABGC/IgGgBIgHABIgKAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgCAEgBIAKgBIAJgBIAEABIAHgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAEgBQAJAAAMgNIAEgEIAGgEIAMgSQABgEAAgHQABgHgBgFQgEgMACgDQABgDAEgDIAGgEIAEgEIAFgBIADgDQAEgEAFgCQANgGAPgGQAAABAAAAQABAAAAABQAAAAAAABQAAAAgBABIgDADQgMAEgGAEIgFADIgGACIgEAFIgGADQgFACgFAFQgEADAAADIACAEQACACAAAFIAAAOIgBAHIgEAGIgIAOIgUASIgKAGIgCABIgDADQgGACgEAAIgEAAgABbA1QAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIACgCIAFgCIAAgFQABgCADgCIADgDIACgGQACgDAFAAQAKgBASABQARgBAKgFIACAAIACgDQAKgFADgEQAHgHgCgHIgBgFIgBgGIABgMQAAgFABgDIAFgEIALgHIALgGIAIgCIAGgFQAKgJANgEIAUgGIACACQgDAGgIABIgNAEQgGABgJAHQgNAKgEABIgGABIgGAEIgGAFIgFACQgEADAAAIIAAAJIADANIgCAHIgCAFIgNAKIABABQgFAFgGACQgKAEgaABIgRAAIgFABQgDACgBADIgEAIQgCAFgDACIgEABQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAjLgLQgBgHACgDIAEgDQAHgFADgFIAFgGIAHgGQAGgGADgHQACgGgBgDQgBgGgEgBIgDgCIABgCQAFgCADADQADACABAGQABAJgDAFQgBAFgIAJQgFAFgDAAQgIAMgKAIQACAEgEADgAj8hOQgJAAgFgEIgFgHIgDgIQgBgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAIAFAIQADAFACABQAEADAKgBQARgBAFgBQAHgDAMgIQANgGAIADQAGABAHAIQADADAAADQAAAFgDAAIgDgBQAEgEgHgEQgGgDgBgDIgPABQgCACgFADQgTALgVAAIgFAAgABZhlQgDAAgCgCQADgDAHAAQAIAAACgDQABgDAAgEIAAgJQABgGAJgHQADgGAHgCQAFgDACAEIABgCIAEgBQAJgBALgIQANgJAGgGIAFgFQACgCAFgCQANgGANAFQAAADgFAAQgIAAgJADQgGABgDADIgEAGIgHAGIgMAIQgSAMgKgDIAAgBQgGACgEAFQgEAGgDAAIgDAFQgCACAAAHIgBAJQgCAFgGACIgGAAIgGAAgAh6hvQgEgBgBgCIAAgGIgDgGQgEgEADgFIADgGQACgEgDgIIgCgDIgBAAQgCgBgCgDQgLgMgRAAIgXAEQgLADgMgBQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgBgEIgFgEQgEgEADgKIACABIABACIABAFIAFAFQADADAAACQASAAAPgEQANgDAHABQAIACAIAGIAGAGIACAAIAJAIQACACAAAHQAAAHgCADIgDAFQAAACADAFQADAGgBACQAQADANAAQAHAAADACQgBADgFAAIgJAAQgLAAgNgCg");
	this.shape_5.setTransform(178.925,77.281);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#30260D").s().p("ABLC/IgGgBIgHABIgKAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgCAFgBIAJgBIAJgBIAEABIAHgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgBQAJAAAMgNIAEgEIAGgEIAMgSQABgEAAgHQABgHgBgFQgEgMACgDQABgDAEgDIAGgEIAFgEIAEgBIAEgDQAEgEAEgCQANgGAPgGQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgEADQgLAEgHAEIgFADIgGACIgEAFIgGADQgFACgFAFQgEADABADIACAEQABACAAAFIAAAOIgBAHIgEAGIgIAOIgUASIgKAGIgCABIgDADQgGACgEAAIgEAAgABgA1QAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIACgCIAFgCIAAgFQABgCADgCIAEgDIABgGQACgDAGAAQAJgBATABQAQgBAKgFIACAAIACgDQAKgFAEgEQAHgHgDgHIgBgFIgBgGIABgMQAAgFABgDIAFgEIALgHIALgGIAIgCIAHgFQAKgJANgEIATgGIADACQgEAGgHABIgOAEQgGABgIAHQgNAKgFABIgGABIgGAEIgGAFIgFACQgEADABAIIAAAJIACANIgBAHIgDAFIgNAKIABABQgFAFgGACQgKAEgaABIgRAAIgFABQgDACgBADIgEAIQgCAFgDACIgEABQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAgAjxAWIgEgCIgSgKIgHgDIgGgGQgDgEgBgDIgBgMIABgJIAEgGIACgFQABgBABAAQAAAAABgBQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIgEADQgDAEgBALIABAJQACAEADADQAEADANAGQAMAGAEAFQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAIgCAAgAjFgLQgBgHABgDIAEgDQAHgFADgFIAFgGIAHgGQAGgGADgHQACgGAAgDQgBgGgFgBIgDgCIACgCQAEgCAEADQACACABAGQABAJgDAFQgBAFgIAJQgFAFgDAAQgIAMgKAIQACAEgEADgABvgsQAAgBAAAAQAAgBAAAAQAAgBABAAQABgBABAAIAVgHIANgGQAVgJALgUQgIgBgGgDQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQACgDAEACIAHADQAHACAAADQACAEgGAGIgJAKIgPAMQgJAHgLADQgMAEgJAAIgEAAgAj3hOQgJAAgEgEIgGgHIgDgIQgBgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAIAFAIQADAFACABQAFADAJgBQASgBAEgBQAHgDAMgIQANgGAIADQAGABAHAIQADADAAADQAAAFgDAAIgCgBQADgEgHgEQgGgDAAgDIgQABQgBACgGADQgSALgWAAIgFAAgABehlQgDAAgBgCQACgDAIAAQAHAAACgDQABgDAAgEIAAgJQABgGAJgHQADgGAHgCQAGgDABAEIABgCIAEgBQAKgBALgIQANgJAFgGIAFgFQACgCAFgCQANgGANAFQAAADgFAAQgIAAgIADQgHABgDADIgEAGIgHAGIgMAIQgSAMgKgDIAAgBQgGACgDAFQgFAGgDAAIgDAFQgCACABAHIgCAJQgCAFgGACIgGAAIgGAAgAh0hvQgFgBgBgCIAAgGIgDgGQgDgEACgFIADgGQADgEgEgIIgCgDIAAAAQgDgBgCgDQgLgMgRAAIgXAEQgLADgMgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAIgBgEIgFgEQgEgEADgKIADABIABACIABAFIAEAFQADADAAACQASAAAQgEQAMgDAIABQAHACAJAGIAGAGIABAAIAJAIQADACAAAHQAAAHgDADIgDAFQAAACADAFQAEAGgCACQAQADAOAAQAGAAADACQgBADgFAAIgJAAQgLAAgMgCg");
	this.shape_6.setTransform(178.4,77.281);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#30260D").s().p("ABtC/IgGgBIgHABIgKAAQgBAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgCAFgBIAJgBIAJgBIAEABIAHgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIADgBQAJAAAMgNIAEgEIAGgEIAMgSQABgEAAgHQABgHgBgFQgEgMACgDQABgDAEgDIAGgEIAFgEIAEgBIAEgDQAEgEAEgCQANgGAPgGQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgEADQgLAEgHAEIgFADIgGACIgEAFIgGADQgFACgFAFQgEADABADIACAEQABACAAAFIAAAOIgBAHIgEAGIgIAOIgUASIgKAGIgCABIgDADQgGACgEAAIgEAAgACCA1QAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIACgCIAFgCIAAgFQABgCADgCIAEgDIABgGQACgDAGAAQAJgBATABQAQgBALgFIABAAIACgDQAKgFAEgEQAHgHgDgHIgBgFIgBgGIABgMQAAgFABgDIAFgEIALgHIALgGIAIgCIAHgFQAKgJANgEIATgGIADACQgEAGgHABIgOAEQgGABgIAHQgNAKgFABIgGABIgGAEIgGAFIgFACQgEADABAIIAAAJIACANIgBAHIgDAFIgNAKIABABQgFAFgGACQgKAEgaABIgRAAIgFABQgDACgBADIgEAIQgCAFgDACIgEABQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAgAjPAWIgEgCIgSgKIgHgDIgGgGQgDgEgBgDIgBgMIABgJIACgCIgDgBIAAgIQABgGgCgCQgCgDgDgBQgEgCgEAAIgIAAQgIACgPgBQgEAAgBgCIgEgFIgFgCQgFgBgBgGQgCgLAAgNQgBgOAIgFQABACgBAHQgFATAHARQADgBAEAEQAEAEACABQADABAEgBIAdgCIACAEQAIABAEAJQACAEAAAEIAAgBQABgBABAAQAAAAABgBQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIgEADQgDAEgBALIABAJQACAEADADQAEADANAGQAMAGAEAFQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAIgCAAgAijgLQgBgHABgDIAEgDQAHgFADgFIAFgGIAHgGQAGgGADgHQACgGAAgDQgBgGgFgBIgDgCIACgCQAEgCAEADQACACABAGQABAJgDAFQgBAFgIAJQgFAFgDAAQgIAMgKAIQACAEgEADgACRgsQAAgBAAAAQAAgBAAAAQAAgBABAAQABgBABAAIAVgHIANgGQAVgJALgUQgIgBgGgDQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQACgDAEACIAHADQAHACAAADQACAEgGAGIgJAKIgPAMQgJAHgLADQgMAEgJAAIgEAAgAjVhOQgJAAgEgEIgGgHIgDgIQgBgBAAAAQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAIAFAIQADAFACABQAFADAJgBQASgBAEgBQAHgDAMgIQANgGAIADQAGABAHAIQADADAAADQAAAFgDAAIgCgBQADgEgHgEQgGgDAAgDIgQABQgBACgGADQgSALgWAAIgFAAgACAhlQgDAAgBgCQACgDAIAAQAHAAACgDQABgDAAgEIAAgJQABgGAJgHQADgGAHgCQAGgDABAEIABgCIAEgBQAKgBALgIQANgJAFgGIAFgFQACgCAFgCQANgGANAFQAAADgFAAQgIAAgIADQgHABgDADIgEAGIgHAGIgMAIQgSAMgKgDIAAgBQgGACgDAFQgFAGgDAAIgDAFQgCACABAHIgCAJQgCAFgGACIgGAAIgGAAgAhShvQgFgBgBgCIAAgGIgDgGQgDgEACgFIADgGQADgEgEgIIgCgDIAAAAQgDgBgCgDQgLgMgRAAIgXAEQgLADgMgBQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAIgBgEIgFgEQgEgEADgKIADABIABACIABAFIAEAFQADADAAACQASAAAQgEQAMgDAIABQAHACAJAGIAGAGIABAAIAJAIQADACAAAHQAAAHgDADIgDAFQAAACADAFQAEAGgCACQAQADAOAAQAGAAADACQgBADgFAAIgJAAQgLAAgMgCg");
	this.shape_7.setTransform(175,77.281);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#30260D").s().p("ABtDBIgGgBIgHABIgKAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAgBAFgBIAJgCIAJAAIAEABIAHgBQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBABAAIADAAQAJgBAMgMIAEgFIAGgEIAMgSQABgDAAgIQABgGgBgGQgEgLACgEQABgCAEgDIAGgEIAFgEIAEgCIAEgDQAEgEAEgBQANgHAPgFQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgEADQgLAFgHADIgFAEIgGACIgEAEIgGAEQgFACgFAFQgEADABADIACADQABACAAAFIAAAOIgBAIIgEAGIgIANIgUASIgKAHIgCABIgDADQgGABgEAAIgEAAgACCA3QAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIACgCIAFgCIAAgEQABgCADgCIAEgEIABgFQACgDAGAAQAJgBATAAQAQAAALgFIABgBIACgCQAKgGAEgEQAHgHgDgHIgBgEIgBgGIABgMQAAgGABgCIAFgEIALgIIALgFIAIgDIAHgEQAKgJANgEIATgGIADABQgEAGgHACIgOADQgGACgIAHQgNAJgFABIgGABIgGAFIgGAEIgFADQgEADABAHIAAAKIACAMIgBAHIgDAGIgNAJIABACQgFAEgGACQgKAFgaABIgRAAIgFABQgDABgBAEIgEAIQgCAEgDACIgEACQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBAAAAgAjPAYIgEgCIgSgKIgHgDIgGgGQgDgEgBgDIgBgMIABgIIACgDIgDgBIAAgIQABgFgCgCQgCgDgDgBQgEgDgEAAIgIABQgIABgPgBQgEAAgBgBIgEgGIgFgBQgFgCgBgGQgCgLAAgMQgBgPAIgEQABABgBAIQgFASAHARQADAAAEADQAEAFACAAQADACAEgBIAdgDIACAEQAIACAEAIQACAEAAAFIAAgBQABgBABgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABQAAAAAAABIgEAEQgDADgBAMIABAJQACAEADABQAEAEANAHQAMAFAEAGQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgCAAgAijgJQgBgGABgDIAEgEQAHgFADgEIAFgHIAHgGQAGgGADgGQACgGAAgEQgBgFgFgCIgDgCIACgCQAEgBAEACQACADABAGQABAIgDAGQgBAEgIAJQgFAFgDABQgIAMgKAHQACAFgEADgACRgqQAAAAAAgBQAAAAAAgBQAAAAABgBQABAAABgBIAVgGIANgGQAVgJALgUQgIgBgGgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQACgDAEADIAHACQAHACAAAEQACAEgGAGIgJAJIgPAMQgJAHgLAEQgMADgJAAIgEAAgAjVhLQgJAAgEgEIgGgIIgDgHQgBgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAABQABAAAAABIAFAHQADAFACACQAFADAJgBQASgBAEgCQAHgCAMgIQANgHAIADQAGACAHAIQADADAAACQAAAFgDABIgCgCQADgEgHgDQgGgEAAgCIgQAAQgBADgGADQgSALgWAAIgFAAgACAhjQgDAAgBgCQACgCAIgBQAHAAACgDQABgCAAgFIAAgIQABgHAJgHQADgFAHgDQAGgCABADIABgBIAEgBQAKgCALgIQANgJAFgGIAFgFQACgCAFgCQANgFANAFQAAADgFAAQgIAAgIACQgHABgDADIgEAHIgHAFIgMAJQgSALgKgCIAAgCQgGADgDAFQgFAFgDABIgDAEQgCADABAGIgCAKQgCAFgGABIgGAAIgGAAgAhShtQgFgBgBgBIAAgHIgDgFQgDgEACgFIADgGQADgFgEgHIgCgEIAAAAQgDAAgCgDQgLgNgRAAIgXAFQgLADgMgCQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAgBgBIgBgEIgFgEQgEgEADgJIADAAIABACIABAGIAEAFQADACAAACQASAAAQgDQAMgDAIABQAHABAJAHIAGAFIABAAIAJAIQADADAAAGQAAAIgDADIgDAEQAAACADAGQAEAFgCACQAQAEAOAAQAGAAADACQgBACgFAAIgJAAQgLAAgMgCgABeiXIAOgGIgCgMQgBgDABgCIAHgCIAIgFQAGgEAKgCIAWgFQAEgBABACQAAABAAAAQABABgBAAQAAABgBAAQAAABgBABIgGAAQgDAAgEACIgHADQgNABgFADIgGAFQgEADgEAAIADAJQABAFgCADQgBABgGADIgDAAQgGAAgCgDg");
	this.shape_8.setTransform(175,77.0476);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#30260D").s().p("ABtDCIgGgBIgHABIgKAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAgBAEgBIAKgCIAJAAIAEABIAHgBQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIAEAAQAJgBAMgMIAEgFIAGgEIAMgSQABgDAAgIQABgGgBgGQgEgLACgEQABgCAEgDIAGgEIAEgEIAFgCIADgDQAEgEAFgBQANgHAPgFQAAAAAAAAQABABAAAAQAAABAAAAQAAABgBAAIgDADQgMAFgGADIgFAEIgGACIgEAEIgGAEQgFACgFAFQgEADAAADIACADQACACAAAFIAAAOIgBAIIgEAGIgIANIgUASIgKAHIgCABIgDADQgGABgEAAIgEAAgACCA4QAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIACgCIAFgCIAAgEQABgCADgCIADgEIACgFQACgDAFAAQAKgBASAAQARAAAKgFIACgBIACgCQAKgGADgEQAHgHgCgHIgBgEIgBgGIABgMQAAgGABgCIAFgEIALgIIALgFIAIgDIAGgEQAKgJANgEIAUgGIACABQgDAGgIACIgNADQgGACgJAHQgNAJgEABIgGABIgGAFIgGAEIgFADQgEADAAAHIAAAKIADAMIgCAHIgCAGIgNAJIABACQgFAEgGACQgKAFgaABIgRAAIgFABQgDABgBAEIgEAIQgCAEgDACIgEACQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAjPAZIgEgCIgSgKIgHgDIgGgGQgEgEAAgDIgBgMIABgIIABgDIgCgBIAAgIQABgFgCgCQgCgDgEgBQgEgDgDAAIgJABQgHABgPgBQgEAAgBgBIgEgGIgGgBQgEgCgBgGQgDgLAAgMQAAgPAHgEQACABgBAIQgGASAIARQADAAADADQAFAFACAAQADACAEgBIAdgDIABAEQAJACAEAIQACAFAAAEIAAgBQABgBAAAAQABgBAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABIgDAEQgDADgBAMIABAJQABADAEACQAEAEANAHQAMAFAEAGQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgBAAgAikgIQgBgGACgDIAEgEQAHgFADgEIAFgHIAHgGQAGgGADgGQACgGgBgEQgBgFgEgCIgDgCIABgCQAFgBADACQADADABAGQABAIgDAGQgBAEgIAJQgFAFgDABQgIAMgKAHQACAFgEADgACRgpQAAAAAAgBQgBAAABgBQAAAAABgBQABAAABgBIAUgGIAOgGQAUgJALgUQgIgBgFgDQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQABgDAFADIAHACQAGACABAEQACAEgGAGIgKAJIgOAMQgJAHgMAEQgLADgJAAIgEAAgAjVhKQgJAAgFgEIgFgIIgDgHQgBgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAABABAAQAAAAABABIAFAHQADAFACACQAEADAKgBQARgBAFgCQAHgCAMgIQANgHAIADQAGACAHAIQADADAAACQAAAFgDABIgDgCQAEgEgHgDQgGgEgBgCIgPAAQgCADgFADQgSALgWAAIgFAAgACAhiQgDAAgCgCQADgCAHgBQAIAAACgDQABgCAAgFIAAgIQABgHAJgHQADgFAHgDQAGgCABADIABgBIAEgBQAJgCALgIQANgJAGgGIAFgFIAFgDIgLgCQgTAAgIgEIgKgFIgFAAQgEAAgBgDQAFgEAHADIAMAFQAFABAJABIANABQAFAAAHADIADABQAKgCAKAEQAAADgFAAIgBAAIAQAEQAUAGAMAFQAJAFAFAFQAGAIAAALQABACgCADIgCABIgCgBQACgLgGgIQgEgFgGgDIg9gVIgEABQgGABgDADIgEAHIgHAFIgMAJQgSALgKgCIAAgCQgGADgEAFQgEAFgDABIgDAEQgCADAAAGIgBAKQgCAFgGABIgGAAIgGAAgAhThsQgEgBgBgBIAAgHIgDgFQgEgEADgFIADgGQACgFgDgHIgCgEIgBAAQgCAAgCgDQgLgNgRAAIgXAFQgLADgMgCQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBIgBgEIgFgEQgEgEADgJIACAAIABACIABAGIAFAFQADACAAACQASAAAPgDQANgDAHABQAIABAIAHIAHAFIABAAIAJAIQACADAAAGQAAAIgCADIgDAEQAAACADAGQADAFgBACQAQAEANAAQAHAAADACQgBACgFAAIgJABQgLAAgNgDgABeiWIAOgGIgDgMQgBgDACgCIAHgCIAIgFQAGgEAKgCIAVgFQAEgBACACQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBABIgGAAQgDAAgEACIgIADQgMABgGADIgGAFQgDADgEAAIADAJQABAFgCADQgBABgGADIgEAAQgFAAgCgDg");
	this.shape_9.setTransform(175.0167,76.9293);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#30260D").s().p("ABODCIgGgBIgIABIgKAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQABgBAEgBIAJgCIAJAAIAEABIAHgBQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBIAEAAQAJgBALgMIAFgFIAFgEIAMgSQACgDAAgIQABgGgCgGQgDgLABgEQABgCAEgDIAGgEIAFgEIAEgCIAEgDQAEgEAEgBQANgHAPgFQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgDADQgMAFgGADIgGAEIgFACIgFAEIgGAEQgFACgFAFQgEADABADIACADQABACAAAFIAAAOIgBAIIgEAGIgIANIgTASIgKAHIgDABIgDADQgFABgFAAIgDAAgABiA4QAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABgCIAFgCIABgEQAAgCADgCIAEgEIABgFQACgDAGAAQAJgBATAAQARAAAKgFIABgBIACgCQAKgGAEgEQAHgHgCgHIgCgEIAAgGIAAgMQAAgGACgCIAEgEIALgIIALgFIAJgDIAGgEQAKgJANgEIALgEIAGgGQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIABAAIADABQgDAFgFABQgGAJgEALQgEAMACAGQACAGAFAEQAOADAOgHQAGgCAEgGIAHgIQAJgLAUgGIACACIgLAIIgMAGQgGAFgCAFIgCAFQgCADgFABIgRAHQgJADgIgBQgHgBAAgGQgEACgCgEIgBgHQgBgIABgHQACgHAEgIIADgGIgIACQgHACgIAHQgNAJgFABIgFABIgHAFIgGAEIgFADQgDADAAAHIAAAKIADAMIgCAHIgDAGIgNAJIABACQgFAEgGACQgJAFgaABIgRAAIgGABQgCABgBAEIgFAIQgCAEgCACIgEACQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgAjvAZIgEgCIgSgKIgHgDIgFgGQgEgEgBgDIAAgMIAAgIIACgDIgCgBIAAgIQAAgFgBgCQgDgDgDgBQgEgDgEAAIgIABQgIABgOgBQgEAAgCgBIgDgGIgGgBQgEgCgBgGQgDgLAAgMQAAgPAHgEQABABgBAIQgFASAHARQADAAAEADQAEAFACAAQAEACAEgBIAcgDIACAEQAJACAEAIQABAFAAAEIABgBQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgEAEQgDADgBAMIABAJQACADADACQAFAEAMAHQAMAFAFAGQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCAAgAjDgIQgBgGABgDIAEgEQAHgFADgEIAFgHIAHgGQAGgGADgGQACgGAAgEQgBgFgFgCIgDgCIACgCQAEgBAEACQACADABAGQABAIgCAGQgCAEgIAJQgFAFgDABQgIAMgJAHQABAFgEADgABygpQgBAAAAgBQAAAAAAgBQAAAAABgBQABAAABgBIAVgGIAOgGQAUgJALgUQgIgBgFgDQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQABgDAEADIAIACQAGACABAEQABAEgGAGIgJAJIgOAMQgKAHgLAEQgMADgIAAIgEAAgAj1hKQgJAAgEgEIgFgIIgEgHQAAgBgBgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABABAAAAQABAAAAABIAFAHQADAFADACQAEADAJgBQASgBAFgCQAGgCANgIQAMgHAIADQAGACAHAIQADADABACQAAAFgDABIgDgCQADgEgHgDQgFgEgBgCIgQAAQgBADgFADQgTALgWAAIgFAAgABhhiQgEAAgBgCQACgCAIgBQAHAAACgDQACgCAAgFIAAgIQAAgHAJgHQAEgFAGgDQAGgCABADIABgBIAEgBQAKgCALgIQANgJAFgGIAFgFIAFgDIgKgCQgTAAgJgEIgJgFIgGAAQgDAAgBgDQAEgEAIADIAMAFQAEABAJABIAOABQAEAAAHADIADABQAKgCALAEQAAADgGAAIAAAAIAPAEQAVAGALAFQAKAFAFAFQAGAIAAALQABACgCADIgCABIgCgBQABgLgGgIQgDgFgGgDIg9gVIgEABQgHABgDADIgEAHIgGAFIgNAJQgSALgJgCIgBgCQgGADgDAFQgFAFgDABIgDAEQgCADABAGIgBAKQgDAFgGABIgFAAIgGAAgAhyhsQgEgBgBgBIgBgHIgDgFQgDgEACgFIADgGQADgFgEgHIgCgEIAAAAQgCAAgCgDQgLgNgRAAIgXAFQgMADgMgCQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgCgEIgFgEQgEgEADgJIADAAIABACIABAGIAEAFQAEACgBACQASAAAQgDQANgDAHABQAHABAJAHIAGAFIACAAIAJAIQACADAAAGQAAAIgCADIgDAEQgBACAEAGQADAFgCACQARAEANAAQAHAAACACQgBACgEAAIgKABQgLAAgMgDgAA/iWIANgGIgCgMQgBgDABgCIAHgCIAJgFQAFgEAKgCIAWgFQAEgBABACQABABAAAAQAAABAAAAQgBABAAAAQgBABgBABIgFAAQgDAAgFACIgHADQgNABgFADIgGAFQgEADgDAAIACAJQABAFgCADQgBABgGADIgDAAQgGAAgBgDg");
	this.shape_10.setTransform(178.175,76.9293);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#30260D").s().p("ABODCIgGgBIgIABIgKAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQABgBAEgBIAJgCIAJAAIAEABIAHgBQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABgBIAEAAQAJgBALgMIAFgFIAFgEIAMgSQACgDAAgIQABgGgCgGQgDgLABgEQABgCAEgDIAGgEIAFgEIAEgCIAEgDQAEgEAEgBQANgHAPgFQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgDADQgMAFgGADIgGAEIgFACIgFAEIgGAEQgFACgFAFQgEADABADIACADQABACAAAFIAAAOIgBAIIgEAGIgIANIgTASIgKAHIgDABIgDADQgFABgFAAIgDAAgABiA4QAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABgCIAFgCIABgEQAAgCADgCIAEgEIABgFQACgDAGAAQAJgBATAAQARAAAKgFIABgBIACgCQAKgGAEgEQAHgHgCgHIgCgEIAAgGIAAgMQAAgGACgCIAEgEIALgIIALgFIAJgDIAGgEQAKgJANgEIALgEIAGgGQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABIABAAIADABQgDAFgFABQgGAJgEALQgEAMACAGQACAGAFAEQAOADAOgHQAGgCAEgGIAHgIQAJgLAUgGIACACIgLAIIgMAGQgGAFgCAFIgCAFQgCADgFABIgRAHQgJADgIgBQgHgBAAgGQgEACgCgEIgBgHQgBgIABgHQACgHAEgIIADgGIgIACQgHACgIAHQgNAJgFABIgFABIgHAFIgGAEIgFADQgDADAAAHIAAAKIADAMIgCAHIgDAGIgNAJIABACQgFAEgGACQgJAFgaABIgRAAIgGABQgCABgBAEIgFAIQgCAEgCACIgEACQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBgAjvAZIgEgCIgSgKIgHgDIgFgGQgEgEgBgDIAAgMIAAgIIACgDIgCgBIAAgIQAAgFgBgCQgDgDgDgBQgEgDgEAAIgIABQgIABgOgBQgEAAgCgBIgDgGIgGgBQgEgCgBgGQgDgLAAgMQAAgPAHgEQABABgBAIQgFASAHARQADAAAEADQAEAFACAAQAEACAEgBIAcgDIACAEQAJACAEAIQABAFAAAEIABgBQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIgEAEQgDADgBAMIABAJQACADADACQAFAEAMAHQAMAFAFAGQgBAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCAAgAjDgIQgBgGABgDIAEgEQAHgFADgEIAFgHIAHgGQAGgGADgGQACgGAAgEQgBgFgFgCIgDgCIACgCQAEgBAEACQACADABAGQABAIgCAGQgCAEgIAJQgFAFgDABQgIAMgJAHQABAFgEADgABygpQgBAAAAgBQAAAAAAgBQAAAAABgBQABAAABgBIAVgGIAOgGQAUgJALgUQgIgBgFgDQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQABgDAEADIAIACQAGACABAEQABAEgGAGIgJAJIgOAMQgKAHgLAEQgMADgIAAIgEAAgAj1hKQgJAAgEgEIgFgIIgEgHQAAgBgBgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABABAAAAQABAAAAABIAFAHQADAFADACQAEADAJgBQASgBAFgCQAGgCANgIQAMgHAIADQAGACAHAIQADADABACQAAAFgDABIgDgCQADgEgHgDQgFgEgBgCIgQAAQgBADgFADQgTALgWAAIgFAAgAjohTQgBAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBIAEgCQAFgDAHgGIAIgJQALgKAAgHQAAgGgEgFQgCgCgEgCIgHgEIgGgEIgGgBIgXgBQgEAAgCgDQACgCAGAAIAZAAIAGABIAFAEIAIAGQAGAEACADQAFAHgCAKQgDAJgIAGIgFAFIgFAGIgFAGIgGACIgFADIgCABIgCgCgABhhiQgEAAgBgCQACgCAIgBQAHAAACgDQACgCAAgFIAAgIQAAgHAJgHQAEgFAGgDQAGgCABADIABgBIAEgBQAKgCALgIQANgJAFgGIAFgFIAFgDIgKgCQgTAAgJgEIgJgFIgGAAQgDAAgBgDQAEgEAIADIAMAFQAEABAJABIAOABQAEAAAHADIADABQAKgCALAEQAAADgGAAIAAAAIAPAEQAVAGALAFQAKAFAFAFQAGAIAAALQABACgCADIgCABIgCgBQABgLgGgIQgDgFgGgDIg9gVIgEABQgHABgDADIgEAHIgGAFIgNAJQgSALgJgCIgBgCQgGADgDAFQgFAFgDABIgDAEQgCADABAGIgBAKQgDAFgGABIgFAAIgGAAgAhyhsQgEgBgBgBIgBgHIgDgFQgDgEACgFIADgGQADgFgEgHIgCgEIAAAAQgCAAgCgDQgLgNgRAAIgXAFQgMADgMgCQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgCgEIgFgEQgEgEADgJIADAAIABACIABAGIAEAFQAEACgBACQASAAAQgDQANgDAHABQAHABAJAHIAGAFIACAAIAJAIQACADAAAGQAAAIgCADIgDAEQgBACAEAGQADAFgCACQARAEANAAQAHAAACACQgBACgEAAIgKABQgLAAgMgDgAA/iWIANgGIgCgMQgBgDABgCIAHgCIAJgFQAFgEAKgCIAWgFQAEgBABACQABABAAAAQAAABAAAAQgBABAAAAQgBABgBABIgFAAQgDAAgFACIgHADQgNABgFADIgGAFQgEADgDAAIACAJQABAFgCADQgBABgGADIgDAAQgGAAgBgDg");
	this.shape_11.setTransform(178.175,76.9293);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},65).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},3).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},3).to({state:[{t:this.shape_9}]},6).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},4).to({state:[{t:this.shape_11}]},2).wait(81));

	// sun
	this.instance_8 = new lib.sun("synched",0);
	this.instance_8.setTransform(375.35,47.35,1,1,0,0,0,114.4,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(183));

	// Layer_8
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#47370C").s().p("AAAAQIgCgCIgDgFIAAgUIABgEQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIABAAIACAAQABABABAEIAAAJIABAIQADAGgBACQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIgCAAIgBgBg");
	this.shape_12.setTransform(183.0292,152.27);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3D2A11").s().p("ABjAkIgBgFQAAgIgDgHQgBgDgCgBQgCgBgEABQgFAAgCgBQgBgDABgDQAAAAAAAAQABgBAAAAQABgBAAAAQABAAABAAQALgEAHAHIAEAJQADAJAAAHIgBAGQAAAAgBABQAAAAAAAAQgBABgBAAQAAAAgBAAQgBAAAAAAQgBAAgBgBQAAAAAAgBQgBAAAAgBgAhqgMQgCgCACgDIAEgEQAHgIADgFIADgDIAEgBIAUAAQAFAAACACQABAEgDACIgGABIgPABIgDAAIgIAKIgGAGIgEABIgEgBg");
	this.shape_13.setTransform(171.35,157.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#47370C").s().p("AjLBbIgFgFIgDgDIgBgDQAAgIABgDIADgEIACgGIAGgCQABAAAAAAQABAAAAABQABAAAAAAQAAABABABQAAAAAAABQAAAAAAABQAAAAAAABQgBABAAAAIgCADIgBAEIgBADQgBAAAAABQAAAAABAAQAAABAAAAQAAABABABIAGAJIABAEQAAADgFAAQgCAAgDgDgABfgFIgCgDIgDgEIAAgWIABgDQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABAAIADABQABABABADIAAAJIABAJQADAGgBACQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgCAAIgCAAgADNgxIgFgBQgBAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgBgEQAAgIABgCIABgDIABgWQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAQADAAACAEIAAAWIgDAIIAHABQAEADgBADQgBADgEAAIgDAAg");
	this.shape_14.setTransform(173.4455,154.5472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},88).to({state:[{t:this.shape_13},{t:this.shape_12}]},9).to({state:[{t:this.shape_14},{t:this.shape_13}]},12).wait(74));

	// Layer_7
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AACATQgDgBgBgDIgBgKIgCgFIgBgKIABgFIADgDQACgBACAEIABAGIAAAHIACAFQABADAAAFIABAEQgBAEgDAAIgBAAg");
	this.shape_15.setTransform(169.125,140.1136);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHAfQgDgDAEgGIAGgJQAAgCAAgEIAAgDIgBgCIAAgIIgDgHIAAgKIAAgEIADgDQADgCACAEIAAAHIAAAHIADAGIAAAFIABACQABABAAAGIAAAHIgDAIIgFAIIgDADIgBAAIgEgBg");
	this.shape_16.setTransform(168.9857,141.3858);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgjA5QgDgCABgEQAAgDAEgDIAdgjQAHgKAEgBIAMAAIADAAIAAgBIAGgJQABgDAAgEIAAgCIgCgCIAAgKIgDgGIAAgKIAAgFIADgDQAEgBACAEIAAAGIAAAHIADAGIABAGIAAABQABACAAAHIAAAGIgDAIIgFAHIgEADIgDAAIgDABQgGAAgDABQgEABgEAGIgfAnQgDADgCAAIgCAAg");
	this.shape_17.setTransform(166.0639,143.9145);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhWA5QgDgCABgEQAAgDAEgDIAdgjQAIgKAEgBIAMAAIACAAIABgBIAGgJQABgDAAgEIAAgCIgCgCIAAgKIgDgGIAAgKIAAgFIADgDQAEgBACAEIAAAGIAAAHIADAGIAAAGIABABQABACAAAHIAAAGIgDAIIgFAHIgEADIgDAAIgDABQgGAAgDABQgEABgEAGIggAnQgDADgDAAIgBAAgABTAHQgDgCAAgGIgCgKIgDgGQgDgDgIgBIgOgDQgGgBgBgCQgDgCAAgGQgBgGgCgCIgEgDQgCgFAEgCQAEgCAEADQACACACAFIACAIQADADAFABQAGACAMACQAGADACADQAFAGABAPQABADgCADQgBADgCAAIgCAAg");
	this.shape_18.setTransform(171.1806,143.9145);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhZBDQgEgCABgEQABgCADgEIAegjQAIgKADgBIANgBIACAAIABgBIAGgIQABgCgBgEIAAgDIgBgCIgBgJIgCgHIgBgKIABgEIADgDQADgCACAEIABAHIAAAHIACAGIABAFIABACQABABAAAHIAAAHIgDAHIgFAIIgEADIgDAAIgDABQgHgBgDABQgDACgEAGIggAmQgDADgDAAIgBAAgABPARQgDgBAAgHIgCgKIgCgFQgEgEgHgBIgPgDQgFgBgCgCQgCgCgBgFQgBgGgCgCIgEgEQgCgEAFgCQADgCAEADQACACACAFIADAHQADAEAEABQAGACANABQAFADADAEQAFAGABANQABAFgCACQgCAEgCAAIgCgBgAh4ADQgCgCABgDIADgFIAHgJQAFgGADgBQABgDgEgIQgEgJAEgIQAEgGAHgDQADgCADABQABAAABAAQABAAAAAAQABABAAAAQAAABAAAAQACAFgGADIgIAFIgBAEIADAIQAFAKgGAIIgGAFIgHAIIgEAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgBgAByglQgGAAgCgBIgCgDQgMgDgDgEIgDgFIgEgFQgCgDABgEQAEgDAFAEIAFAHIAIAFIAOAGQAFABAAADQABAEgEABIgDABIgCgBg");
	this.shape_19.setTransform(171.5207,142.8783);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ah2BDQgEgCABgEQABgCADgEIAegjQAIgKADgBIANgBIACAAIABgBIAGgIQABgCgBgEIAAgDIgBgCIgBgJIgCgHIgBgKIABgEIADgDQADgCACAEIABAHIAAAHIACAGIABAFIABACQABABAAAHIAAAHIgDAHIgFAIIgEADIgDAAIgDABQgHgBgDABQgDACgEAGIggAmQgDADgDAAIgBAAgACGAwQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgJIAAgJIAFgFQAFgFAAgIQAAgIgFgFQgDgDgIgEQgQgIgJgDQgIgCgDgDQgEgDAAgGIgBAAQgGAAgCgBIgCgDQgMgDgDgEIgDgFIgEgFQgCgDABgEQAEgDAFAEIAFAHIAIAFIAOAGIADABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQADACAAAHQAFgBAPAJIAPAHQAIAEAFAFQAHAIgBAKQAAALgGAJIgEAJIABAIQAAAEgEACIgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBgAAyARQgDgBAAgHIgCgKIgCgFQgEgEgHgBIgPgDQgFgBgCgCQgCgCgBgFQgBgGgCgCIgEgEQgBgEAEgCQADgCAEADQACACACAFIADAHQADAEAEABQAGACANABQAFADADAEQAFAGABANQABAFgCACQgCAEgCAAIgCgBgAiVADQgCgCABgDIADgFIAHgJQAFgGADgBQABgDgEgIQgEgJAEgIQAEgGAHgDQADgCADABQABAAABAAQABAAAAAAQABABAAAAQAAABAAAAQACAFgGADIgIAFIgBAEIADAIQAFAKgGAIIgGAFIgHAIIgEAFQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_20.setTransform(174.4124,142.8783);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AihBTQAAAAgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQABgDACgCIAHgHQAFgGgDgLIgEgJQgDgIAAgJQAAgPAKgUQAFgMAHAAIABgCIAHgJQAFgGAEgBQABgDgFgIQgEgJAFgIQADgFAIgEQADgBADAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQABAEgFADIgIAFIgCAEIADAIQAGALgGAHIgHAGIgGAHIgEAGQgDADgCgBIgDABQgNAaADAOIADANQADAJABAFQABAQgNALQgDADgDAAIgDgCgAhqAyQgDgCABgEQAAgDAEgDIAdgjQAIgKAEgBIAMAAIACAAIABgBIAGgJQABgDAAgEIAAgCIgCgCIAAgKIgDgGIAAgKIAAgFIADgDQAEgBACAEIAAAGIAAAHIADAGIAAAGIABABQABACAAAHIAAAGIgDAIIgFAIIgEADIgDAAIgDAAQgGAAgDABQgEABgEAGIggAnQgDADgDAAIgBAAgACTAfQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgJIAAgJIAEgGQAFgEAAgIQAAgIgFgFQgDgDgIgEQgPgJgKgDQgIgCgCgCQgFgDAAgGIgBAAQgFAAgCgCIgDgCQgLgDgEgFIgCgEIgFgGQgCgDACgDQADgEAFAEIAGAIIAIAFIANAGIADABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQACACAAAIQAGgBAOAJIAPAGQAJAFAEAFQAHAHAAAMQgBAJgFAKIgEAJIAAAHQAAAFgEABIgBABQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAgAA/AAQgDgBAAgHIgCgKIgDgGQgDgDgIgBIgOgDQgGgBgBgCQgDgCAAgGQgBgGgCgCIgEgDQgCgFAEgCQAEgCAEADQACACACAFIACAIQADADAFABQAGACAMACQAGADACADQAFAGABAPQABAEgCADQgBADgCAAIgCgBg");
	this.shape_21.setTransform(173.1767,144.6033);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AihBeQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQABgDACgCIAHgHQAFgGgDgLIgEgJQgDgIAAgJQAAgPAKgUQAFgMAHAAIABgCIAHgJQAFgGAEgBQABgDgFgIQgEgJAFgIQADgFAIgEQADgBADAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQABAEgFADIgIAFIgCAEIADAIQAGALgGAHIgHAGIgGAHIgEAGQgDADgCgBIgDABQgNAaADAOIADANQADAJABAFQABAQgNALQgDADgDAAIgDgCgAhqA9QgDgCABgEQAAgDAEgDIAdgjQAIgLAEgBIAMAAIACAAIABgBIAGgIQABgDAAgEIAAgCIgCgCIAAgKIgDgGIAAgKIAAgFIADgDQAEgBACAEIAAAGIAAAHIADAGIAAAGIABABQABACAAAHIAAAGIgDAIIgFAHIgEADIgDAAIgDABQgGAAgDABQgEABgEAGIggAnQgDADgDAAIgBAAgACTAqQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBgBAAAAIABgJIAAgJIAEgGQAFgFAAgIQAAgHgFgFQgDgDgIgEQgPgJgKgDQgIgCgCgCQgFgDAAgGIgBAAQgFAAgCgCIgDgCQgLgDgEgFIgCgEIgFgGQgCgDACgDQADgEAFAEIAGAIIAIAFIANAGIADABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQACACAAAIQAGgBAOAJIAPAGQAJAFAEAFQAHAHAAALQgBAKgFAKIgEAJIAAAHQAAAFgEABIgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAgAgCAKQgEgUgDgFIgEgGQgDgHABgLIABgFQABAAAAAAQABAAAAgBQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAIABAJQABAEAGANQADAHAAAEIACAHIACAIQAAAGgFAAIAAAAQgDAAgCgHgAA/ALQgDgCAAgHIgCgJIgDgGQgDgDgIgBIgOgDQgGgBgBgCQgDgCAAgGQgBgGgCgCIgEgDQgCgFAEgCQAEgCAEADQACACACAFIACAIQADADAFABQAGACAMACQAGADACADQAFAGABAOQABAEgCADQgBADgCAAIgCAAgAB+g7IgEgHQgCgFgIgEIgagMIgDgCIABgDIADgCQACgBAFACIAQAGQAQAHADAHIADAFQACACAJgCQAIgDABAGQAAAEgGACQgGACgHAAQgFAAgCgCg");
	this.shape_22.setTransform(173.1767,143.5183);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAeBdQgBgDABgCIAGgJIAEgLQACgSACgEQAHgLABgHQAAgFgCgEIgGgIQgEgGACgEIAAAAIgCgIIgDgGQgDgDgIgBIgOgDQgGgBgBgCQgDgCAAgGQgBgGgBgCIgEgDQgCgFAEgCQADgCAEADQACACACAFIACAIQADADAFABQAGACAMACQAGADACADQAFAGABAOIABAEQABADAFAEQADAFAAAMQAAAHgCAEIgDAFQgEAHgDASQgDARgIAHIgFACQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAgAizBeQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQABgDACgCIAHgHQAFgGgDgLIgEgJQgDgIAAgJQAAgPAKgUQAFgMAHAAIABgCIAHgJQAFgGAEgBQABgDgFgIQgEgJAFgIQADgFAIgEQADgBADAAQABAAAAAAQABAAABABQAAAAAAABQABAAAAABQABAEgFADIgIAFIgCAEIADAIQAGALgGAHIgHAGIgGAHIgEAGQgDADgCgBIgDABQgNAaADAOIADANQADAJABAFQABAQgNALQgDACgDAAIgDgBgACYA+QgBAAgBAAQAAgBgBAAQAAAAAAgBQgBgBAAAAQgBgDACgDIAIgHQAHgFAEgOQAFgSgBgXQgCgQgEgHIgHgIQgDgFAAgEIgSACQgBAAAAABQgBAAAAAAQgBgBAAAAQAAAAgBAAIAAgDQgKABgGgBQgEAAgBgCIAAAAQgDgBgCgBIgEgHQgCgFgIgEIgagMIgDgCIABgDIADgCQACgBAFACIAQAGQAQAHADAHIADAFQACACAJgCQAHgDABAFIAOABQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAABQAKABAKARIAIAQQADAHAAAQQAAARgCAJIgGATQgDAHgNAOQgDADgDAAIAAAAgAh8A9QgDgCABgEQAAgDAEgDIAdgjQAIgLAEgBIAMAAIADAAIAAgBIAGgIQABgDAAgEIAAgCIgCgCIAAgKIgDgGIAAgKIAAgFIADgDQAEgBACAEIAAAGIAAAHIADAGIAAAGIABABQABACAAAHIAAAGIgDAIIgFAHIgEADIgDAAIgDABQgGAAgDABQgEABgEAGIggAnQgDADgDAAIgBAAgACBAqQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIABgJIAAgJIAEgGQAFgFAAgIQAAgHgFgFQgDgDgIgEQgPgJgKgDQgIgCgCgCQgFgEAAgFIgBAAQgFAAgCgCIgDgCQgLgDgEgFIgCgEIgFgGQgCgDACgDQADgEAFAEIAGAIIAIAFIANAGIAEABQAAAAAAgBQABAAAAABQABAAAAAAQAAAAABAAQACACAAAIQAGgBAOAJIAPAGQAJAFAEAFQAHAHAAALQgBAKgFAKIgEAJIAAAHQAAAFgEABIgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAgAgUAKQgEgUgDgFIgEgGQgDgHABgLIABgFQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAIABAJQABAEAHANQADAHAAAEIACAHIACAIQAAAGgFAAIAAAAQgEAAgCgHg");
	this.shape_23.setTransform(174.975,143.5333);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhsCAQgCgJABgPIABgKQABgFAEgGIAMgRIAGgHQALgLACgGIAEgKIAFgEIADgEIAEgMQACgJgBgDQgPgBgMgKIgDgCIggAlQgEAEgDgBQgDgCABgEQAAgCAEgEIAcggIgDgBIgIgFIgGgCIgBgBIAAAAQgFgBgCgDQABgDADgCQADgCADAAIAAgsQAAgIABgDQADgHAEADQAEAAAAAFIgCAIQgCAFABAHIABAZQAAAKgDAFIABABIAJADIAFACQAEgFACAAIAMgBIADAAIAAgBIAGgJQABgCAAgEIAAgDIgCgCIAAgJIgDgHIAAgKIAAgEIADgDQAEgCACAEIAAAHIAAAHIADAGIAAAFIABACQABABAAAHIAAAHIgDAIIgFAIIgEADIgDAAIgDABQgGgBgDABIgCABIAEAEQAJAGALAAIAGABQAFADAAAGQAAAFgDAJIgEANQgCAGgDADIgFADIgBAFQgBADgEAGIgOARIgGAHQgFAFgEAIIgDAFQgBADAAAIIAAANQAAAGgBACIgDACIgBAAIgDgBgAAeA7QgBgCABgDIAGgIIAEgLQACgTACgEQAHgLABgFQAAgGgCgEIgGgIQgEgGACgEIAAAAIgCgJIgDgFQgDgEgIgBIgOgDQgGgBgBgCQgDgCAAgFQgBgGgBgCIgEgEQgCgEAEgCQADgCAEADQACACACAFIACAHQADAEAFABQAGACAMABQAGADACAEQAFAGABAOIABAFQABACAFAFQADAEAAAMQAAAHgCADIgDAGQgEAGgDATQgDAQgIAHIgFACQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBgAizA9QAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQABgCACgCIAHgHQAFgHgDgLIgEgJQgDgHAAgJQAAgOAKgVQAFgNAHAAIABgBIAHgJQAFgGAEgBQABgDgFgIQgEgJAFgIQADgGAIgDQADgCADABQABAAAAAAQABAAABAAQAAABAAAAQABAAAAABQABAFgFADIgIAFIgCAEIADAIQAGAKgGAIIgHAFIgGAIIgEAGQgDACgCAAIgDAAQgNAbADAOIADANQADAIABAFQABARgNAKQgDADgDAAIgDgBgACYAdQgBgBgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBgCACgDIAIgIQAHgFAEgNQAFgSgBgXQgCgQgEgHIgHgIQgDgFAAgFIgSADQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAIAAgDQgKABgGAAQgEAAgBgCIAAgBQgDAAgCgCIgEgGQgCgFgIgEIgagMIgDgDIABgDIADgCQACgBAFACIAQAHQAQAGADAIIADAEQACACAJgCQAHgCABAEIAOABQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAQAKACAKAQIAIAQQADAIAAAPQAAATgCAJIgGASQgDAHgNAOQgDADgDAAIAAAAgACBAIQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgIIAAgJIAEgFQAFgFAAgIQAAgIgFgGQgDgDgIgEQgPgIgKgDQgIgCgCgDQgFgDAAgGIgBAAQgFAAgCgBIgDgDQgLgDgEgEIgCgFIgFgFQgCgDACgEQADgDAFAEIAGAHIAIAFIANAGIAEABQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQACACAAAHQAGgBAOAJIAPAHQAJAEAEAFQAHAIAAALQgBALgFAJIgEAJIAAAHQAAAEgEACIgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBgAgUgXQgEgUgDgFIgEgHQgDgGABgMIABgEQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAABIABAIQABAEAHANQADAHAAAFIACAHIACAJQAAAGgFAAIAAAAQgEAAgCgIg");
	this.shape_24.setTransform(174.975,146.8896);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAXCLQgBgCAAgEQAAgFABgEIAHgOIADgOIAGgOQADgIAEgEIAEgGIACgGIAEgJIAJgPQAFgJABgHIACgHIAEgFQADgEgHgHIgLgMIgBAAIAAABQAAAIgCADIgDAFQgEAGgDATQgDAQgIAHIgFACQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBgCABgDIAGgIIAEgLQACgTACgEQAHgKABgGIAAgEIgFgCIgKgDQgSgDgPAAQgEAAgFABIgHAEQgGADgBgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgCgGQgEgUgDgFIgEgHQgDgGABgMIABgEQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABIABAIQABAEAHANQADAHAAAFIACAHIABAHQAGgDAFAAIAUABIASACIAEABQgDgGACgEIAAAAIgCgJIgDgFQgDgEgIgBIgOgDQgGgBgBgCQgDgCAAgFQgBgGgBgCIgEgEQgCgEAEgCQADgCAEADQACACACAFIACAHQADAEAFABQAGACAMABQAGADACAEQAFAGABAOIABAFQABACAFAFIACAFIAGABQAFACAEAGIAFAHQAGAGABAFQABAEgEAJIgFAMIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAIgBAEIAAAEIgNAeQgBAFgDADIgFAGIgCAFIgHAOIgCAKIgEALIgFALIAAAHQgBAFgDAAQgDAAgCgCgAhsB0QgCgJABgPIABgKQABgFAEgGIAMgRIAGgHQALgLACgGIAEgKIAFgEIADgEIAEgMQACgIgBgEQgPgBgMgKIgDgCIggAlQgEAEgDgBQgDgCABgEQAAgCAEgEIAcggIgDgBIgIgFIgGgCIgBgBIAAAAQgFgBgCgDQABgDADgCQADgCADAAIAAgsQAAgIABgDQADgHAEADQAEAAAAAFIgCAIQgCAFABAHIABAZQAAAKgDAFIABABIAJADIAFACQAEgFACAAIAMgBIADAAIAAgBIAGgJQABgCAAgEIAAgDIgCgCIAAgJIgDgHIAAgKIAAgEIADgDQAEgCACAEIAAAHIAAAHIADAGIAAAFIABACQABABAAAHIAAAHIgDAIIgFAIIgEADIgDAAIgDABQgGgBgDABIgCABIAEAEQAJAGALAAIAGABQAFADAAAHQAAAFgDAIIgEANQgCAGgDADIgFADIgBAFQgBADgEAGIgOARIgGAHQgFAFgEAIIgDAFQgBADAAAIIAAANQAAAGgBACIgDACIgBAAIgDgBgAizAxQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQABgCACgCIAHgHQAFgHgDgLIgEgJQgDgGAAgJQAAgPAKgVQAFgMAHgBIABgBIAHgJQAFgGAEgBQABgDgFgIQgEgJAFgIQADgGAIgDQADgCADABQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAQABAFgFADIgIAFIgCAEIADAIQAGAKgGAIIgHAFIgGAIIgEAGQgDACgCAAIgDAAQgNAbADAPIADAMQADAIABAFQABARgNAKQgDADgDAAIgDgBgACYARQgBAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBQgBgCACgDIAIgIQAHgEAEgOQAFgSgBgXQgCgQgEgHIgHgIQgDgFAAgFIgSADQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIAAgDQgKABgGAAQgEAAgBgCIAAgBQgDAAgCgCIgEgGQgCgFgIgEIgagMIgDgDIABgDIADgCQACgBAFACIAQAHQAQAGADAIIADAEQACACAJgCQAHgCABAEIAOABQABAAAAAAQABAAABAAQAAABABAAQAAAAAAAAQAKACAKAQIAIAQQADAIAAAPQAAATgCAJIgGATQgDAGgNAOQgDADgDAAIAAAAgACBgDQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgJIAAgJIAEgFQAFgFAAgIQAAgIgFgGQgDgDgIgEQgPgIgKgDQgIgCgCgDQgFgDAAgGIgBAAQgFAAgCgBIgDgDQgLgDgEgEIgCgFIgFgFQgCgDACgEQADgDAFAEIAGAHIAIAFIANAGIAEABQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQACACAAAHQAGgBAOAJIAPAHQAJAEAEAFQAHAIAAALQgBALgFAJIgEAJIAAAIQAAAEgEACIgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBg");
	this.shape_25.setTransform(174.975,148.0833);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAXCLQgBgCAAgEQAAgFABgEIAHgOIADgOIAGgOQADgIAEgEIAEgGIACgGIgJAHIgPALQgIAFgEAFIgGAFQgEACgCgDQgDgEAFgFQAEgEAHgFIAMgJIAFgFIAOgJIAJgFIADgBIAFgJQAFgJABgHIACgHIAEgFQADgEgHgHIgLgMIgBAAIAAABQAAAIgCADIgDAFQgEAGgDATQgDAQgIAHIgFACQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBgCABgDIAGgIIAEgLQACgTACgEQAHgKABgGIAAgEIgFgCIgKgDQgSgDgPAAQgEAAgFABIgHAEQgGADgBgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIgCgGQgEgUgDgFIgEgHQgDgGABgMIABgEQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABIABAIQABAEAHANQADAHAAAFIACAHIABAHQAGgDAFAAIAUABIASACIAEABQgDgGACgEIAAAAIgCgJIgDgFQgDgEgIgBIgOgDQgGgBgBgCQgDgCAAgFQgBgGgBgCIgEgEQgCgEAEgCQADgCAEADQACACACAFIACAHQADAEAFABQAGACAMABQAGADACAEQAFAGABAOIABAFQABACAFAFIACAFIAGABQAFACAEAGIAFAHQAGAGABAFQABAEgEAJIgJAUIAKgHIAHgGIAJgKIAXgNIADgBIgBgDIABgJIAAgJIAEgFQAFgFAAgIQAAgIgFgGQgDgDgIgEQgPgIgKgDQgIgCgCgDQgFgDAAgGIgBAAQgFAAgCgBIgDgDQgLgDgEgEIgCgFIgFgFQgCgDACgEQADgDAFAEIAGAHIAIAFIANAGIAEABQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQACACAAAHQAGgBAOAJIAPAHQAJAEAEAFQAHAIAAALQgBALgFAJIgEAJIAAAIIAAADIABABQABABAAAAQAAABAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAABgBAAQgBAAAAABQgBAAgBAAQgOAFgIAIIgLAJIgHAHIgSAMIgHAGIgHAOQgBAFgDADIgFAGIgCAFIgHAOIgCAKIgEALIgFALIAAAHQgBAFgDAAQgDAAgCgCgACUCBQgCgCABgEIAAgGQgBgDgGgDQgNgHgCgRQgCgJADgTIADgOQADgKAJgLIAJgIIgCgDQgBgCACgDIAIgIQAHgEAEgOQAFgSgBgXQgCgQgEgHIgHgIQgDgFAAgFIgSADQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBIAAgDQgKABgGAAQgEAAgBgCIAAgBQgDAAgCgCIgEgGQgCgFgIgEIgagMIgDgDIABgDIADgCQACgBAFACIAQAHQAQAGADAIIADAEQACACAJgCQAHgCABAEIAOABQABAAAAAAQABAAABAAQAAABABAAQAAAAAAAAQAKACAKAQIAIAQQADAIAAAPQAAATgCAJIgGATQgDAGgNANQABAAAAABQABAAAAAAQAAAAAAABQABAAAAABQABADgGAEQgJAHgFAJQgGAKgCAZQgBAJABAEQACAGANAMQALALgDAJQgBADgDACIgDAAIgCgBgAhsB0QgCgJABgPIABgKQABgFAEgGIAMgRIAGgHQALgLACgGIAEgKIAFgEIADgEIAEgMQACgIgBgEQgPgBgMgKIgDgCIggAlQgEAEgDgBQgDgCABgEQAAgCAEgEIAcggIgDgBIgIgFIgGgCIgBgBIAAAAQgFgBgCgDQABgDADgCQADgCADAAIAAgsQAAgIABgDQADgHAEADQAEAAAAAFIgCAIQgCAFABAHIABAZQAAAKgDAFIABABIAJADIAFACQAEgFACAAIAMgBIADAAIAAgBIAGgJQABgCAAgEIAAgDIgCgCIAAgJIgDgHIAAgKIAAgEIADgDQAEgCACAEIAAAHIAAAHIADAGIAAAFIABACQABABAAAHIAAAHIgDAIIgFAIIgEADIgDAAIgDABQgGgBgDABIgCABIAEAEQAJAGALAAIAGABQAFADAAAHQAAAFgDAIIgEANQgCAGgDADIgFADIgBAFQgBADgEAGIgOARIgGAHQgFAFgEAIIgDAFQgBADAAAIIAAANQAAAGgBACIgDACIgBAAIgDgBgAizAxQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBQABgCACgCIAHgHQAFgHgDgLIgEgJQgDgGAAgJQAAgPAKgVQAFgMAHgBIABgBIAHgJQAFgGAEgBQABgDgFgIQgEgJAFgIQADgGAIgDQADgCADABQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAQABAFgFADIgIAFIgCAEIADAIQAGAKgGAIIgHAFIgGAIIgEAGQgDACgCAAIgDAAQgNAbADAPIADAMQADAIABAFQABARgNAKQgDADgDAAIgDgBg");
	this.shape_26.setTransform(174.975,148.0833);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ACKCjQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgFgHIgGgEIgJgKQgGgHAAgEQABgKgCgFIgDgGIgEgHIAAgJQAAgEgFgEQgKgEgEgDIgJgHIgFgDIgCAHIgDAKIgDALIgGALIAAAHQgBAFgDAAQgDAAgBgCQgCgCAAgEQAAgFACgEIAGgOIAEgOIAFgOIABgBIgFgKIgGAFQgIAFgFAFIgFAFQgEACgCgDQgEgEAGgFQADgEAIgFIALgJIABgBQgEgHAAgGQAAgDACgCIACAAIAAgCIAGgIIAEgLQADgSACgEQAHgLABgGIgBgEIgEgCIgKgDQgTgDgOAAQgFAAgFABIgHAEQgGADgBgFQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIgDgGQgCgUgDgFIgFgHQgDgGABgMIACgEQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABABABIABAIQAAAEAGANQADAHABAFIABAHIACAHQAFgDAHAAIAUABIASACIAEABQgEgGACgEIAAAAIgCgJIgCgFQgEgEgHgBIgPgDQgFgBgCgCQgCgCgBgFQgBgGgCgCIgEgEQgCgEAFgCQADgCAEADQACACACAFIADAHQADAEAEABQAGACANABQAFADADAEQAFAGABAOIAAAFQABACAFAFIACAFIAGABQAFACAEAGIAGAHQAGAGABAFQAAAFgEAJIgJATIALgHIAHgFIAJgKIAXgOIADgBIgBgDIAAgJIAAgJIAFgFQAFgFAAgIQAAgIgFgGQgDgDgIgEQgQgIgJgDQgIgCgDgDQgEgDgBgGIAAAAQgGAAgCgBIgCgDQgMgDgDgEIgDgFIgEgFQgCgDABgEQAEgDAFAEIAFAHIAIAFIAOAGIADABQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQADACAAAHQAFgBAPAJIAPAHQAIAEAFAFQAHAIgBALQAAALgGAJIgEAJIABAIIgBADIACABQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABQgBAAAAAAQgOAFgJAIIgKAIIgHAHIgTAMIgHAGIgGAOQgCAFgDADIgEAGIgCADIAHAFIAFAFIANAGIAGAFIAGAEQABACAAADIgBAFQAAAHAHALIABAKQAAAGACADQACAGAJAHQAKAIACAGIgBAEQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIAAAAgABAArIgBABIADAFIABgBIAFgGIACgGIgKAHgABTgmQAAAIgCADIgDAGQgEAGgEASQgCAQgJAHIgDACIABAEIABADIALgIIAKgFIACgBIAFgJQAFgJACgGIACgHIAEgFQACgEgGgIIgLgMIgBAAIAAABgAipB4QgDgBgEgDIgSgSQgIgLAAgMQAAgEADgHQAEgGAJgIIAcgYIgBgEQAAgCACgCIAIgHQAFgHgEgKIgEgJQgDgHAAgJQAAgPAKgVQAFgNAIAAIABgBIAHgJQAFgGADgBQABgDgEgIQgEgJAEgIQAEgGAHgDQADgCADABQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQACAFgGADIgIAFIgBAEIADAIQAFAKgGAIIgGAFIgHAIIgEAGQgDACgCAAIgDAAQgMAbACAPIAEANQADAIAAAFQABANgJAKIABAAQABACgEAEQgMAOgUAPQgLAJgBAGQgEAOAPANIALAIQAIAGgBAEQgCADgDAAIgCAAgACpBrQgBgCABgEIAAgGQgBgDgHgDQgMgHgDgRQgCgJADgTIADgOQAEgKAJgLIAIgHIgBgDQgBgCABgDIAJgIQAGgFAEgOQAGgSgBgXQgCgQgFgHIgGgIQgEgFAAgFIgSADQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAIgBgDQgKABgFAAQgEAAgCgCIAAgBQgDAAgCgCIgDgGQgDgFgHgEIgbgMIgCgDIAAgDIADgCQACgBAFACIAQAHQAQAGAEAIIACAEQADACAIgCQAHgCACAEIANABQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAKACAKAQIAIAQQACAIAAAPQAAATgCAJIgGATQgDAHgMANQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAABQACADgGADQgKAHgEAJQgGAKgCAZQgBAJABAEQACAGAMAMQALALgCAJQgBADgEACIgCAAIgDgBgAgZBrQgDgCAAgFQgBgPACgJIADgKIAAgKIAAgLIgDgKIgHgQQgDgFgDgCIgCAAIgEAHIgOARIgFAHQgFAFgEAIIgDAFQgBADAAAIIAAANQAAAGgCACIgDACQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAQgDgJABgPIABgKQABgFAFgGIALgRIAGgHQALgLACgGIAAAAQgEgDgNAAQgMAAgLgEQgFgBgCgDIgBgDIgDAAQgEgCABgEQABgCADgEIAcghIgDgBIgIgFIgFgCIgCgBIAAAAQgEgBgCgDQABgDACgCQADgCADAAIAAgsQAAgIACgDQACgHAFADQADAAAAAFIgCAIQgBAFABAHIAAAZQAAAKgDAFIACABIAJADIAEACQAEgFACAAIANgBIACAAIABgBIAGgJQABgCgBgEIAAgDIgBgCIgBgJIgCgHIgBgKIABgEIADgDQADgCACAEIABAHIAAAHIACAGIABAFIABACQABABAAAHIAAAHIgDAIIgFAIIgEADIgDAAIgDABQgHgBgDABIgCABIAFAEQAJAGAKAAIAHABQAEADAAAHQAAAFgDAJIgEANQgCAGgDACIgCABIADACQAFAEAEAGIAEAIQAFAKABAGIABAPQAAAKgBAFIgEANIAAAQIgBAGQgBABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgBAAgAhegKIAGADQAEACAKABQAUABAHACIAAAAIABAAIAEgEIADgEIAEgMQADgJgBgEQgQgBgMgKIgDgCg");
	this.shape_27.setTransform(172.8486,150.2883);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15}]},39).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},6).to({state:[{t:this.shape_18}]},3).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},3).to({state:[{t:this.shape_21}]},4).to({state:[{t:this.shape_22}]},5).to({state:[{t:this.shape_23}]},11).to({state:[{t:this.shape_24}]},7).to({state:[{t:this.shape_25}]},3).to({state:[{t:this.shape_26}]},10).to({state:[{t:this.shape_27}]},13).to({state:[{t:this.shape_27}]},4).wait(71));

	// vase_2
	this.instance_9 = new lib.vase3("synched",0);
	this.instance_9.setTransform(168.5,158.55,1,1,0,0,0,38.4,50.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(183));

	// BATATA_copy
	this.instance_10 = new lib.BATATAcopy("single",24);
	this.instance_10.setTransform(31.25,10.7,1,1,0,0,0,20.8,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:13.7419,x:169.7,y:97.9},19).wait(164));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-393.4,-59.1,926.4,634);


(lib.scene_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.hand("synched",0);
	this.instance.setTransform(-358.3,-143.15,1,1,74.9998,0,0,177.5,139);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-92.15,y:-18.75},13).wait(3).to({startPosition:0},0).to({x:-308.15,y:-45.75},7).to({rotation:104.9985,x:39.55,y:-33.7},10).wait(3).to({startPosition:0},0).to({x:-338.95,y:-18.95},8).wait(4).to({rotation:0,skewX:-104.9985,skewY:75.0015,x:634.7,y:9.1},0).to({x:372.55,y:-28.35},11).wait(3).to({startPosition:0},0).to({regX:177.4,regY:139.1,scaleX:0.9999,scaleY:0.9999,skewX:-134.9975,skewY:45.0025,x:676.25,y:-62},9).wait(3).to({startPosition:0},0).to({_off:true},1).wait(255));

	// table
	this.instance_1 = new lib.table("synched",0);
	this.instance_1.setTransform(183.1,230.9,2.1846,2.1846,0,0,0,159,80.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({startPosition:0},0).to({_off:true},1).wait(255));

	// vase_2
	this.instance_2 = new lib.vase2("synched",0);
	this.instance_2.setTransform(-268.05,-217.6,2.1846,2.1846,0,0,0,19.9,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-1.9,y:-93.2},13).wait(61).to({startPosition:0},0).to({_off:true},1).wait(255));

	// toothpicks
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.setTransform(-216.75,-14.4,2.1846,2.1846,0,0,0,7.3,2.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({x:122.95,y:23.05},10).wait(41).to({startPosition:0},0).to({_off:true},1).wait(255));

	// BATATA
	this.instance_4 = new lib.BATATA("synched",0);
	this.instance_4.setTransform(570.55,56.9,1.4409,1.4409,-60.0014,0,0,21.7,40.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},0).to({rotation:-75.0004,x:303.05,y:30.15},11).wait(15).to({startPosition:0},0).to({_off:true},1).wait(255));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481.5,-204.6,1215.4,611.8);


(lib.scene_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hand
	this.instance = new lib.hand("synched",0);
	this.instance.setTransform(-161,248.45,1,1,0,0,0,127.9,127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({x:39.6,y:132.1},0).wait(23).to({x:-54.05,y:245.75},0).wait(19).to({x:-326.9,y:517.3},0).to({x:163.05,y:184.3},20).to({x:-330.5,y:490.6},18).wait(8).to({x:238.8,y:164.9},0).to({x:-313.55,y:516.65},24).wait(6).to({startPosition:0},0).to({_off:true},1).wait(102));

	// Symbol_2_copy
	this.instance_1 = new lib.vase2("synched",0);
	this.instance_1.setTransform(290.55,30.55,1.9456,1.9456,0,0,0,7.1,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(111).to({startPosition:0},0).to({x:-259.1,y:363.45},24).wait(6).to({startPosition:0},0).to({_off:true},1).wait(102));

	// Symbol_2
	this.instance_2 = new lib.Symbol2("synched",0);
	this.instance_2.setTransform(222.3,113.45,1.9456,1.9456,0,0,0,7,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({startPosition:0},0).to({x:-271.25,y:419.75},18).to({_off:true},8).wait(133));

	// Symbol_1
	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(104.85,446.7,1.9456,1.9456,0,0,0,33.8,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(141).to({startPosition:0},0).to({_off:true},1).wait(102));

	// Symbol_1
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(202.9,274.3,1.9456,1.9456,0,0,0,33.8,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(141).to({startPosition:0},0).to({_off:true},1).wait(102));

	// Symbol_1
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.setTransform(101,92,1.9456,1.9456,0,0,0,33.8,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(141).to({startPosition:0},0).to({_off:true},1).wait(102));

	// BATATA
	this.instance_6 = new lib.BATATA("synched",0);
	this.instance_6.setTransform(133.45,59.8,1.2221,1.1124,-148.9558,0,0,15.3,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({startPosition:0},0).wait(23).to({rotation:-58.9558,x:12.85,y:173.6},0).to({_off:true},19).wait(179));

	// BATATA
	this.instance_7 = new lib.BATATA("synched",0);
	this.instance_7.setTransform(107.9,51.8,1.2222,1.1124,-22.989,0,0,21.7,40.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(141).to({startPosition:0},0).to({_off:true},1).wait(102));

	// BATATA
	this.instance_8 = new lib.BATATA("synched",0);
	this.instance_8.setTransform(72.7,51.95,1.2205,0.8192,0,0,0,20.2,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(141).to({startPosition:0},0).to({_off:true},1).wait(102));

	// Layer_10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#BBA599").ss(9,1,1).p("A/OAKMA+dgAT");
	this.shape.setTransform(211.65,321.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(141).to({_off:true},1).wait(102));

	// Layer_11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BBA599").ss(9,1,1).p("A/2AAMA/tAAA");
	this.shape_1.setTransform(205.8,142.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(141).to({_off:true},1).wait(102));

	// Layer_12
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BBA599").ss(9,1,1).p("A/YgJMA+xAAT");
	this.shape_2.setTransform(210.675,495.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(141).to({_off:true},1).wait(102));

	// Layer_13
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BBA599").ss(9,1,1).p("EgASgstMAAlBZb");
	this.shape_3.setTransform(1.925,312.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(141).to({_off:true},1).wait(102));

	// Layer_14
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#BBA599").ss(9,1,1).p("EAAAgreMAAABW9");
	this.shape_4.setTransform(415.45,308.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(141).to({_off:true},1).wait(102));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-358.9,0,778.9,644.4);


(lib.handvase = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hand("synched",0);
	this.instance.setTransform(154.4,131.05,1,1,0,-53.74,126.26,177.6,139);

	this.instance_1 = new lib.vase2("synched",0);
	this.instance_1.setTransform(42.45,91.95,2.366,2.366,0,0,0,20.1,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,35.6,274.7,128.20000000000002);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(150.7,60.5,1,1,0,0,0,150.7,60.5);

	this.instance_1 = new lib.BATATA("synched",0);
	this.instance_1.setTransform(148.25,131.4,1.9175,1.3086,0,-3.9356,0,21.6,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,5.8,298.4,178);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hand
	this.instance = new lib.handvase("synched",0);
	this.instance.setTransform(515.4,178,1,1,0,0,0,146.7,131.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({x:206.45,y:172.6},0).to({_off:true},100).wait(6));

	// water
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.698)").ss(3,0,1).p("AEtAAQAAAShYAMQhZANh8AAQh8AAhYgNQhYgMAAgSQAAgRBYgNQBYgNB8AAQB8AABZANQBYANAAARg");
	this.shape.setTransform(103.65,177.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AED4FF").s().p("AjUAfQhYgNAAgSQAAgRBYgNQBYgMB8AAQB8AABZAMQBYANAAARQAAAShYANQhZAMh8AAQh8AAhYgMg");
	this.shape_1.setTransform(103.65,177.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,153,255,0.698)").ss(3,0,1).p("AkuglIACBfAEuAsQgHAQhUALQhZANh8AAQh8AAhYgNQhWgMADgSQAAgIARgGQAWgKA1gHQAsgHA2gDQg9gCgygHQhNgLgHgQIAAgBQAAgBgBgCQABgDAEgEIgEAKAkqgvQAQgNBHgLQBagMB8AAQB8AABXAMQBKALAKAPIAAAIQgIAQhUAMQgtAGg1ADQg2ADg9AAQg2AAgugDAEqgtQABADgBACQABACgBABIAFBJIAAAGQAAABgBABIgGAQABsAAQA9ADAyAHQBMALAIAPQABADAAACQgBABAAAA");
	this.shape_2.setTransform(102.975,173.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AED4FF").s().p("AjWBHQhWgMADgSQAAgIARgGIgWg/QAHAQBNALQAyAHA9ACQg9gCgygHQhNgLgHgQIAAgBIAEgKQAQgNBHgLQBagMB8AAQB8AABXAMQBKALAKAPIAAAFIAAADIAAgIIAAAIQgIAQhUAMQgtAGg1ADQg2ADg9AAQg2AAgugDQAuADA2AAQA9AAA2gDQA9ADAyAHQBMALAIAPIAAAGIgBACQgHAQhUALQhZANh8AAQh8AAhYgNgAjNAKQg1AHgWAKQAWgKA1gHQAsgHA2gDQg2ADgsAHgAEvAkIABAFIgBABgADbAKQgygHg9gDQA1gDAtgGQBUgMAIgQIAFBJQgIgPhMgLgAEqglgAkvgoQABgDAEgEIgEAKIgBgDgAkqgvg");
	this.shape_3.setTransform(102.975,173.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,153,255,0.698)").ss(3,0,1).p("Akug6IAAgBIAEgKQAQgOBHgKQBagNB8AAQB8AABXANQBKALAKAPIAAAIQgIAQhUALQgtAHg1ADQg2ADg9AAQg2AAgugCQg9gDgygIQhNgLgHgPQAAAkgBAEQABgBABgCIAAAJIAAAAIABBdAkug6IABAlAEuBCQgHAQhUAMQhZANh8AAQh8AAhYgNQhWgNADgSQAAgHARgHQAWgJA1gIQAsgGA2gDQAmABA0gCQAFAAAEAAQAwgBBEABQA9ADAyAHQBMAMAIAPQABACAAACQgBABAAABQAAAAgBABIgGARAEqhDQABAvgBADQABABgBACIAFBJIAAAG");
	this.shape_4.setTransform(102.9875,170.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AED4FF").s().p("AjWBeQhWgNADgSQAAgHARgHIgVg9IAAAAIAAAAIgBgBIABABIgBgJIAAglQAGAPBOALQAxAIA+ADQAuACA2AAQA9AAA2gDQA1gDAtgHQBUgLAIgQIAAgIIAAAIQgIAQhUALQgtAHg1ADQg2ADg9AAQg2AAgugCQg+gDgxgIQhOgLgGgPIgBgBIAFgKQAQgOBHgKQBagNB7AAQB9AABXANQBKALAKAPIAAAyIAAADIAFBJQgJgPhLgMQgzgHg8gDIgTAAIgTAAIgEAAIgcAAIAAAAIAAAAIgkAAIgKAAIgJAAIgGAAIg0ABIgBAAIAAAAIgRAAIgOAAQg2ADgtAGQg0AIgWAJQAWgJA0gIQAtgGA2gDIAOAAIARAAIAAAAIABAAIA0gBIAGAAIAJAAIAKAAIAkAAIAAAAIAAAAIAcAAIAEAAIATAAIATAAQA8ADAzAHQBLAMAJAPIAAAGIAAgGIABAEIgBACIgBABQgHAQhVAMQhYANh8AAQh9AAhXgNgAEvA7IAAAAgAkug6IAAAAg");
	this.shape_5.setTransform(103,170.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,153,255,0.698)").ss(3,0,1).p("AEqh3QgIAQhUALQgtAHg1ADQg2ADg9AAQg2AAgugCQg9gDgygIQhNgLgHgPIAAgBIAEgKQAQgOBHgKQBagNB8AAQB8AABXANQBKALAKAPIAAAIQAAAxAAApIAAAPQAAA2AAACQABABgBACIAFBKQABACAAACQgBABAAABQAAAAgBABQgHAQhUAMQhZANh8AAQh8AAhYgNQhWgNADgSQAAgHARgHQAWgJA1gIQAsgGA2gDQAmABA0gCQAFAAAEAAQAwgBBEABQA9ADAyAHQBMAMAIAPIAAAGAktAmIAAAJIAAAAIABBeAkugUQAAA7gBACQABgBABgCAkugUIABA6Akuh3IAABjAEuB+IgGAR");
	this.shape_6.setTransform(102.9875,164.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AED4FF").s().p("AjWCaQhWgNADgSQAAgHARgHQAWgJA0gIQAtgGA2gDIAOAAIARAAIAAAAIABAAIA0gBIAGAAIAJAAIAKAAIAkAAIAAAAIAAAAIAaAAIAGAAIATAAIATAAQA8ADAzAHQBLAMAJAPIAAAGIgBABQgHAQhVAMQhYANh8AAQh9AAhXgNgAEvB9gAEvB3IABAEIgBACgADbBcQgzgHg8gDIgTAAIgTAAIgGAAIgaAAIAAAAIAAAAIgkAAIgKAAIgJAAIgGAAIg0ABIgBAAIAAAAIgRAAIgOAAQg2ADgtAGQg0AIgWAJIgVg+IAAAAIAAAAIgBgBIABABIgBgJIAAg6IgBhjIABABQAGAPBOALQAxAIA+ADQAuACA2AAQA9AAA2gDQA1gDAtgHQBUgLAIgQIAABaIAAAPIAAA4IAAADIAFBKQgJgPhLgMgAhrhRQg+gDgxgIQhOgLgGgPIgBgBIAFgKQAQgOBHgKQBagNB7AAQB9AABXANQBKALAKAPIAAAIQgIAQhUALQgtAHg1ADQg2ADg9AAQg2AAgugCgAkvh3g");
	this.shape_7.setTransform(103,164.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,153,255,0.698)").ss(3,0,1).p("AErioQgIAQhUAMQgtAGg1AEQgbABgdABQgdABgeAAQg2AAgugDQg9gDgygHQg6gIgSgLQgGgEgCgEIAAgBIAEgKQAQgNBHgLQBagMB8AAQB8AABXAMQBKALAKAPIAAAIQAAAPAAAOQAAB6AAAjIAAAPQABA4gBABQABACgBABIAFBKIAAAGAktAcQAAA7AAADQAAgCABgBIAAAJIAAAAIABBdAktAcIABA7AkwiRQAAgEABBOQABAnABA8AEvCvQgHAQhUALQhZANh8AAQh8AAhYgNQhWgMADgSQAAgIARgGQAWgKA1gHQAsgHA2gDQAnABA0gBQAEAAAEAAQAwgBBEABQA9ADAyAHQBMALAIAPQABADAAACQgBABAAAAQAAABgBABIgGAQ");
	this.shape_8.setTransform(102.8652,160.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AED4FF").s().p("AjVDKQhWgMADgSQAAgIARgGQAWgKA1gHQAsgHA2gDIAOAAIARABIABAAIAAAAIA0gBIAHAAIAIAAIALgBIAjAAIAAAAIABAAIAZAAIAHAAIASAAIATABQA9ADAyAHQBMALAIAPIAAAGIgBACQgHAQhUALQhZANh8AAQh8AAhYgNgAEwCtgAEwCnIABAFIgBABgADcCNQgygHg9gDIgTgBIgSAAIgHAAIgZAAIgBAAIAAAAIgjAAIgLABIgIAAIgHAAIg0ABIAAAAIgBAAIgRgBIgOAAQg2ADgsAHQg1AHgWAKIgVg+IAAAAIAAAAIAAgBIAAABIAAgJIgBg8IgChiIgBhKIALgOQASALA6AIQAyAHA9ADQAuADA2AAIA7gBIA4gCQA1gEAtgGQgtAGg1AEIg4ACIg7ABQg2AAgugDQg9gDgygHQg6gIgSgLQgGgEgCgEIAAgBIAEgKQAQgNBHgLQBagMB8AAQB8AABXAMQBKALAKAPIAAAIQgIAQhUAMIBYABQADgNABgQIAAAdIAACdIAAAPIAAA5IAAADIAFBKQgIgPhMgLg");
	this.shape_9.setTransform(102.8652,160.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,153,255,0.698)").ss(3,0,1).p("AErjhQgIAQhUAMQgtAGg1AEQgbABgdABQgdABgeAAQg2AAgugDQg9gDgygHQg6gIgSgLQgGgEgCgEIAAgBIAEgKQAQgNBHgLQBagMB8AAQB8AABXAMQBKALAKAPIAAAIIgBA5QABBMAAAKQAAB5AAAkIAAAPQAAA4AAABQABACgBABIAFBKIAAAGQAAABgBABQgHAQhUALQhZANh8AAQh8AAhYgNQhWgMADgSQAAgIARgGQAWgKA1gHQAsgHA2gDQAmABA0gBQAFAAAEAAQAwgBBEABQA9ADAyAHQBMALAIAPQABADAAACQgBABAAAAAktBUQAAA8gBADQABgCABgBIAAAJIAAAAIABBdAktBUIABA8AktjhQgECFACBOQABAmABA8AEvDoIgGAQ");
	this.shape_10.setTransform(102.8915,154.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AED4FF").s().p("AjVEDQhWgMADgSQAAgIARgGQAWgKA1gHQAsgHA2gDIAOAAIARABIAAAAIABAAIA0gBIAGAAIAJAAIAKgBIAkAAIAAAAIABAAIAZAAIAGAAIATAAIATABQA9ADAyAHQBMALAIAPIAAAGIAAgGIABAFIgBABIgBACQgHAQhUALQhZANh8AAQh8AAhYgNgADcDGQgygHg9gDIgTgBIgTAAIgGAAIgZAAIgBAAIAAAAIgkAAIgKABIgJAAIgGAAIg0ABIgBAAIAAAAIgRgBIgOAAQg2ADgsAHQg1AHgWAKIgVg+IAAAAIAAAAIgBgBIABABIAAgJIgBg8IgChiQgChOAEiFIAEgKQAQgNBHgLQBagMB8AAQB8AABXAMQBKALAKAPIAAAIQgIAQhUAMQgtAGg1AEIg4ACIg7ABQg2AAgugDQg9gDgygHQg6gIgSgLQgGgEgCgEIAAgBIAAABQACAEAGAEQASALA6AIQAyAHA9ADQAuADA2AAIA7gBIA4gCQA1gEAtgGQBUgMAIgQIgBA5IABBWIAACdIAAAPIAAA5IAAADIAFBKQgIgPhMgLg");
	this.shape_11.setTransform(102.8915,154.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,153,255,0.698)").ss(3,0,1).p("AkqkYQgDgCgBgCIAAgBIAEgKQAQgOBHgKQBagNB8AAQB8AABXANQBKALAKAPIAAAIQgIAQhUALQgtAHg1ADQgbACgdABQgdAAgeAAQg2AAgugCQg9gDgygIQg6gIgSgLQgCgBgCgCgAkuCRQgBg8ABjpQAAgDAAgMIAEh1AktDMIAAAJIAAAAIABBeAkuCRQAAA8gBACQABgBABgCAkuCRIABA7AEuEkQgHAQhUALQhZAOh8AAQh8AAhYgOQhWgMADgSQAAgHARgHQAWgKA1gHQAsgGA2gEQAnABAzgBQAFAAAEAAQAwgBBEABQA9ADAyAHQBMALAIAPIAAAGQAAABgBABIgGAQAEqkdQAABFAAAzQAACIAAAHQAAB5AAAkIAAAPQAAA4AAACQABABgBABIAFBKQABADAAACQgBABAAAA");
	this.shape_12.setTransform(102.9826,148.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AED4FF").s().p("AjWFAQhWgNADgSQAAgIARgGIgVg+IAAAAIAAAAIgBgBIABABIAAgJIgBg7QgBg8ABjpIAAgPIAEh1IAEAEQASAKA6AJQAyAHA9ADQAuADA2gBIA7AAIA4gCQA1gEAtgGQBUgMAIgQQgIAQhUAMQgtAGg1AEIg4ACIg7AAQg2ABgugDQg9gDgygHQg6gJgSgKIgEgEQgDgCgBgCIAAgBIAEgKQAQgNBHgLQBagNB8AAQB8AABXANQBKALAKAPIAAAIIAAB4IAACQIAACcIAAAPIAAA5IAAAEIAFBJIABAFIgBACIAAgHQgIgPhMgLQgygHg9gDIgTAAIgSgBIgHAAIgZAAIgBAAIAAAAIgkABIgKAAIgJAAIgGAAIg0ABIgBAAIAAAAIgRAAIgOgBQg2ADgsAHQg1AIgWAJQAWgJA1gIQAsgHA2gDIAOABIARAAIAAAAIABAAIA0gBIAGAAIAJAAIAKAAIAkgBIAAAAIABAAIAZAAIAHAAIASABIATAAQA9ADAyAHQBMALAIAPIAAAHIgBABQgHAQhUAMQhZAMh8AAQh8AAhYgMg");
	this.shape_13.setTransform(102.9826,148.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},11).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},3).to({state:[{t:this.shape_7},{t:this.shape_6}]},3).to({state:[{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_11},{t:this.shape_10}]},3).to({state:[{t:this.shape_13},{t:this.shape_12}]},3).wait(85));

	// Layer_3
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.setTransform(-18.2,-5,1,1,0,0,0,25.6,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},108).wait(6));

	// Layer_2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2,0,1).p("AjXjWQFkAiBDGT");
	this.shape_14.setTransform(74.2953,16.7585);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},108).wait(6));

	// Layer_1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B6B6B6").ss(33,0,1).p("An7mXQOzjchATJ");
	this.shape_15.setTransform(55.5092,44.1245);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).to({_off:true},108).wait(6));

	// Layer_4
	this.instance_2 = new lib.Symbol4copy("synched",0);
	this.instance_2.setTransform(59.8,-18,1,1,0,0,0,25.6,27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},108).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-46.6,688.6999999999999,257.3);


(lib.scene_05 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol3("synched",0);
	this.instance.setTransform(223.85,163.45,1,1,0,0,0,46.8,52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({startPosition:51},0).to({_off:true},1).wait(197));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B6B6B6").ss(13,1,1).p("Egl0ACnIb5pUIXTn0IYdGfMgl1AWkg");
	this.shape.setTransform(242.1,249.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF99CC").ss(13,1,1).p("AB2xMIXxjmIAAMOIAAMOAB2xMIAOOWIXjluA5mD3IAAw6IbckJA5mD3IbqmtIAPOTA5mD3IAAQ8");
	this.shape_1.setTransform(163.85,133.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC6E2").s().p("A5mD3IbqmtIAOOTIgOuTIXiluIAAMOI3UHzI74JWgA5mtDIbbkJIAPOWI7qGtgACEi2IgPuWIXxjmIAAMOI3iFugACEi2gAZmokg");
	this.shape_2.setTransform(163.85,133.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},51).to({state:[]},1).wait(197));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-6.5,827,355.4);


(lib.scene_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(123.3,157.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// VASA
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.698)").ss(4,0,1).p("AgBgQIgBgCAADATIgDgF");
	this.shape.setTransform(201.925,139.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AD69D5").s().p("AABACIgCgEIAAgBIADAAIAAAGg");
	this.shape_1.setTransform(201.525,137.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AB76CA").s().p("Aq5BtIiAjSIAAgHID/ACIRfAJIEVACIh8DMg");
	this.shape_2.setTransform(284.325,147.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D5B369").s().p("AovAvQAMgNATgJQAQgIAagFQAdgHAQACIAWAEQANADAJABQAHAAARgDQAQgEAHAAIAPAAQAJAAAFgCQAHgDAKgGQAHgDAJgBIARgBIAUABQAMABAHAFQAKAEAKAMIACACQALgGAVAAQBCACAngEQA5gGAsgRIAkgQQAWgLAOgFQAlgMAoAEQAnAEAjAUIARAKIASAJQAMAEAYADIBdAKQAlAFAVAEQAfAHAYAMQAMAHAUAPg");
	this.shape_3.setTransform(283.2,132.264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.instance_1 = new lib.Symbol7("synched",0);
	this.instance_1.setTransform(281.25,118.3,0.5004,0.5869,0,0,0,150.8,92.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.3,67.7,318,251.40000000000003);


(lib.ADANIT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.table("synched",0);
	this.instance.setTransform(140.85,251.55,2.1622,2.1622,0,0,0,159,80.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,153,255,0.698)").ss(4,0,1).p("AAGAfIgGgHAgCgdIgCgC");
	this.shape.setTransform(1.1769,4.1808);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AB76CA").s().p("A1ygVMArtAAAIkhGVMgikAAKgA1ygVIj/loIAAgMMAzjAAXIj3FdgA1ygVg");
	this.shape_1.setTransform(165.875,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD69D5").s().p("AACAEIgFgIIAAgBIAHAAIAAALg");
	this.shape_2.setTransform(0.425,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(62));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D5B369").s().p("AP4CBIgigZQgUgNgQgHQgUgJgagEIgwgGIjmgVIgpgEQgHAMgNAHQgTALgZgDQgVgDgWgMIgOgIQgIgEgHgCIgCAAIgBADQgKAVgjAWQgYAQgRACQgLABghgEQgogGgmAFIgbADIgbADQggAAgUgOQgNgJgEgBQgHgBgKADQgKAEgUALQgUALgKADIgZAGQgOAEgIADIgSAJQgKAGgHACQgNADgPgFQgNgFgKgLQgSgUAAggIAAgQIguAEIh5AIQgEALgHAJQgcAjgzAEQgeACgdgKQgdgKgWgVQgUgWgLgKQgTgSgSgDQgSgCgZALIgrARQgRAFgbgBIgtgBQgMAAgrAHQgiAGgVgDQgJgBgegIQgYgHgQABQgNABgYAIQgZAJgNABIgYgBQgPAAgIAEQgMAFgLARQgPAVgFAFQgQAPgXAAQgXAAgQgPQgWgVAFgjQAEgbAWgaQAbgdAtgRQAfgNA1gKQA5gMAiADIArAIQAbAFAQABQAQAAAggFQAggGAQAAIAdAAQASAAALgEQAMgEAVgMQAOgGASgCIAigBQAaAAAOABQAWADAQAHQAUAJAUAUIAEAEQAVgLArABQCDADBPgHQBzgJBXgfIBIgcQAtgSAcgIQBKgWBPAHQBOAHBGAiIAiARQAUAKAPAFQAYAIAxAFIC6ATQBLAHAoAIQA/ALAvAWQAkAPBCAtQAhAXAHATQAJAZgUAYQgTAXgcADIgIABQgpAAg0gmg");
	this.shape_3.setTransform(165.8264,-0.5182);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(62));

	// Layer_4
	this.instance_1 = new lib.hand("synched",0);
	this.instance_1.setTransform(-375.25,-118.65,1,1,67.4823,0,0,177.6,139.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:75.15,y:-28.6},29).to({regX:177.5,regY:139,rotation:47.991,x:16.85,y:-131.5},7).to({rotation:38.7697,x:-338.15,y:33.85},22).wait(4));

	// Layer_3
	this.instance_2 = new lib.Symbol7("synched",0);
	this.instance_2.setTransform(-288.5,-178.9,1,1,0,0,0,150.7,91.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:156.6,y:-80.35},29).to({x:159.75,y:-31.6},7).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-499.2,-265,983.7,691.2);


// stage content:
(lib.batatapink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.streamSoundSymbolsList[0] = [{id:"AcousticBlues",startFrame:0,endFrame:636,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("AcousticBlues",0);
		this.InsertIntoSoundStreamData(soundInstance,0,636,1);
		var self = this;
		self.stop();
		
		self.start.addEventListener("click", startplaying);
		
		function startplaying() {
			self.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(642));

	// START_BUTTON
	this.start = new lib.start();
	this.start.name = "start";
	this.start.setTransform(320.05,240,1,1,0,0,0,67,77);

	this.timeline.addTween(cjs.Tween.get(this.start).to({_off:true},1).wait(640).to({_off:false,x:262,y:174.95},0).wait(1));

	// TXT
	this.instance = new lib.Symbol9("synched",0);
	this.instance.setTransform(317,101.85,1.5398,1.5398,0,0,0,161.3,25.9);

	this.instance_1 = new lib.Symbol10("synched",0);
	this.instance_1.setTransform(186.85,67.5,1,1,0,0,0,115.5,13.4);

	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(113.9,54.1,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_2();
	this.instance_3.setTransform(127.45,54.1,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_3();
	this.instance_4.setTransform(67.05,42.7,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_4();
	this.instance_5.setTransform(40.65,33.15,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_5();
	this.instance_6.setTransform(13.3,19.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_6();
	this.instance_7.setTransform(410.6,161.35,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_7();
	this.instance_8.setTransform(89.45,11.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_2}]},56).to({state:[{t:this.instance_3}]},49).to({state:[]},36).to({state:[{t:this.instance_4}]},79).to({state:[{t:this.instance_5}]},48).to({state:[]},38).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_7}]},51).to({state:[{t:this.instance_8}]},135).to({state:[]},74).wait(1));

	// scenes
	this.instance_9 = new lib.scene_01("synched",0);
	this.instance_9.setTransform(324.3,274.8,1,1,0,0,0,298.2,159.5);

	this.instance_10 = new lib.scene_02("synched",0,false);
	this.instance_10.setTransform(424.35,354.65,0.7757,0.7757,0,0,0,207.7,301.6);

	this.instance_11 = new lib.scene_03("synched",0,false);
	this.instance_11.setTransform(307.8,325.65,1,1,0,0,0,159,80.8);

	this.instance_12 = new lib.scene_05("synched",0);
	this.instance_12.setTransform(346.45,259.45,1,1,0,0,0,242.1,171.2);

	this.instance_13 = new lib.BATATAcopy("synched",0,false);
	this.instance_13.setTransform(312.75,261.6,4.5676,4.5676,0,0,0,21.8,40.3);

	this.instance_14 = new lib.scene_7("synched",0,false);
	this.instance_14.setTransform(371.55,288.1,1,1,0,0,0,229.6,178.5);

	this.instance_15 = new lib.ADANIT("synched",0,false);
	this.instance_15.setTransform(328.7,277.9,1,1,0,0,0,164.8,38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},65).to({state:[{t:this.instance_11}]},142).to({state:[{t:this.instance_12}]},75).to({state:[{t:this.instance_13}]},52).to({state:[{t:this.instance_14,p:{regX:229.6,scaleX:1,scaleY:1,x:371.55,y:288.1,startPosition:0}}]},45).to({state:[{t:this.instance_14,p:{regX:229.5,scaleX:3.9303,scaleY:3.9303,x:549.95,y:488.65,startPosition:49}}]},52).to({state:[{t:this.instance_15}]},136).to({state:[]},73).wait(1));

	// bg
	this.instance_16 = new lib.Symbol11();
	this.instance_16.setTransform(317.45,235.9,1,1,0,0,0,358.4,269);
	this.instance_16._off = true;
	this.instance_16.filters = [new cjs.ColorFilter(0.29, 0.29, 0.29, 1, 181.05, 181.05, 181.05, 0)];
	this.instance_16.cache(-2,-2,721,542);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).wait(641));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1578.3,-205.3,3321.2,2251.7000000000003);
// library properties:
lib.properties = {
	id: '0143FB824669BF48926D49ECB1C53F5F',
	width: 640,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_12.png?1598550941719", id:"CachedBmp_12"},
		{src:"images/batata pink_atlas_1.png?1598550941656", id:"batata pink_atlas_1"},
		{src:"sounds/AcousticBlues.mp3?1598550941719", id:"AcousticBlues"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0143FB824669BF48926D49ECB1C53F5F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;