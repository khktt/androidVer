

import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableHighlight, WebView, Button } from 'react-native';
import {captureScreen} from "react-native-view-shot";
import Mailer from 'react-native-mail';
import BackgroundTask from 'react-native-background-task';
import Email from "./gmail";
import BGRT from "./backgroundTask";

//const email = require("gmail-send");
//var fs = require("fs")

var emailU = "manalearn530@gmail.com";
var pass = "aptx3561"
const TASK_NAME = 'background-location-task';

//Email.sendEmail();
Email();

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
  BGRT(1);

  return (
    <View style={styles.main}>
    
      <View style={styles.background}></View>
      <View style={styles.background1}></View>
      <View className="contain" style={styles.contain}>
        <View style={styles.infoUser}>
          <View style={{width: "100%", paddingTop: 50, flexDirection:'row', flexWrap:'wrap', alignItems: 'center',}}>
            <Image
              style={styles.avtUser}
              source={{uri: "https://thuthuatnhanh.com/wp-content/uploads/2019/04/hinh-anh-chibi-meo-cute-580x580.jpg"}}
            />
            <View style={{}}>
              <Text style={{fontSize: 14}}>Nguyễn Huỳnh Tiến Lâm</Text>
              <Text style={{fontSize: 14}}>Lớp: 10 Tin</Text>
              <Text style={{fontSize: 14}}>Trường: THPT chuyên Lương Văn Chánh</Text>
            </View>
          </View>
        </View>

        <View style={styles.menuBtn}>
          <View style={styles.btn1}><Text style={styles.font}>Bản ghi thời gian</Text></View>
          <View style={styles.btn2}><Text  style={styles.font}>Đánh giá kết quả gần đây</Text></View>
          <View style={styles.btn3}>
            <Text style={styles.fontzo}>Ứng dụng học Online</Text>
            <Image
              style={styles.logoZoom}
              source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVjsO2Y-XIBzssxFyrvbkf0mdV_mUrMLvzw&usqp=CAU"}}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.tree}
        source={require("./treeLogo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden"
  },
  background: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#faeee0"
  },
  background1: {
    position: "absolute",
    bottom: 0,
    //paddingTop: "0%",
    width: "100%",
    height: "50%",
    backgroundColor: "#e6dcc3"
  },
  tree: {
    position: "absolute",
    bottom: 0,
    right: -100,
    width: 250,
    height: 250,
    //overflow: "hidden"
  },
  contain: {
    position: "absolute",
    top: 60,
    flex: 1,
    width: "100%",
    height: "89%",
    //overflow: "hidden"
  },
  infoUser: {
    width: "100%",
    height: "50%",
    backgroundColor: "#eae5df"
  },
  avtUser: {
    width: 120,
    height: 120,
    marginRight: 10,
    //border: "1px #d4d4d4 solid";
    borderWidth: 1,
    borderColor: "#d4d4d4",
    borderStyle: "solid",
    borderRadius: 100,
    //overflow: "hidden"
  },
  menuBtn: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    height: "60%",
    backgroundColor: "#eeeeee",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25
  },
  btn1: {
    position: "relative",
    top: 5,
    left: 10,
    width: 250,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f1d1d2",
    borderRadius: 25
  },
  btn2: {
    position: "relative",
    top: "10%",
    right: -150,
    width: 250,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#c7bea1",
    borderRadius: 25
  },
  btn3: {
    position: "relative",
    bottom: "-20%",
    left: 10,
    width: 250,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row', flexWrap:'wrap',
    backgroundColor: "#1687a7",
    borderRadius: 25
  },
  logoZoom: {
    position: "relative",
    left: -25,
    width: 50,
    height: 50,
    //border: "1px #d4d4d4 solid";
    borderRadius: 100,
    //overflow: "hidden"
  },
  font:{
    textAlign: "center",
    fontSize: 18, 
    fontWeight: "700",
    margin: 20
  },
  fontzo:{
    width: 150,
    textAlign: "center",
    fontSize: 18, 
    fontWeight: "700",
    margin: 25
  }
});
