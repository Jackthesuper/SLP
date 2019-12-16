import { Meteor } from 'meteor/meteor';
import {PythonShell} from 'python-shell';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  sayhiserver: function(filename, callback){
    console.log("here!");
    var result = "something";
    var myPythonScript = Assets.absoluteFilePath("test.py")
    //console.log(myPythonScript);
    //var myPythonScript = "test.py";
    var pythonExecutable = "python.exe";
    var uint8arrayToString = function(data){
      return String.fromCharCode.apply(null, data);
    };
    const spawn = require('child_process').spawn;
    const scriptExecution = spawn(pythonExecutable, [myPythonScript, filename]);
    scriptExecution.stdout.on('data', (data) => {
       console.log(uint8arrayToString(data));
       result = uint8arrayToString(data);

    });
    scriptExecution.stderr.on('data', (data) => {
        console.log(uint8arrayToString(data));
    });
    scriptExecution.on('close', function(code) {
        // if(callback)}
        //   return callback(result);
        // }
        // return result;
        return callback(result);
    });

  }
});
