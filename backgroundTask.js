import * as BackgroundFetch from "expo-background-fetch"
import * as TaskManager from "expo-task-manager"

async function task(N) {
	var TASK_NAME = N.toString();
	TaskManager.defineTask(TASK_NAME, async () => {})
	try {
      await BackgroundFetch.registerTaskAsync(TASK_NAME, {
        minimumInterval: 1, // seconds,
        stopOnTerminate: false, // android only,
        //startOnBoot: true,
      })
      console.log("Task registered")
      
    } catch (err) {
      console.log("Task Register failed:", err)
    }

    TaskManager.defineTask(TASK_NAME, async () => {
          //const now = Date.now();
          
          
          //console.log(`Got background fetch call at date: ${new Date().toISOString()}`)

        captureScreen({
          format: "jpg",
          quality: 0.8
        }).then(
          (uri, error) => {
          	error ? console.error("Oops, snapshot failed", error):console.log("Image saved to", uri);
            BackgroundFetch.unregisterTaskAsync(TASK_NAME);
          }  
        )
    });
}

export default task;