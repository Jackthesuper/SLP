import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {PythonShell} from 'python-shell';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.slp.events({
  'click .process'(event, instance) {
    // increment the counter when button is clicked
    event.preventDefault();
    window.alert("Give me a second to process your audio file.");
    var filename = $(".filename").val();
    filename = /([^\\]+)$/.exec(filename)[1];


    // PythonShell.run('test.py', function (err) {
    //   if (err) throw err;
    //   console.log('finished');
    // });
    var callback = function(error, result){
      console.log(result);
    };
    
    var res = Meteor.call('sayhiserver', filename, callback);
    // var res = Meteor.call('sayhiserver', filename, function(result){
    //     console.log(result);
    // });
    console.log(res);
    console.log("!");
    $(".js-transcription").val("I have acne.");
    $(".js-symptom").val("Skin issue");
    $(".js-department").val("Surgery department");
  },
});


// function extractImage(video_path, frame_rate, time_stamp) {
//  return new Promise((resolve, reject) => {
//   glb_cnt += 1
//   const extract_image = spawn('python3',["./extract_image.py", video_path, frame_rate, time_stamp, glb_cnt]);
//   extract_image.stdout.on('data', data => {
//    resolve(data.toString());
//   });
//  });
// }
